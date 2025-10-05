#!/bin/bash

# 🚀 Aarambha Mahotsava 2025 - Vercel Deployment Script

echo "🎉 Starting deployment process for Aarambha Mahotsava 2025..."

# Check if Vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    echo "❌ Vercel CLI not found. Installing..."
    npm install -g vercel
fi

# Check if user is logged in to Vercel
if ! vercel whoami &> /dev/null; then
    echo "🔐 Please login to Vercel first:"
    vercel login
fi

# Install dependencies
echo "📦 Installing dependencies..."
npm run install:all

# Build the project
echo "🔨 Building project..."
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    
    # Deploy to Vercel
    echo "🚀 Deploying to Vercel..."
    vercel --prod
    
    echo "🎊 Deployment complete!"
    echo "🌐 Your site is now live on Vercel!"
else
    echo "❌ Build failed. Please check the errors above."
    exit 1
fi
