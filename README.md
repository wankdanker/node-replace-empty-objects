replace-empty-objects
---------------------

[![Build Status](https://travis-ci.org/wankdanker/node-replace-empty-objects.svg)](https://travis-ci.org/wankdanker/node-replace-empty-objects)

Recursively replace empty objects with null

install
-------

```bash
npm install replace-empty-objects
```

usage
-----

```js
var replaceEmptyObjects = require('replace-empty-objects');

var obj = {
	a : {
		b : {}
		, c : {}
		, d : {}
	}
	, b : {}
};

replaceEmptyObjects(obj);

console.log(obj);

/*
{
	a : {
		b : null
		, c : null
		, d : null
	}
	, b : null
}
*/
```

license
-------

MIT
