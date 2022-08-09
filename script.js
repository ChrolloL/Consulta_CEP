// Lucas Batista e Felipe Sella
const cep = document.getElementById('cep')
const end = document.getElementById('endereco')
const bairro = document.getElementById('bairro')
const cidade = document.getElementById('cidade')
const estado = document.getElementById('estado')

cep.addEventListener('focusout', () => {
    if (cep.value.length == 8) { 
        let valor = `https://viacep.com.br/ws/${cep.value}/json/`
        $.getJSON(valor, function(result){
            end.value = result.logradouro
            bairro.value = result.bairro
            cidade.value = result.localidade
            estado.value = result.uf
        });
    } else { alert('CEP Inválido. Digite apenas números!')}
})