const {debounce} = require('../debounce_nivel1/debounce');

const imprimirInputParaTest = jest.fn(() => "hola");

const imprimirConDebounce = debounce(imprimirInputParaTest,1000);

test("Si el usuario llama a la función debounce, el callback debería ser llamado 1000ms después",(done) =>{

    imprimirConDebounce();
    
    setTimeout(()=>{
        expect(imprimirInputParaTest).toHaveReturnedTimes(1);
    },1000)

    setTimeout(()=>{
        done();
    }, 2000)

    
})

test("La función debounce debería dar error si el callback no es una función",(done) =>{


    let debounceSinFuncion = debounce(3,1000);

    expect(debounceSinFuncion()).toBe("ERROR: el callback debe ser una función");


    setTimeout(()=>{
        done();
    }, 1000)
    

    
})

test("Si se llama el debounce más de dos veces sin esperar 1000ms, solo se llamará la última vez, tras los 1000ms de esta última", (done) =>{

    setTimeout(()=>{
        imprimirConDebounce();
     },500)

     setTimeout(()=>{
        imprimirConDebounce();
     },550)

     setTimeout(()=>{
        imprimirConDebounce();
     },560)

     setTimeout(()=>{
        imprimirConDebounce();
     },1000)

     //Esta es la quinta vez que se llama imprimirConDebounce en el test. Sin embargo, como pasa menos de 1000ms entre todas las llamadas, solo se llamará la última y tendremos 2 returns hasta ahora en el test
 
     setTimeout(()=>{
         expect(imprimirInputParaTest).toHaveReturnedTimes(2);
     },3000)
     
     
 
     setTimeout(()=>{
         done();
     }, 3500)
    
    
})

