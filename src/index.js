'use strict';

import parseDataUri from 'parse-data-uri';
import mime from 'mime';
import through2 from 'through2';

function toFile(input) {
	return new Promise((resolve, reject) => {
		if (typeof input !== 'string') {
			return reject(new TypeError('Input should be string as base64'));
		}

		var image = parseDataUri(input);
		image.extension = mime.extension(image.mimeType);

		return resolve(image);
	});
}

module.exports = toFile;

module.exports.stream = () => {
	return through2.obj(function (chunk, enc, cb) {
		var _stream = this;
		toFile(chunk.toString()).then(image => {
			_stream.push(image.data);
			cb();
		}).catch(e => {
			cb(e);
		});
	});
};
