

var fs = require('fs');
var file1 = 'BigIpsum/SpicyBacon/SpicyBaconIpsum.txt';
var file2='BigIpsum/SpicyBacon/SpicyBaconIpsum2.txt';
var file3='BigIpsum/BaconIpsum.txt';
var file4='BigIpsum/BaconIpsum2.txt';
var array1=[["ribs",0],["chicken",0],["jerky",0],["tenderloin",0],["jalapeno",0],["lorem",0]]
var array2=[["ribs",0],["chicken",0],["jerky",0],["tenderloin",0],["jalapeno",0],["lorem",0]]
var array3=[["ribs",0],["chicken",0],["jerky",0],["tenderloin",0],["jalapeno",0],["lorem",0]]
var array4=[["ribs",0],["chicken",0],["jerky",0],["tenderloin",0],["jalapeno",0],["lorem",0]]
var fs = require('fs');
var path = require('path');

/* code to display total number of files in BigIpsum Directory */
function getFilesFromDir(dir, fileTypes) {
    var filesToReturn = [];
    function walkDir(currentPath) {
        var files = fs.readdirSync(currentPath);
        for (var i in files) {
            var curFile = path.join(currentPath, files[i]);
            if (fs.statSync(curFile).isFile() && fileTypes.indexOf(path.extname(curFile)) != -1) {
                filesToReturn.push(curFile.replace(dir, ''));
            } else if (fs.statSync(curFile).isDirectory()) {
                walkDir(curFile);
            }
        }
    };
    walkDir(dir);
    return filesToReturn;

}

console.log("The number of files in the BigIpsum directory : "+ (getFilesFromDir("./BigIpsum", [".txt"])).length);

/* code to display Number of occurrences of given words in each of the files: */


fs.readFile(file1, 'utf8', function (err, data) {

    if (err) throw err;
    console.log('\n'+file1+ ":")
    var wordsArray = splitByWords(data);
    for (var i=0;i<wordsArray.length;i++) {
        for (var j = 0; j < array1.length; j++){
            if (wordsArray[i] == array1[j][0]) {
                array1[j][1]= parseInt(array1[j][1])+1;
            }
        }
    }
    for(var i=0;i<array1.length; i++){
        console.log(array1[i][0]+":"+array1[i][1]);
    }
});
function splitByWords (text) {
    var wordsArray = text.split(/\s+/);
    return wordsArray;
}
fs.readFile(file2, 'utf8', function (err, data) {

    if (err) throw err;
    console.log('\n'+file2+ ":")
    var wordsArray1 = splitByWords(data);
    for (var i=0;i<wordsArray1.length;i++) {
        for (var j = 0; j < array2.length; j++){
            if (wordsArray1[i] == array2[j][0]) {
                array2[j][1]= parseInt(array2[j][1])+1;
            }
        }
    }
    for(var i=0;i<array2.length; i++){
        console.log(array2[i][0]+":"+array2[i][1]);
    }
});
function splitByWords (text) {
    var wordsArray1 = text.split(/\s+/);
    return wordsArray1;
}
fs.readFile(file3, 'utf8', function (err, data) {
    if (err) throw err;
    console.log('\n'+file3+ ":")
    var wordsArray2 = splitByWords(data);
    for (var i=0;i<wordsArray2.length;i++) {
        for (var j = 0; j < array3.length; j++){
            if (wordsArray2[i] == array3[j][0]) {
                array3[j][1]= parseInt(array3[j][1])+1;
            }
        }
    }
    for(var i=0;i<array3.length; i++){
        console.log(array3[i][0]+":"+array3[i][1]);
    }
});

function splitByWords (text) {
    var wordsArray2= text.split(/\s+/);
    return wordsArray2;
}
fs.readFile(file4, 'utf8', function (err, data) {
    if (err) throw err;
    console.log('\n'+file4+ ":")
    var wordsArray3 = splitByWords(data);
    for (var i=0;i<wordsArray3.length;i++) {
        for (var j = 0; j < array4.length; j++){
            if (wordsArray3[i] == array4[j][0]) {
                array4[j][1]= parseInt(array4[j][1])+1;
            }
        }
    }
    for(var i=0;i<array4.length; i++){
        console.log(array4[i][0]+":"+array4[i][1]);
    }
});

function splitByWords (text) {
    var wordsArray3= text.split(/\s+/);
    return wordsArray3;
}


