// https://proto.school/#/mutable-file-system/05

/* global ipfs, all */

const run = async (files) => {
	// this code adds your uploaded files to IPFS
	await Promise.all(files.map(f => ipfs.files.write('/' + f.name, f, { create: true })))

	const rootDirectoryContents = []

	for await (const resultPart of ipfs.files.ls('/')) {
		rootDirectoryContents.push(resultPart)
	}

	return rootDirectoryContents
}

return run
