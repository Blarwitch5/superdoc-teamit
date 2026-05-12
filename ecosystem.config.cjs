module.exports = {
  apps: [{
    name: 'teamit-superdoc',
    script: './dist/server/entry.mjs',
    cwd: __dirname,
    instances: 1,
    autorestart: true,
    env_file: '.env',
    env: {
      NODE_ENV: 'production',
      PORT: 4321,
      HOST: '127.0.0.1',
      SITE_URL: 'https://superdoc.team-it.ch'
    }
  }]
}
