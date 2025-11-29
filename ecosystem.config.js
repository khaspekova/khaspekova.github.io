module.exports = {
  apps: [
    {
      name: "kukuruku02",
      script: "node_modules/next/dist/bin/next",
      args: "start",
      cwd: "/path/to/your/domain", // ⚠️ UPDATE THIS: Replace with your actual domain path on Beget
      instances: 1,
      exec_mode: "fork",
      env: {
        NODE_ENV: "production",
        PORT: 3000, // ⚠️ UPDATE THIS: Check with Beget support for the correct port
      },
      error_file: "./logs/err.log",
      out_file: "./logs/out.log",
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
    },
  ],
};

