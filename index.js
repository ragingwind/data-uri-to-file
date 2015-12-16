'use strict';

var _dataUriRegex = require('data-uri-regex');

var _dataUriRegex2 = _interopRequireDefault(_dataUriRegex);

var _mime = require('mime');

var _mime2 = _interopRequireDefault(_mime);

var _through = require('through2');

var _through2 = _interopRequireDefault(_through);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function toFile(input) {
	return new Promise(function (resolve, reject) {
		if (typeof input !== 'string') {
			return reject(new TypeError('Input should be string as base64'));
		}

		var data = (0, _dataUriRegex2.default)().exec(input);

		return resolve(data ? {
			mimeType: data[2],
			encoding: data[3],
			data: new Buffer(data[4]),
			extension: _mime2.default.extension(data[2])
		} : undefined);
	});
}

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