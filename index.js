// load some 3rd party code
// const format = require('sesify-example-format')
const deep = require('sesify-example-deep')
const { doRainbow } = require('sesify-example-rainbow')
const { createBanner } = require('sesify-example-banner')

// do app
const bannerText = 'haay wuurl! welcome to my page'
// const bannerText = format('haay wuurl! welcome to my page')
const banner = createBanner(bannerText)
doRainbow(banner)
document.body.append(banner)
