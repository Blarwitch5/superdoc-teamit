module.exports = {
  apps: [{
    name: 'teamit-superdoc',
    script: './dist/server/entry.mjs',
    // Restart automatically when content files are saved via Keystatic
    watch: ['src/content/docs'],
    watch_delay: 1500,
    ignore_watch: ['node_modules', '.git', 'dist'],
    env: {
      NODE_ENV: 'production',
      PORT: 4321,
      HOST: '127.0.0.1'
    }
  }]
}
