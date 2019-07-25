// load some 3rd party code
const format = require('sesify-example-format')
const deep = require('sesify-example-deep')
// const { doRainbow } = require('sesify-example-rainbow')
const { createBanner } = require('sesify-example-banner')

// do app
const bannerText = format('haay wuurl! welcome to my page')
const banner = createBanner(bannerText)
document.body.append(banner)

// doRainbow(banner)