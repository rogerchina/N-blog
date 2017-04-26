/**
 * Created by roger on 17-4-18.
 */

// process object is global, no need to use require() to import



function main() {
    testExit();

}

function testExit() {
    process.on('beforeExit', function (code) {
        print("i am in before exiting...");
    })

    process.on('exit', function (code) {
        print('i am exiting... with exit code is ' + code);
    })
}

function print(str) {
    console.log(str);
}

main();