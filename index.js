var isObjectEmpty = require('is-object-empty');

module.exports = replaceEmptyObjects;

function replaceEmptyObjects(obj) {
	var key;
	
	for (key in obj) {
		if (obj.hasOwnProperty(key) && typeof obj[key] === 'object') {
			if (isObjectEmpty(obj[key])) {
				obj[key] = null;
			}
			else {
				//recurse
				replaceEmptyObjects(obj[key]);
			}
		}
	}

	return obj;
}
