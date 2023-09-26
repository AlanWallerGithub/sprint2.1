

function imprimirInput(){

    let elementoHTML = document.getElementById('mostrar');
            if(elementoHTML){
                return (elementoHTML as HTMLElement).innerHTML += "COMPRA REALIZADA"+"<br>"; } 
}

const debounce = (callback: object, limit: number) => {

    let timeoutDebounce: ReturnType<typeof setTimeout>;

    return function(){
        if (timeoutDebounce){
            
            clearTimeout(timeoutDebounce);

        }
        
        if (typeof(callback) !== 'function'){

            let elementoHTML = document.getElementById('mostrar');
            if(elementoHTML){
                return (elementoHTML as HTMLElement).innerHTML ="ERROR: el callback debe ser una función";}
        } else
            
                
            
             
                timeoutDebounce = setTimeout(()=>{
                
                callback();
                
            },limit)
        
    }
    
    
}

const imprimirConDebounce = debounce(imprimirInput,1000);

function comprar(){
    imprimirConDebounce();
}