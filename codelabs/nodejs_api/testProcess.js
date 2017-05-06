/**
 * Created by roger on 17-4-18.
 */

// process object is global, no need to use require() to import

var fs = require('fs')


function main() {
    //testExit();
    testUncaughtException();
}

function testUncaughtException() {
    process.on('uncaughtException', function (err) {
        fs.writeSync(1, 'Caught exception: ${err}');
    });
    
    setTimeout(function () {
        print('this will run...');
    }, 500);

    // Intentionally cause a exception, but don't catch it.
    nonexistentFunction();
    print('this will not run.')
}

function testRejectionHandle() {
    //TODO need to do it after study Promise
}

function testMessage() {
    //TODO need to do it after study cluster
}

function testExit() {
    process.on('beforeExit', function (code) {
        print("i am in before exiting...");
    })

    process.on('exit', function (code) {
        print('i am exiting... with exit code is ' + code);
    })

    process.on('exit', (code) => {
        print('test');
        setTimeout(() => {
            console.log('This will not run');
        }, 0);
    });
}

function print(str) {
    console.log(str);
}

main();