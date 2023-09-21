
function imprimirInput(){
    
    document.getElementById("mostrar").innerHTML += "COMPRA REALIZADA"+"<br>";
}

const debounce: object = (callback: object, limit: number) => {

    let timeoutDebounce: NodeJS.Timer;

    return function(){
        if (timeoutDebounce){
            
            clearTimeout(timeoutDebounce);

        }
        
        if (typeof(callback) !== 'function'){
            
            return document.getElementById("mostrar").innerHTML = "ERROR: el callback debe ser una función";
        } else
            
                
            
             
                timeoutDebounce = setTimeout(()=>{
                
                callback();
                
            },limit)
        
    }
    
    
}

const imprimirConDebounce: object = debounce(imprimirInput,1000);

function comprar(){
    imprimirConDebounce();
}