const fs = require('fs');


const crearArchivo = async ( numero = 5, listar=false, h=5)=>{
    try{
        
        let salida = '';
               
        for (let i = 1; i <=h; i++) {
            salida +=  `${numero} x ${i} = ${numero * i}\n`;  
        }
        
        if(listar){

            console.log(`Tabla del ${numero}`);
            console.log(salida);
        }
    
        fs.writeFileSync(`./salida/tabla-${numero}.txt`, salida);
           
        return`tabla-${numero}.txt creado`;
    }catch(err){
        throw err
    }

    
}

module.exports = {
    crearArchivo
}