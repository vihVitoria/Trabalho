function primeiraFuncao() {
    return new Promise((resolve) =>  {
        setTimeout(() => {
            console.log('Espera um segundo!')
            resolve()
            
        },2000)
    })
}

async function segundaFuncao() {
    console.log('iniciou')
    
    await primeiraFuncao()

    console.log('terminou')
}

segundaFuncao()