const paths = require('react-scripts/config/paths')
const path = require('path')

// Make the "app" folder be treated as the "src" folder
paths.appSrc = path.resolve(__dirname, 'src/client')
// Tell the app that "src/index.js" has moved to "app/index.js"
paths.appIndexJs = path.resolve(__dirname, 'src/client/index.tsx')
paths.appPublic = path.resolve(__dirname, 'src/client/public')
paths.appHtml = path.resolve(__dirname, 'src/client/public/index.html')
paths.appBuild = path.resolve(__dirname, 'release/client')