function extractFile( path ) {
    let tokens = path.split('\\') ;
    let fileName = tokens.pop();

    let index = fileName.lastIndexOf('.') ;
    let name = fileName.substring(0,index) ;
    let ext  = fileName.substring(index+1) ;

    console.log(`File name: ${name}`);
    console.log(`File extension: ${ext}`);
}

extractFile ( 'C:\\Internal\\training-internal\\Template.pptx' ) ;

extractFile ( 'C:\\Projects\\Data-Structures\\LinkedList.cs' ) ;

extractFile ( 'C:\\Internal\\training-internal\\Template.bak.pptx' ) ;

