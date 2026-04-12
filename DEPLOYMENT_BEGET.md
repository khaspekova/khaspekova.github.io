# Manual Deployment Guide for Beget Hosting (With Server-Side Optimization)

This guide shows you how to deploy your Next.js application to Beget hosting with full server-side features including image optimization, SSR, and API routes.

## Prerequisites

1. **Node.js Support**: Your Beget hosting plan must support Node.js applications
2. **SSH Access**: You'll need SSH access to your Beget server
3. **Docker Container Access**: Beget often uses Docker for Node.js - you'll need to access it via `ssh localhost -p 222`
4. **PM2 or Process Manager**: To keep your Next.js app running

## Important: Docker Container on Beget

**Beget uses Docker containers for Node.js applications.** This means:

- ✅ Node.js runs inside a Docker container
- ✅ You need to connect to Docker: `ssh localhost -p 222` (after SSH to server)
- ✅ All Node.js/npm/PM2 commands run inside Docker
- ✅ Your project files are accessible from both regular SSH and Docker
- ⚠️ Paths might be different inside Docker - use `pwd` to check

**Workflow:**

1. SSH to Beget server: `ssh username@server`
2. Enter Docker: `ssh localhost -p 222`
3. Work with Node.js inside Docker
4. Exit Docker: `exit` (returns to regular SSH)

## How to Check Node.js Support on Beget

### Method 1: Check via SSH (Fastest)

#### Step 1: Get Your SSH Credentials

1. **Log into Beget Control Panel**:

   - Go to your Beget control panel (usually beget.com or your account URL)
   - Log in with your Beget account credentials

2. **Find SSH Access Information**:

   - Look for **"SSH Access"** or **"SSH Settings"** section
   - Or go to **"Hosting"** → **"SSH Access"**
   - Or check **"Account Settings"** → **"SSH"**

3. **You'll need**:
   - **SSH Host/Server**: Usually `yourdomain.com` or `beget.com` or an IP address
   - **SSH Port**: Usually `22` (default) or a custom port
   - **Username**: Your Beget username or FTP username
   - **Password**: Your SSH password (may be different from control panel password)
   - **Or SSH Key**: If you've set up key-based authentication

**Note**: If SSH is not enabled:

- Look for **"Enable SSH"** or **"Activate SSH"** button
- Some shared plans require enabling SSH access first
- Contact Beget support if you can't find SSH settings

#### Step 2: Connect via SSH

**On macOS/Linux (Terminal):**

```bash
# Basic connection
ssh username@your-server.beget.com

# Or with specific port (if not 22)
ssh -p PORT_NUMBER username@your-server.beget.com

# Example:
ssh myusername@myaccount.beget.com
# or
ssh -p 2222 myusername@myaccount.beget.com
```

**On Windows:**

**Option A: Using PowerShell (Windows 10/11):**

```powershell
# Open PowerShell and run:
ssh username@your-server.beget.com
```

**Option B: Using PuTTY (Recommended for Windows):**

1. Download PuTTY: https://www.putty.org/
2. Open PuTTY
3. Enter:
   - **Host Name**: `your-server.beget.com` or IP
   - **Port**: `22` (or your custom port)
   - **Connection Type**: SSH
4. Click **Open**
5. Enter username and password when prompted

**Option C: Using Windows Terminal:**

```bash
# Open Windows Terminal and run:
ssh username@your-server.beget.com
```

#### Step 3: Enter Password

When prompted, enter your SSH password (you won't see characters as you type - this is normal for security).

#### Step 4: Enter Docker Container (If Using Docker)

**If your Beget hosting uses Docker** (which is common), you need to enter the Docker container:

```bash
# After connecting to server via SSH, enter Docker
ssh localhost -p 222
# Enter your SSH password
# You should see: (docker) username@server: [0]~
```

**If you don't use Docker**, skip this step and proceed to checking Node.js.

#### Step 5: Check Node.js

Once connected (and inside Docker if applicable), run:

```bash
# Check if Node.js is installed
node --version

# Check if npm is available
npm --version

# Check Node.js installation path
which node
which npm
```

**Results:**

- ✅ If you see version numbers (e.g., `v18.17.0`), Node.js is available
- ❌ If you see `command not found`, Node.js is not installed

**Note**: If you're using Docker, Node.js might only be available inside the Docker container, not in regular SSH session.

#### What to Do If Node.js is NOT Found

If you get `-bash: node: command not found`, Node.js is not installed on your server. Here are your options:

**Option 1: Install Node.js via NVM (Node Version Manager)**

Try installing Node.js using NVM (works on most Linux systems):

```bash
# Install NVM
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

# Reload your shell configuration
source ~/.bashrc
# or
source ~/.bash_profile

# Install the latest LTS version of Node.js
nvm install --lts

# Use the installed version
nvm use --lts

# Verify installation
node --version
npm --version
```

**If NVM installation fails** (permission denied or command not found):

- You may not have permission to install software (shared hosting limitation)
- Contact Beget support to install Node.js

**Option 2: Contact Beget Support**

Ask Beget support to:

- Install Node.js on your server
- Enable Node.js support for your hosting plan
- Provide the Node.js version available

**Option 3: Check if Node.js is Available via Different Path**

Sometimes Node.js is installed but not in PATH:

```bash
# Check common installation paths
ls /usr/bin/node
ls /usr/local/bin/node
ls ~/.nvm/versions/node/*/bin/node

# If found, add to PATH or create symlink
# (requires appropriate permissions)
```

**Option 4: Use Static Export Instead**

If Node.js cannot be installed, you can deploy as static files:

- No Node.js required
- No server-side image optimization
- Works on any hosting plan
- See static export deployment method

#### Troubleshooting SSH Connection

**"Permission denied" or "Connection refused":**

- Verify your username and password
- Check if SSH is enabled in your Beget control panel
- Verify the server address is correct
- Check if your IP is whitelisted (some plans require this)

**"Host key verification failed":**

```bash
# Remove old host key and try again
ssh-keygen -R your-server.beget.com
```

**Can't find SSH settings:**

- Contact Beget support to enable SSH access
- Some shared hosting plans may not have SSH by default
- VPS plans always have SSH access

**Alternative: Use Beget File Manager**
If SSH is not available, you can sometimes check Node.js through:

- Beget Control Panel → File Manager → Terminal (if available)
- Or contact support directly

### Method 2: Check Beget Control Panel

1. Log into your **Beget control panel** (your Beget account URL)
2. Look for sections like:

   - **"Node.js"** or **"Node.js Applications"**
   - **"Applications"** → Check for Node.js option
   - **"Hosting Settings"** → Look for Node.js configuration
   - **"VPS Management"** (if you have VPS plan)

3. Check your **hosting plan details**:
   - Look at your current plan features
   - VPS plans usually support Node.js
   - Shared hosting may or may not support it

### Method 3: Check Your Hosting Plan Type

**Beget hosting types:**

- **Shared Hosting** (Тарифный план):
  - Usually does NOT support Node.js by default
  - May require upgrade or special configuration
- **VPS Hosting** (VPS):

  - ✅ Full Node.js support
  - Full root access
  - Can install any software

- **Dedicated Server**:
  - ✅ Full Node.js support
  - Complete control

### Method 4: Contact Beget Support

If you're unsure, contact Beget support:

1. **Email**: support@beget.com
2. **Live Chat**: Available in control panel
3. **Ask them**:
   - "Does my hosting plan support Node.js applications?"
   - "Can I run a Next.js application on my current plan?"
   - "What Node.js version is available?"
   - "Do I need to upgrade to VPS for Node.js support?"

### Method 5: Check Documentation

Visit Beget's documentation:

- Look for "Node.js" or "Applications" section
- Check hosting plan comparison
- Review VPS vs Shared hosting features

### Quick Test: Try Installing Node.js

If you have SSH access, try installing Node.js (this will tell you if it's possible):

```bash
# Try using nvm (Node Version Manager) - if available
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
nvm install node

# Or check if you can install via package manager
# (This depends on your plan permissions)
```

**Note**: On shared hosting, you typically cannot install system packages. This test helps identify your hosting type.

## What to Do Based on Results

### ✅ Node.js is Available

Proceed with the deployment guide below. You're all set!

### ❌ Node.js is NOT Available

You have three options:

1. **Upgrade to VPS** (Recommended for full features):

   - Full Node.js support
   - Better performance
   - More control

2. **Contact Beget Support**:

   - Ask if they can enable Node.js on your plan
   - Some shared plans can be configured for Node.js

3. **Use Static Export** (Alternative):
   - Deploy as static files (no Node.js needed)
   - No server-side image optimization
   - Works on any hosting plan
   - See alternative deployment method

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

### Option A: Upload as ZIP (Recommended - Fastest Method)

**Important**: The upload method (ZIP, FTP, or SCP) does NOT affect Next.js optimizations. All optimizations are already baked into the `.next` folder during `npm run build`. ZIP is recommended only because it's faster and easier to upload multiple files at once.

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

**All Next.js optimizations are preserved** - the `.next` folder contains:

- ✅ Optimized JavaScript bundles
- ✅ Server-side rendering capabilities
- ✅ Image optimization runtime
- ✅ All production optimizations

### Option B: Using FTP/SFTP Client

**Same optimizations** - just a different transfer method.

1. Connect to your Beget server using FTP/SFTP credentials
2. Navigate to your domain's root directory
3. Upload all required files and folders

### Option C: Using SSH/SCP

**Same optimizations** - direct file transfer via SSH.

```bash
# From your local machine
scp -r .next app public package*.json *.ts *.mjs your-username@your-server:/path/to/your/domain/
```

**Note**: All three methods preserve Next.js optimizations. Choose based on what's most convenient for you:

- **ZIP**: Fastest for multiple files, good for one-time uploads
- **FTP/SFTP**: Good for incremental updates, visual file management
- **SCP**: Fastest for command-line users, good for automation

## Step 4: Install Dependencies on Server

**Important**: If your Beget hosting uses Docker (which is common), you need to work inside the Docker container.

**⚠️ Note**: After this step, your site will NOT be working yet. You need to:

- Step 5: Install PM2
- Step 7: Start the application
- Step 8: Configure reverse proxy (Nginx) - **This is required for the site to be accessible via your domain**

### Step 4a: Connect to Docker Container

```bash
# First, connect to your Beget server
ssh your-username@your-server

# Then, enter Docker container (as per Beget instructions)
ssh localhost -p 222
# Enter your SSH password when prompted

# You should now see: (docker) username@server: [0]~
```

### Step 4b: Navigate and Install Dependencies

```bash
# Navigate to your domain directory (inside Docker)
cd /path/to/your/domain

# Check Node.js is available
node --version
npm --version

# Install production dependencies
npm install --production
```

**Note**:

- All Node.js commands must be run inside Docker container
- The path inside Docker might be different from the regular server path
- Use `pwd` to check your current location inside Docker
- **After this step, the site is still not running** - continue to Step 5 and Step 7

## Step 5: Install PM2 (Process Manager)

**Important**: Install PM2 inside the Docker container.

PM2 keeps your Next.js app running and restarts it if it crashes:

```bash
# Make sure you're inside Docker container
# (You should see (docker) in your prompt)

# Install PM2 globally (directory doesn't matter - it's global)
# You can be in any directory, for example:
cd ~  # or stay wherever you are
npm install -g pm2

# Verify installation
pm2 --version
```

**Note**:

- PM2 is installed globally, so directory doesn't matter
- PM2 will run inside Docker container
- If Docker restarts, you may need to restart PM2

## Step 6: Create PM2 Configuration

**Important**: Create and edit the file inside Docker container, or upload it from your local machine.

### Option A: Create file inside Docker

```bash
# Make sure you're inside Docker container
# Navigate to your project directory
cd /path/to/your/domain

# Create the file
nano ecosystem.config.js
# or
vi ecosystem.config.js
```

### Option B: Upload from local machine

Upload the `ecosystem.config.js` file you prepared locally to your project directory on the server (via FTP or File Manager), then it will be accessible inside Docker.

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

**Important**: All commands must be run inside Docker container.

### How to Find the Correct Port

Before starting, you need to know which port to use. Here are ways to find it:

**Method 1: Check with Beget Support (Recommended)**

- Contact Beget support and ask: "What port should I use for my Node.js application?"
- They will tell you the assigned port (often 3000, but could be different)

**Method 2: Check Beget Control Panel**

- Look in your hosting settings for "Node.js Applications" or "Applications"
- Check if there's a port assignment or configuration
- Look for any documentation about Node.js ports

**Method 3: Check Environment Variables**

```bash
# Inside Docker container
cd /path/to/your/domain
cat .env | grep PORT
# or
env | grep PORT
```

**Method 4: Try Default Port First**

- Start with port `3000` (Next.js default)
- If it doesn't work or you get "port already in use" error, try `3001`, `3002`, etc.
- Check logs: `pm2 logs kukuruku02` to see if there are port errors

**Method 5: Check What Ports Are in Use**

```bash
# Inside Docker container
netstat -tuln | grep LISTEN
# or
ss -tuln | grep LISTEN
```

This shows which ports are already in use.

**Common Ports on Beget:**

- `3000` - Most common default
- `3001`, `3002`, etc. - If 3000 is taken
- Custom port assigned by Beget support

### Option A: Start Without Config File (Quick Test - Recommended First)

You can start PM2 directly without a config file for quick testing:

```bash
# Make sure you're inside Docker container
# (You should see (docker) in your prompt)

# Navigate to your project directory
cd /path/to/your/domain
# For example: cd /home/username/www/site_name/public_html

# Start Next.js directly with PM2 (uses default port 3000)
pm2 start node_modules/next/dist/bin/next --name kukuruku02 -- start

# Or specify port explicitly (replace 3000 with your port if different)
pm2 start node_modules/next/dist/bin/next --name kukuruku02 -- start --port 3000

# Check status
pm2 status

# View logs to see if it's working
pm2 logs kukuruku02

# Save PM2 configuration (so it persists)
pm2 save
```

**This is the easiest way to test first!** If it works, you can later create `ecosystem.config.js` for better configuration.

### Option B: Start With Config File (For Production)

If you've created `ecosystem.config.js`:

```bash
# Make sure you're inside Docker container
# Navigate to your project directory
cd /path/to/your/domain

# Start using config file
pm2 start ecosystem.config.js

# Save PM2 configuration
pm2 save

# Check status
pm2 status

# View logs
pm2 logs kukuruku02
```

**Note**:

- PM2 runs inside Docker container
- If Docker container restarts, you'll need to restart PM2
- To exit Docker container: type `exit`
- To reconnect to Docker: `ssh localhost -p 222`
- To stop the app: `pm2 stop kukuruku02`
- To restart: `pm2 restart kukuruku02`

## Step 8: Configure Reverse Proxy (Nginx) - **REQUIRED FOR SITE TO WORK**

**⚠️ Critical**: Your site will NOT be accessible via your domain until this step is completed!

Beget typically uses Nginx. You need to configure it to proxy requests from your domain to your Next.js app running on localhost:3000 (or your assigned port).

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

### If you don't have Nginx access (or if you see Apache errors):

**Important**: If you see "Forbidden" from Apache, you need to configure reverse proxy!

Contact Beget support and tell them:

1. **You're getting "Forbidden" error from Apache**
2. **You need reverse proxy configured** for your Node.js application
3. **Your Next.js app is running on**: `http://localhost:3000` (or your assigned port)
4. **Your domain is**: `haspy.fun` (or your domain)
5. **Request**: Set up reverse proxy from your domain to `http://localhost:3000`

**What they need to do**:

- Configure Apache/Nginx to proxy requests from your domain to `http://localhost:3000`
- This will make your Next.js app accessible via your domain instead of showing "Forbidden"

**Alternative**: If Beget uses Apache, they might need to configure `.htaccess` or Apache virtual host. Ask them about this.

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

### EPERM Error: "operation not permitted" on Port

**Error**: `Error: listen EPERM: operation not permitted :::3000`

**Quick Fix**:

```bash
# 1. Stop the failing process
pm2 stop kukuruku02
pm2 delete kukuruku02

# 2. Try a different port (3001, 3002, etc.)
pm2 start node_modules/next/dist/bin/next --name kukuruku02 -- start --port 3001

# 3. Check logs
pm2 logs kukuruku02
```

**If different ports don't work**, contact Beget support to get the assigned port for your Node.js application.

### "Forbidden" or "403 Forbidden" Error from Apache

If you see "Forbidden - You don't have permission to access this resource" from Apache, this means:

**Problem**: Apache is trying to serve files directly instead of proxying to your Next.js app.

**Solutions**:

1. **Check if Next.js server is running**:

   ```bash
   # Inside Docker container
   pm2 status
   pm2 logs kukuruku02
   ```

   - If not running, start it: `pm2 start node_modules/next/dist/bin/next --name kukuruku02 -- start`

2. **Verify reverse proxy is configured**:

   - The error shows Apache is handling requests directly
   - You need to configure reverse proxy (Step 8)
   - Contact Beget support to set up reverse proxy from your domain to `http://localhost:3000` (or your port)

3. **Check if you're using Apache instead of Nginx**:

   - Beget might use Apache instead of Nginx
   - You need to configure Apache reverse proxy instead
   - Contact Beget support for Apache configuration

4. **Temporary workaround - Check if Next.js is accessible directly**:

   ```bash
   # Inside Docker, check if server is running
   curl http://localhost:3000
   ```

   - If this works, the problem is only with reverse proxy configuration
   - Contact Beget support to configure reverse proxy

5. **Contact Beget Support**:
   - Tell them: "I'm getting 'Forbidden' error from Apache. I need reverse proxy configured for my Node.js application running on localhost:3000"
   - Provide your domain name
   - Ask them to set up reverse proxy from your domain to your Next.js server

### Port Already in Use or EPERM Error

**Error**: `Error: listen EPERM: operation not permitted :::3000`

This means you don't have permission to use port 3000, or it's restricted by Beget.

**Solution 1: Use a Different Port (Try This First)**

Stop the current process and try a different port:

```bash
# Stop the current process
pm2 stop kukuruku02
pm2 delete kukuruku02

# Try port 3001
pm2 start node_modules/next/dist/bin/next --name kukuruku02 -- start --port 3001

# Check if it works
pm2 logs kukuruku02
```

If 3001 doesn't work, try 3002, 3003, etc.

**Solution 2: Check What Ports Are Available**

```bash
# Inside Docker, check which ports you can use
netstat -tuln | grep LISTEN
# or
ss -tuln | grep LISTEN
```

**Solution 3: Contact Beget Support (Recommended)**

Ask Beget support:

- "I'm getting 'EPERM: operation not permitted' on port 3000"
- "What port should I use for my Node.js application?"
- "Which port is assigned for my Node.js app?"

They will tell you the correct port to use.

**Solution 4: Use IPv4 Instead of IPv6**

Sometimes the issue is with IPv6 (`::`). Try forcing IPv4:

```bash
# Stop current process
pm2 stop kukuruku02
pm2 delete kukuruku02

# Start with IPv4 only (127.0.0.1 instead of ::)
HOSTNAME=127.0.0.1 pm2 start node_modules/next/dist/bin/next --name kukuruku02 -- start --port 3001
```

**After finding the correct port:**

1. Update your PM2 command to use the correct port
2. Update Nginx/Apache reverse proxy to point to the correct port
3. Update `ecosystem.config.js` if using it:

```javascript
env: {
  NODE_ENV: "production",
  PORT: 3001, // Use the port assigned by Beget
}
```

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
