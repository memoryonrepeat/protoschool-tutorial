// https://proto.school/#/mutable-file-system/02

/* global ipfs */

const run = async () => {
	const result = await ipfs.files.stat('/')

	return result
}

return run