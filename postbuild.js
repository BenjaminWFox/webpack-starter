const fs = require('fs')
const archiver = require('archiver')

// fs.unlinkSync('./dist/o.js')
// fs.unlinkSync('./dist/main.css')

const output = fs.createWriteStream('./dist/build.zip')
const archive = archiver('zip', {
  zlib: { level: 9 }, // set compression to best
})

const MAX = 13 * 1024 // 13kb

const formatForTextbox = (oMessage) => {
  let msg = oMessage
  const { length } = msg
  const lineLength = 40
  const spaces = lineLength - 2 - length

  if (oMessage === '*') {
    for (let i = 0; i < spaces; i += 1) {
      msg += '*'
    }
  }
  else {
    for (let i = 0; i < spaces; i += 1) {
      if (i < spaces / 2) {
        msg = ` ${msg}`
      }
      else {
        msg = `${msg} `
      }
    }
  }

  msg = `*${msg}*`

  return msg
}

output.on('close', () => {
  const bytes = archive.pointer()
  const percent = ((bytes / MAX) * 100).toFixed(2)

  const msg = bytes > MAX
    ? `BAD: ${bytes} bytes (${percent}%)`
    : `GOOD: ${bytes} bytes (${percent}%)`

  console.log('')
  console.log(formatForTextbox('*'))
  console.log(formatForTextbox(''))
  console.log(formatForTextbox('ARCHIVE BUILT'))
  console.log(formatForTextbox(''))
  console.log(formatForTextbox(msg))
  console.log(formatForTextbox(''))
  console.log(formatForTextbox('*'))
  console.log('')
})

archive.on('warning', (err) => {
  if (err.code === 'ENOENT') {
    console.warn(err)
  }
  else {
    throw err
  }
})

archive.on('error', (err) => {
  throw err
})

archive.pipe(output)
archive.append(
  fs.createReadStream('./dist/index.html'), {
    name: 'index.html',
  },
)

archive.finalize()
