var OfflinePlugin = require('offline-plugin');

module.exports = {
  // ...

  plugins: [
    // ... other plugins
    // it's always better if OfflinePlugin is the last plugin added
    new OfflinePlugin({
        safeToUseOptionalCaches: true,
  
        caches: {
          main: [
            'main.js',
            'main.css',
            'index.html'
          ],
          additional: [
            '*.woff',
            '*.woff2'
          ],
          optional: [
            ':rest:'
          ]
        },
  
        ServiceWorker: {
          events: true
        },
        AppCache: {
          events: true
        }
      })
  ]
  // ...
}