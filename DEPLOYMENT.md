# 🚀 Vercel Deployment Guide - Aarambha Mahotsava 2025

This guide will help you deploy the Aarambha Mahotsava 2025 website to Vercel.

## 📋 Prerequisites

- [Vercel account](https://vercel.com) (free tier available)
- [GitHub account](https://github.com) (for automatic deployments)
- Node.js 18+ installed locally

## 🛠️ Pre-Deployment Setup

### 1. Install Vercel CLI (Optional but Recommended)
```bash
npm i -g vercel
```

### 2. Test Build Locally
```bash
# Install all dependencies
npm run install:all

# Test production build
npm run build

# Test production server locally
npm start
```

## 🌐 Deployment Methods

### Method 1: GitHub Integration (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Ready for Vercel deployment"
   git push origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect the configuration

3. **Configure Build Settings**
   - **Framework Preset**: Other
   - **Build Command**: `npm run build`
   - **Output Directory**: `client/dist`
   - **Install Command**: `npm run install:all`

4. **Environment Variables** (Optional)
   - Add any custom environment variables in Vercel dashboard
   - Reference `env.example` for available variables

5. **Deploy**
   - Click "Deploy"
   - Wait for build to complete
   - Your site will be live at `https://your-project.vercel.app`

### Method 2: Vercel CLI

1. **Login to Vercel**
   ```bash
   vercel login
   ```

2. **Deploy**
   ```bash
   vercel
   ```

3. **Follow Prompts**
   - Link to existing project or create new
   - Confirm build settings
   - Deploy

## ⚙️ Configuration Files

### `vercel.json`
```json
{
  "version": 2,
  "buildCommand": "npm run build",
  "outputDirectory": "client/dist",
  "installCommand": "npm run install:all",
  "framework": null,
  "builds": [
    {
      "src": "server/index.js",
      "use": "@vercel/node"
    }
  ],
  "routes": [
    {
      "src": "/api/(.*)",
      "dest": "/server/index.js"
    },
    {
      "src": "/(.*)",
      "dest": "/client/dist/$1"
    }
  ],
  "env": {
    "NODE_ENV": "production"
  }
}
```

### `.vercelignore`
Excludes unnecessary files from deployment:
- `node_modules`
- Development files
- Logs and cache files
- IDE configurations

## 🔧 Build Process

1. **Install Dependencies**: `npm run install:all`
   - Installs root, server, and client dependencies

2. **Build Client**: `npm run client:build`
   - TypeScript compilation
   - Vite production build
   - Outputs to `client/dist`

3. **Server Setup**: Server code is deployed as Vercel functions

## 📱 Features Included

✅ **Full-Stack Application**
- React frontend with TypeScript
- Express.js backend API
- Server-side rendering support

✅ **Responsive Design**
- Mobile-first approach
- Touch-friendly interface
- Cross-browser compatibility

✅ **Performance Optimized**
- Code splitting
- Image optimization
- Gzip compression
- CDN delivery

✅ **SEO Ready**
- Meta tags
- Open Graph tags
- Sitemap
- Structured data

## 🌍 Environment Variables

Set these in Vercel dashboard if needed:

```bash
NODE_ENV=production
PORT=3000
API_BASE_URL=https://your-domain.vercel.app
```

## 🔄 Automatic Deployments

Once connected to GitHub:
- **Push to main**: Triggers production deployment
- **Push to other branches**: Creates preview deployments
- **Pull requests**: Automatic preview URLs

## 📊 Monitoring

- **Vercel Analytics**: Built-in performance monitoring
- **Function Logs**: Server-side error tracking
- **Build Logs**: Deployment process monitoring

## 🚨 Troubleshooting

### Build Failures
1. Check build logs in Vercel dashboard
2. Ensure all dependencies are in `package.json`
3. Verify TypeScript compilation passes locally

### Runtime Errors
1. Check function logs
2. Verify environment variables
3. Test API endpoints

### Performance Issues
1. Enable Vercel Analytics
2. Check bundle size
3. Optimize images and assets

## 📞 Support

- **Vercel Docs**: [vercel.com/docs](https://vercel.com/docs)
- **GitHub Issues**: Create issues in your repository
- **Vercel Support**: Available in dashboard

## 🎉 Post-Deployment

After successful deployment:

1. **Test All Features**
   - Navigation
   - Registration forms
   - Contact information
   - Mobile responsiveness

2. **Update DNS** (if using custom domain)
   - Point domain to Vercel
   - Configure SSL certificate

3. **Monitor Performance**
   - Check Core Web Vitals
   - Monitor API response times
   - Track user engagement

## 🔗 Useful Links

- **Live Site**: `https://your-project.vercel.app`
- **Vercel Dashboard**: `https://vercel.com/dashboard`
- **GitHub Repository**: `https://github.com/your-username/your-repo`

---

**🎊 Congratulations! Your Aarambha Mahotsava 2025 website is now live on Vercel! 🎊**
