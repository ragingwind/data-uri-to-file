'use strict';

var _parseDataUri = require('parse-data-uri');

var _parseDataUri2 = _interopRequireDefault(_parseDataUri);

var _mime = require('mime');

var _mime2 = _interopRequireDefault(_mime);

var _through = require('through2');

var _through2 = _interopRequireDefault(_through);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function toFile(input) {
	return new Promise(function (resolve, reject) {
		if (typeof input !== 'string') {
			return reject(new TypeError('Input should be string for path or base64'));
		}

		var image = (0, _parseDataUri2.default)(input);
		image.extension = _mime2.default.extension(image.mimeType);

		console.log(image);
		return resolve(image);
	});
}
// import duplexify from 'duplexify';

module.exports = toFile;

module.exports.stream = function () {
	return _through2.default.obj(function (chunk, enc, cb) {
		var _stream = this;
		toFile(chunk.toString()).then(function (image) {
			_stream.push(image.data);
			cb();
		}).catch(function (e) {
			cb(e);
		});
	});
};
