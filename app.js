const {createReport, createFile, createReportAsync, createFileAsync} = require('./multiplicar');
const argv = require('./yars');
console.clear();

//Enlazado de respuestas de promesas
createReport(argv.base, argv.show, argv.hasta)
    .then((report)=> createFile(report))
    .then((result)=>{
        console.log('Con promesas: ', result);
    })
    .catch((err)=>{
        console.log(err);
    });
