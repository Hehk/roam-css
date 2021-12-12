// Super basic webserver for linking with roam while developing

const fs = require('fs/promises')
const cors = require('micro-cors')()
const path = require('path')

module.exports = cors(async () => {
  const cssBuffer = await fs.readFile(path.join(__dirname, 'build', 'roam.css'))
  const css = cssBuffer.toString('utf8')
  return css
})
