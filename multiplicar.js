const fs = require('fs');
const colors = require('colors');

const createReport = (base, show = false, hasta=10)=>{

    return new Promise((resolve, reject)=>{

        try{

            const maximo = hasta;
            let contenido  = '';
    
            contenido += `Tabla del ${base} :\n`;
    
            for(let i=1; i<= maximo; i++)
            contenido += `${base} X ${i} = ${base * i} \n`;

            if(show)
              console.log(colors.yellow(contenido));

            resolve(contenido);

        }catch(err){
            reject(err);
        }
    });

};

const createFile = (contenido)=>{

    return new Promise((resolve, reject)=>{

        fs.writeFile(`report.txt`, contenido, (err)=>{
            if(err)
              reject (err);

            resolve('ok');
        });
    });
};

const createReportAsync = async (base)=>{
    try{

        const maximo = 10;
        let contenido  = '';

        contenido += `Tabla del ${base} :\n`;

        for(let i=1; i<= maximo; i++)
        contenido += `${base} X ${i} = ${base * i} \n`;

        return contenido;

    }catch(err){
        throw err;
    }
};

const createFileAsync = (contenido, callback)=>{

    fs.writeFile(`report.txt`, contenido, (err)=>{
        if(err)
           callback(err);

        callback(null, 'ok');
    });

};

module.exports = {
    createFile,
    createReport
};