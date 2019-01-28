const path = require('path')
const config = require('react-scripts/config/webpack.config.js')
console.log(config(e => { devtool: 'source-map' }))
module.exports = {
    propsParser: require('react-docgen-typescript').withCustomConfig('./tsconfig.json', (props, component) => true).parse,
    ignore: [
        'src/components/**/*.ts',
    ],
    webpackConfig: config('development', { devtool: 'source-map' }),
    require: [
        path.join(__dirname, 'src/components/base.scss'),
        path.join(__dirname, 'node_modules/@fortawesome/fontawesome-pro/css/all.min.css')
    ]
}