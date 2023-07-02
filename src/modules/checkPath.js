const fs = require('fs');
const path = require('path');

function checkPath(){
    const rutaCarpetaDocuments = path.join(require('os').homedir(), 'Documents');
    const rutaCarpetaDownloader = path.join(rutaCarpetaDocuments, 'MyYT_Downloader');
    if (!fs.existsSync(rutaCarpetaDownloader)) {
    fs.mkdirSync(rutaCarpetaDownloader);
    console.log('Carpeta creada correctamente');
    } else {
    console.log('La carpeta ya existe');
    }
    return rutaCarpetaDownloader
}

function moveFile(sourceFolder, file, videoName){
    const fs = require('fs');
    const path = require('path');

    const rutaArchivoOrigen = path.join(sourceFolder, file);
    const rutaCarpetaDestino = checkPath();

    const rutaArchivoDestino = path.join(rutaCarpetaDestino, videoName + '.mp4');

    fs.rename(rutaArchivoOrigen, rutaArchivoDestino, (error) => {
    if (error) {
        console.error('Error al mover el archivo:', error);
    } else {
        console.log('Archivo movido correctamente');
    }
    });

}

module.exports = {
    checkPath,
    moveFile
}

//console.log(path.join('C:\\User\\andre\\Documents', 'video'))