/**
 * Created by roger on 17-4-13.
 */
var path = require('path');



function main() {
    console.log(path.isAbsolute('/opt'));

    console.log(path.basename('/home/roger/test/test.txt'));

    console.log(path.posix.basename('/home/roger/test/test.txt'));

    console.log(path.basename('/tmp/test/text.txt', '.txt'));
}

main();