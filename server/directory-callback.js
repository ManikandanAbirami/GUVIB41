const fs = require('fs')

const directorypath = './public'

fs.readdir(directorypath,
  (err, files) => {
    if (err) return console.error(err)

    console.log(files)
  }
)