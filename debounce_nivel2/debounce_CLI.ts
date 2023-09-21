
import readline from 'readline';
const rl = readline.createInterface({input : process.stdin,
                         output : process.stdout});

function imprimirInput(){
    
    return console.log("\nPara salir del loop, pulsa barra espaciadora");
}

const debounce: object = (callback: object, limit: number) => {

    let timeoutDebounce: NodeJS.Timer;

    return function(){
        if (timeoutDebounce){
            
            clearTimeout(timeoutDebounce);

        }
        
        if (typeof(callback) !== 'function'){
            return "ERROR: el callback debe ser una función";
        } else
            
                
            
             
                timeoutDebounce = setTimeout(()=>{
                
                callback();
                
            },limit)
        
    }
    
    
}

const imprimirConDebounce: object = debounce(imprimirInput,1000);

function funcionCLI(){
    console.log("Pulsa cualquier tecla del teclado, tantas veces como quieras. Solo se ejecutará la última vez que lo hayas pulsado, cuando pase un segundo desde esa vez");
var stdin = process.stdin;
stdin.setRawMode( true );
stdin.resume();
stdin.setEncoding( 'utf8' );

stdin.on( 'data', function( key ){
  // El loop se rompe con BARRA ESPACIADORA
  if ( key === '\u0020' ) {

    process.exit();
  }
  
  imprimirConDebounce();
});
}

funcionCLI();