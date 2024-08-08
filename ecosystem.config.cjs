module.exports = {
  apps: [{
    name: 'vue-preset',
    script: 'serve',
    args: 'dist/ --spa -p 3001',
    instances: 1,
    autorestart: true,
    watch: false,
    exec_mode: 'fork',
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }]
}
