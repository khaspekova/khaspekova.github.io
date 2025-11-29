# Manual Deployment Guide for Beget Hosting (With Server-Side Optimization)

This guide shows you how to deploy your Next.js application to Beget hosting with full server-side features including image optimization, SSR, and API routes.

## Prerequisites

1. **Node.js Support**: Your Beget hosting plan must support Node.js applications
2. **SSH Access**: You'll need SSH access to your Beget server
3. **PM2 or Process Manager**: To keep your Next.js app running

**Important**: If your Beget plan doesn't support Node.js, you'll need to:

- Upgrade to a VPS plan, or
- Contact Beget support to enable Node.js, or
- Use static export instead (see alternative guide)

## Step 1: Build Your Project Locally

Build your Next.js application on your local machine:

```bash
# Install dependencies (if not already installed)
npm install

# Build the production version
npm run build
```

This creates a `.next` folder with the optimized production build.

## Step 2: Prepare Files for Upload

You need to upload these files and folders to your Beget server:

**Required files/folders:**

- `.next/` - The built Next.js application
- `app/` - Your application code
- `public/` - Static assets
- `package.json` - Dependencies configuration
- `package-lock.json` - Lock file for dependencies
- `next.config.ts` - Next.js configuration
- `tsconfig.json` - TypeScript configuration
- `tailwind.config.ts` - Tailwind configuration
- `postcss.config.mjs` - PostCSS configuration
- `eslint.config.mjs` - ESLint configuration (optional)

**Files you can exclude:**

- `node_modules/` - Will be installed on the server
- `.git/` - Version control (optional)
- `README.md` - Documentation (optional)

## Step 3: Archive and Upload

### Option A: Upload as ZIP (Recommended)

1. **Create archive** (excluding node_modules):

   ```bash
   # On macOS/Linux
   zip -r build.zip .next app public package*.json *.ts *.mjs -x "node_modules/*" ".git/*"
   ```

2. **Upload to Beget**:
   - Log into Beget control panel
   - Open File Manager
   - Navigate to your domain directory (usually `www/yourdomain.com/` or `public_html/`)
   - Upload `build.zip`
   - Extract the archive
   - Delete `build.zip`

### Option B: Using FTP/SFTP Client

1. Connect to your Beget server using FTP/SFTP credentials
2. Navigate to your domain's root directory
3. Upload all required files and folders

### Option C: Using SSH/SCP

```bash
# From your local machine
scp -r .next app public package*.json *.ts *.mjs your-username@your-server:/path/to/your/domain/
```

## Step 4: Install Dependencies on Server

SSH into your Beget server:

```bash
# Connect via SSH
ssh your-username@your-server

# Navigate to your domain directory
cd /path/to/your/domain

# Install production dependencies
npm install --production
```

**Note**: If `npm` is not available, contact Beget support to enable Node.js.

## Step 5: Install PM2 (Process Manager)

PM2 keeps your Next.js app running and restarts it if it crashes:

```bash
# Install PM2 globally
npm install -g pm2

# Verify installation
pm2 --version
```

## Step 6: Create PM2 Configuration

Create a file `ecosystem.config.js` in your project root:

```bash
# On the server, create the file
nano ecosystem.config.js
```

Add this content:

```javascript
module.exports = {
  apps: [
    {
      name: "kukuruku02",
      script: "node_modules/next/dist/bin/next",
      args: "start",
      cwd: "/path/to/your/domain",
      instances: 1,
      exec_mode: "fork",
      env: {
        NODE_ENV: "production",
        PORT: 3000, // Change if Beget requires a different port
      },
      error_file: "./logs/err.log",
      out_file: "./logs/out.log",
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
    },
  ],
};
```

**Important**:

- Replace `/path/to/your/domain` with your actual domain path
- Check with Beget support for the correct port (might be different from 3000)

## Step 7: Start Your Application

```bash
# Start the application
pm2 start ecosystem.config.js

# Save PM2 configuration (survives server restarts)
pm2 save

# Set up PM2 to start on server boot (optional)
pm2 startup
# Follow the instructions it provides
```

## Step 8: Configure Reverse Proxy (Nginx)

Beget typically uses Nginx. You may need to configure it to proxy requests to your Next.js app.

### If you have access to Nginx configuration:

Create or edit the Nginx config for your domain:

```nginx
server {
    listen 80;
    server_name yourdomain.com www.yourdomain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }

    # Serve static files directly (optional optimization)
    location /_next/static {
        proxy_pass http://localhost:3000;
        proxy_cache_valid 200 60m;
    }
}
```

### If you don't have Nginx access:

Contact Beget support to:

1. Set up reverse proxy for your domain
2. Point it to `http://localhost:3000` (or your assigned port)
3. Configure SSL/HTTPS if needed

## Step 9: Verify Deployment

1. **Check PM2 status**:

   ```bash
   pm2 status
   pm2 logs kukuruku02
   ```

2. **Test your domain**:

   - Visit `http://yourdomain.com` in a browser
   - Check that pages load correctly
   - Verify images are optimized (check Network tab in DevTools)
   - Test navigation between pages

3. **Check for errors**:
   ```bash
   pm2 logs kukuruku02 --err
   ```

## Step 10: Set Up Environment Variables (If Needed)

If your app needs environment variables, create `.env.production`:

```bash
nano .env.production
```

Add your variables:

```
NODE_ENV=production
PORT=3000
# Add other variables as needed
```

Restart PM2:

```bash
pm2 restart kukuruku02
```

## Updating Your Site

When you need to update:

1. **Build locally**:

   ```bash
   npm run build
   ```

2. **Upload new files**:

   - Upload new `.next/` folder
   - Upload any changed files (app/, public/, etc.)

3. **On the server**:

   ```bash
   # Install any new dependencies
   npm install --production

   # Restart the application
   pm2 restart kukuruku02
   ```

## Useful PM2 Commands

```bash
# View status
pm2 status

# View logs
pm2 logs kukuruku02

# Restart app
pm2 restart kukuruku02

# Stop app
pm2 stop kukuruku02

# Monitor resources
pm2 monit

# Delete app from PM2
pm2 delete kukuruku02
```

## Troubleshooting

### Port Already in Use

If port 3000 is taken, change it in `ecosystem.config.js`:

```javascript
env: {
  NODE_ENV: "production",
  PORT: 3001, // Use a different port
}
```

Then update your Nginx proxy to use the new port.

### Node.js Not Found

```bash
# Check if Node.js is installed
node --version
npm --version

# If not available, contact Beget support
```

### Build Errors on Server

```bash
# Clear npm cache
npm cache clean --force

# Remove node_modules and reinstall
rm -rf node_modules
npm install --production
```

### Images Not Optimizing

- Verify `next.config.ts` doesn't have `output: "export"`
- Check that image optimization is enabled (not `unoptimized: true`)
- Check server logs for image optimization errors

### 502 Bad Gateway

- Check if PM2 is running: `pm2 status`
- Verify the port in Nginx matches PM2 config
- Check PM2 logs: `pm2 logs kukuruku02`

### Memory Issues

Next.js can be memory-intensive. Monitor with:

```bash
pm2 monit
```

If memory is an issue:

- Consider upgrading your hosting plan
- Use `output: "standalone"` for smaller builds (but this disables some features)

## Benefits of Server-Side Deployment

✅ **Image Optimization**: Automatic image optimization and format conversion  
✅ **Server-Side Rendering**: Better SEO and initial load performance  
✅ **API Routes**: Can add server-side API endpoints  
✅ **Dynamic Features**: Full Next.js feature set  
✅ **Incremental Static Regeneration**: Update content without full rebuild

## Alternative: Standalone Build (Smaller Size)

If you want a smaller build but still need server features, you can use standalone mode:

Update `next.config.ts`:

```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone", // Creates a smaller, self-contained build
  images: {
    qualities: [75, 85, 90, 95],
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
```

Then upload `.next/standalone` folder instead of the full `.next` folder.

## Contact Beget Support

If you encounter issues, contact Beget support for:

- Node.js version and availability
- Port configuration
- Nginx reverse proxy setup
- Process manager recommendations
- SSL/HTTPS configuration

## Quick Reference

```bash
# Build locally
npm run build

# Upload files to Beget
# (via FTP, SCP, or zip)

# On server: Install dependencies
npm install --production

# Install PM2
npm install -g pm2

# Start app
pm2 start ecosystem.config.js
pm2 save

# Check status
pm2 status
pm2 logs kukuruku02
```

Your Next.js app is now running with full server-side optimization! 🚀
