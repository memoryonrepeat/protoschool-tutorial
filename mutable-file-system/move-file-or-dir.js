/* global ipfs, all */

// https://proto.school/#/mutable-file-system/08

const run = async (files) => {
  await Promise.all(files.map(f => ipfs.files.write('/' + f.name, f, { create: true })))
  await ipfs.files.mkdir('/some/stuff', { parents: true })
  const rootDirectoryContents = await all(ipfs.files.ls('/'))

  // create an array of the paths of the files to be moved (excluding directories)
  const filepathsToMove = rootDirectoryContents.filter(
    (content) => content.type === 0
  ).map(content => `/${content.name}`)

  // move all the files in filepathsToMove into /some/stuff

  await ipfs.files.mv(filepathsToMove, '/some/stuff')

  const someStuffDirectoryContents = await all(ipfs.files.ls('/some/stuff'))
  return someStuffDirectoryContents
}

return run
