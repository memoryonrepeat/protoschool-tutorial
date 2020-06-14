// https://proto.school/#/mutable-file-system/04
const run = async (files) => {
  for (let file of files) {
    await ipfs.files.write('/' + file.name, file, { create: true })
  }
}

return run
