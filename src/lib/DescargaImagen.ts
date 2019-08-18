const download = require('image-downloader');
function cortar(texto:string) {
    
    let arrayTexto = texto.split('/');
  
  return arrayTexto[arrayTexto.length-1];
  
  
  }
async function descargaImagen(url:string,destino:string) {
    const options={
        url: url,
        dest: destino,
        timeout: 20000
    };
    try {
        const {filename,image}=await download.image(options);
        await console.log(filename);
        const nombreImagen = cortar(filename);
        
        return nombreImagen;
    }catch (e) {
        console.error(e);
    }
}
export default descargaImagen;


    /*(async()=>{
        const foto = await descargaImagen('https://www.infobae.com/new-resizer/kAjCyEfwdw0H57sLGDM5OOrTFUI=/750x0/filters:quality(100)/s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2017/04/06155038/perro-beso-1024x576.jpg',
            '/home/christian/Escritorio/data/public/');
            console.log(foto);
    })();*/

