module.exports = {
  apps: [{
    name: 'teamit-superdoc',
    script: './dist/server/entry.mjs',
    instances: 1,
    autorestart: true,
    env: {
      NODE_ENV: 'production',
      PORT: 4321,
      HOST: '127.0.0.1'
    }
  }]
}
