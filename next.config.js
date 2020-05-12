require('dotenv').config()
const withCSS = require("@zeit/next-css")
const path = require('path')

module.exports = withCSS({
  env: {
    APP_URL: process.env.APP_URL,
    B24_URL: process.env.B24_URL,
    B24_ROOT_URL: process.env.B24_ROOT_URL,
    EMAIL: process.env.EMAIL,
    PHONE_NUMBER: process.env.PHONE_NUMBER,
    VK_URL: process.env.VK_URL,
    WA_URL: process.env.WA_URL,
    TG_URL: process.env.TG_URL,
    YMAPS_API: process.env.YMAPS_API,
    UPLOAD_DIR: path.join(__dirname, process.env.UPLOAD_DIR),
    COMPANY_NAME: process.env.COMPANY_NAME,
    PHONE_NUMBER__FOOTER: process.env.PHONE_NUMBER__FOOTER
  }
})
