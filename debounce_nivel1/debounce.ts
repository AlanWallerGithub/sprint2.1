

function imprimirInput(inputUsuarioParametro: string){
    return inputUsuarioParametro;
}


const debounce: object = (callback: object, limit: number) => {

    
    let timeoutDebounce: ReturnType<typeof setTimeout>;

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

module.exports = { debounce };