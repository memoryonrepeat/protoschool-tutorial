// https://proto.school/#/mutable-file-system/06

/* global ipfs, all */

const run = async (files) => {
  // this code adds your uploaded files to IPFS
  await Promise.all(files.map(f => ipfs.files.write('/' + f.name, f, { create: true })))
  const rootDirectoryContents = await all(ipfs.files.ls('/'))

  const directoryStatus = await ipfs.files.stat('/')

  return directoryStatus
}

return run
