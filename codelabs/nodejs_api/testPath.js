/**
 * Created by roger on 17-4-13.
 */
var path = require('path');



function main() {
    console.log(path.isAbsolute('/opt'));

    console.log(path.basename('/home/roger/test/test.txt'));

    console.log(path.posix.basename('/home/roger/test/test.txt'));

    console.log(path.basename('/tmp/test/text.txt', '.txt'));

    var p = process.env.PATH;
    console.log(p);
    console.log('path.win32.delimiter:' + path.win32.delimiter);
    console.log('path.posix.delimiter:' + path.posix.delimiter);
    console.log('path.delimiter:' + path.delimiter);
    console.log('PATH.split:' + p.split(path.delimiter));

    console.log('path.dirname:' + path.dirname('/tmp/test/test.txt'));
    console.log('path.dirname:' + path.dirname('/tmp/test/'));
    console.log('path.dirname:' + path.dirname('/tx/'));
    //console.log('path.dirname:' + path.dirname([]));

    console.log(path.extname('index.html')); // Returns: '.html'
    console.log(path.extname('index.coffee.md')); // Returns: '.md'
    console.log(path.extname('index.')); // Returns: '.'
    console.log(path.extname('index')); // Returns: ''
    console.log(path.extname('.index')); // Returns: ''

    console.log(path.isAbsolute('/foo/bar')); // true
    console.log(path.isAbsolute('/baz/..'));  // true
    console.log(path.isAbsolute('qux/'));     // false
    console.log(path.isAbsolute('.'));  // false

    console.log(path.join('/foo', 'bar', 'baz/asdf', 'quux', '..')); // Returns: '/foo/bar/baz/asdf'
    console.log(path.join('/foo', 'bar', 'baz/asdf', 'quux')); // Returns: '/foo/bar/baz/asdf/quux'
    console.log(path.join('/foo', 'bar', 'baz/asdf', 'quux', '.')); // Returns: '/foo/bar/baz/asdf'
    //console.log(path.join('foo', {}, 'bar'));// throws TypeError: Arguments to path.join must be strings

    console.log(path.normalize('/home/roger'));
    console.log(path.normalize('/home//roger/test/..'));
    console.log(path.normalize('/home/roger/test/\.'));

    console.log(path.parse('/home/roger/test/test.txt'));
}

main();