# datauri-to-file [![Build Status](https://travis-ci.org/ragingwind/datauri-to-file.svg?branch=master)](https://travis-ci.org/ragingwind/datauri-to-file)

> data-uri encoded in base64 to file or stream


## Install

```
$ npm install --save datauri-to-file
```


## Usage

```js
const toFile = require('datauri-to-file');
const dataUri = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/Pgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iIAogICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPgo8c3ZnIHZlcnNpb249IjEuMSIKICAgICB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICA8ZGVzYz5tZW51PC9kZXNjPgogIDxnIGlkPSJtZW51Ij48cGF0aCBkPSJNMywxOGgxOHYtMkgzVjE4eiBNMywxM2gxOHYtMkgzVjEzeiBNMyw2djJoMThWNkgzeiIvPjwvZz4KPC9zdmc+Cgo=';

// promise style
toFile(dataUri).then(image => {
	console.log(image.mimeType, image.data, image.extension);
});

// stream style
fs.createReadStream('data-uri')
	.pipe(toFile.stream())
	.pipe(createWriteStream('file.svg'));
```

## API

### toFile(input)

#### input

Type: `string`

String with data-uri encoded in base64.

### toFile(input).stream()

Stream supportable interface.

## License

MIT © [ragingwind](http://ragingwind.me)
