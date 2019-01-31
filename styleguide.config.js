const path = require('path')
const config = require('react-scripts/config/webpack.config.js')
module.exports = {
    propsParser: require('react-docgen-typescript').withCustomConfig('./tsconfig.json', (props, component) => true).parse,
    ignore: [
        'src/components/**/*.ts',
    ],
    webpackConfig: config('development', { devtool: 'source-map' }),
    require: [
        path.join(__dirname, 'src/components/base.scss'),
        path.join(__dirname, 'node_modules/@fortawesome/fontawesome-free/css/all.min.css')
    ]
}