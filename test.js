'use strict';

import fs from 'fs';
import test from 'ava';
import through2 from 'through2';
import fn from './';

test('Return image from data-uri', t => {
	const png = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/Pgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iIAogICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPgo8c3ZnIHZlcnNpb249IjEuMSIKICAgICB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICA8ZGVzYz5tZW51PC9kZXNjPgogIDxnIGlkPSJtZW51Ij48cGF0aCBkPSJNMywxOGgxOHYtMkgzVjE4eiBNMywxM2gxOHYtMkgzVjEzeiBNMyw2djJoMThWNkgzeiIvPjwvZz4KPC9zdmc+Cgo=';

	fn(png).then(file => {
		t.is(file.mimeType, 'image/svg+xml');
		t.is(file.encoding, 'base64');
		t.is(file.extension, 'svg');
	});
});

test('Return image from stream with data-uri', t => {
	fs.createReadStream('./fixtures/base64encoded.svg')
		.pipe(fn.stream())
		.pipe(through2.obj(() => {
			t.pass();
		})).on('error', e => {
			t.fail(e.toString());
		});
});
