const glob = require('glob')
const path = require('path')

function getEntry(globPath, replaceDir, exclude) {
  let files = glob.sync(globPath)
  let entries = {}
  let entryname, filepath, dirname

  for (let i = 0; i < files.length; i++) {
    filepath = files[i]
    dirname = path.dirname(filepath)

    if (replaceDir) {
      dirname = dirname.replace(new RegExp('^' + replaceDir), '')
    }

    entryname = dirname.substring(dirname.lastIndexOf('/') + 1)

    if (exclude && exclude.indexOf(entryname) > -1) {
      continue
    }
    entries[entryname] = [filepath]
  }
  return entries
}
let srcEntry = path.resolve(__dirname, '../src/components/*/index.js')
let entries = getEntry(srcEntry)
entries.index = path.resolve(__dirname, '../src/components/index.js')

module.exports = entries
