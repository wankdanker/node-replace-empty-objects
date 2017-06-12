var replaceEmpty = require('./')
	assert = require('assert');

var dt = new Date();

var obj = {
	a : ''
	, b : {}
	, c : {
		ca : ''
		, cb : {}
	}
	, someDate : dt

};

assert.deepEqual(replaceEmpty(obj), {
	a : ''
	, b : null
	, c : {
		ca : ''
		, cb : null
	}
	, someDate : dt
});

