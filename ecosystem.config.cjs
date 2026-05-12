const fs = require('fs')
const path = require('path')

function loadEnv() {
  try {
    const lines = fs.readFileSync(path.join(__dirname, '.env'), 'utf-8').split('\n')
    const env = {}
    for (const line of lines) {
      const trimmed = line.trim()
      if (!trimmed || trimmed.startsWith('#')) continue
      const idx = trimmed.indexOf('=')
      if (idx === -1) continue
      env[trimmed.slice(0, idx).trim()] = trimmed.slice(idx + 1).trim()
    }
    return env
  } catch {
    return {}
  }
}

const fileEnv = loadEnv()

module.exports = {
  apps: [{
    name: 'teamit-superdoc',
    script: './dist/server/entry.mjs',
    cwd: __dirname,
    instances: 1,
    autorestart: true,
    env: {
      NODE_ENV: 'production',
      PORT: 4321,
      HOST: '127.0.0.1',
      SITE_URL: 'https://superdoc.team-it.ch',
      ...fileEnv
    }
  }]
}
