/**
 * PM2 Configuration File for Next.js Application
 *
 * ⚠️ IMPORTANT: Beget uses Docker containers for Node.js
 *
 * INSTRUCTIONS:
 * 1. Connect to Docker container on Beget:
 *    - SSH to server: ssh username@your-server
 *    - Enter Docker: ssh localhost -p 222
 *    - You should see: (docker) username@server: [0]~
 *
 * 2. Find your domain path INSIDE Docker:
 *    - Inside Docker, navigate to your project: cd /path/to/project
 *    - Run: pwd (to get the path inside Docker)
 *    - Common paths: /home/username/www/yourdomain.com or /home/username/public_html
 *    - ⚠️ Path inside Docker might differ from regular SSH path!
 *
 * 3. Find the correct port:
 *    - Check with Beget support
 *    - Or check if there's a .env file with PORT setting
 *    - Common ports: 3000, 3001, or a port assigned by Beget
 *
 * 4. Update the two values below (cwd and PORT)
 * 5. Upload this file to your server (accessible from Docker)
 * 6. Inside Docker, run: pm2 start ecosystem.config.js
 */

module.exports = {
  apps: [
    {
      name: "kukuruku02",
      script: "node_modules/next/dist/bin/next",
      args: "start",

      // ⚠️ STEP 1: Replace with your actual project path on Beget server
      // To find it: SSH to server, cd to your project, run 'pwd'
      // Example: "/home/myusername/www/mydomain.com"
      cwd: "/path/to/your/domain",

      instances: 1,
      exec_mode: "fork",

      env: {
        NODE_ENV: "production",

        // ⚠️ STEP 2: Replace with the correct port for your Beget server
        // Check with Beget support or look for port in your hosting settings
        // Common: 3000, 3001, or a custom port assigned by Beget
        PORT: 3000,
      },

      // Log files location (relative to cwd)
      error_file: "./logs/err.log",
      out_file: "./logs/out.log",
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
    },
  ],
};
