// https://proto.school/#/mutable-file-system/07

const run = async (files) => {
  // This code adds your uploaded files to your root directory in IPFS
  await Promise.all(files.map(f => ipfs.files.write('/' + f.name, f, { create: true })))

  // Add your code to create a new directory here

  await ipfs.files.mkdir('/some/stuff', { parents: true })

  let rootDirectoryContents = await all(ipfs.files.ls('/'))
  return rootDirectoryContents
}

return run
