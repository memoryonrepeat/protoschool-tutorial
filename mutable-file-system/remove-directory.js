/* global ipfs, all */

// https://proto.school/#/mutable-file-system/11

const run = async (files) => {
  await Promise.all(files.map(f => ipfs.files.write('/' + f.name, f, { create: true })))
  await ipfs.files.mkdir('/some/stuff', { parents: true })
  let rootDirectoryContents = await all(ipfs.files.ls('/'))
  const filepathsToMove = rootDirectoryContents.filter(file => file.type === 0).map(file => '/' + file.name)
  await ipfs.files.mv(filepathsToMove, '/some/stuff')
  await ipfs.files.cp('/ipfs/QmWCscor6qWPdx53zEQmZvQvuWQYxx1ARRCXwYVE4s9wzJ', '/some/stuff/success.txt')
  let someStuffDirectoryContents = await all(ipfs.files.ls('/some/stuff'))

  await ipfs.files.rm('/some', { recursive: true })

  let finalRootDirectoryContents = await all(ipfs.files.ls('/'))
  return finalRootDirectoryContents
}

return run
