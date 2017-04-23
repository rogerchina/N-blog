/**
 * Created by roger on 17-4-18.
 */

// process object is global, no need to use require() to import



function main() {
    testExit();

}

function testExit() {
    process.on('exit', function (code) {
        print('i am exiting...');
    })
}

function print(str) {
    console.log(str);
}

main();