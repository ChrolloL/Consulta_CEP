const cep = document.getElementById('cep')

cep.addEventListener('focusout', () => {
    if (cep.value.length == 6) { console.log(cep.value) }
    let valor = `https://viacep.com.br/ws/${cep.value}/json/`
    console.log(valor)
    
})