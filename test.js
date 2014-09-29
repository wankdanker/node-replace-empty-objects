var replaceEmpty = require('./')
	assert = require('assert');

var obj = {
	a : ''
	, b : {}
	, c : {
		ca : ''
		, cb : {}
	}
};

assert.deepEqual(replaceEmpty(obj), {
	a : ''
	, b : null
	, c : {
		ca : ''
		, cb : null
	}
});

