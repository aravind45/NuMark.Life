#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Starting NuMark Portfolio Deployment...\n');

// Check if Vercel CLI is installed
try {
  execSync('vercel --version', { stdio: 'ignore' });
  console.log('✅ Vercel CLI found');
} catch (error) {
  console.log('❌ Vercel CLI not found. Installing...');
  try {
    execSync('npm install -g vercel', { stdio: 'inherit' });
    console.log('✅ Vercel CLI installed successfully');
  } catch (installError) {
    console.error('❌ Failed to install Vercel CLI. Please install manually:');
    console.error('npm install -g vercel');
    process.exit(1);
  }
}

// Build the project
console.log('\n📦 Building the project...');
try {
  execSync('npm run build', { stdio: 'inherit' });
  console.log('✅ Build completed successfully');
} catch (error) {
  console.error('❌ Build failed. Please check the errors above.');
  process.exit(1);
}

// Deploy to Vercel
console.log('\n🌐 Deploying to Vercel...');
try {
  execSync('vercel --prod', { stdio: 'inherit' });
  console.log('\n🎉 Deployment completed successfully!');
  console.log('\n📝 Your NuMark portfolio is now live on Vercel.');
  console.log('🔗 Check your Vercel dashboard for the live URL.');
} catch (error) {
  console.error('❌ Deployment failed. Please check the errors above.');
  console.log('\n💡 Alternative deployment options:');
  console.log('1. Manual upload: Drag the "out" folder to vercel.com');
  console.log('2. GitHub integration: Push to GitHub and connect to Vercel');
  process.exit(1);
}

console.log('\n✨ Deployment process completed!');