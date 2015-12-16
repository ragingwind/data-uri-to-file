# data-uri-to-file [![Build Status](https://travis-ci.org/ragingwind/data-uri-to-file.svg?branch=master)](https://travis-ci.org/ragingwind/data-uri-to-file)

> data-uri encoded in base64 to file or stream


## Install

```
$ npm install --save data-uri-to-file
```


## Usage

```js
const toFile = require('data-uri-to-file');
const dataUri = 'data:image/svg+xml;base64,PD94bWwgdmVy ... URPQ1RZUEUgc3ZnIFB4KPC9zdmc+Cgo=';

// promise style
toFile(dataUri).then(file => {
	console.log(file.mimeType, file.data, file.extension);
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

### toFile.stream()

Stream supportable interface.

## License

MIT © [ragingwind](http://ragingwind.me)
