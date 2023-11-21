const resultado = document.querySelector('#resultado')
const altura = document.querySelector('#altura')
const peso = document.querySelector('#peso')
const idade = document.querySelector('#idade')

const calcula_imc = () => {
    if (altura.value != '' && peso.value != '') {
        const imc = (peso.value / (altura.value * altura.value)).toFixed(2)
        let classificacao = ''

        const idade_em_Numero = parseInt(idade.value)
        // Se a pessoa for idosa
        if (idade_em_Numero > 60) {
            if (imc <= 22) {
                classificacao = 'Baixo peso'
            }
            else if (imc < 27){
                classificacao = 'Adequado ou eutrófico'
            }
            else if (imc >= 27) {
                classificacao = 'Sobrepeso'
            }
        }
        // Se a pessoa NÃO for idosa
        else {
            if (imc < 18.5) {
                classificacao = 'Baixo peso'
            }
            else if (imc < 25.0) {
                classificacao = 'Peso normal'
            }
            else if (imc < 30.0) {
                classificacao = 'Excesso de peso'
            }
            else if (imc < 35.0) {
                classificacao = 'Obesidade de Classe I'
            }
            else if (imc < 40.0) {
                classificacao = 'Obesidade de Classe II'
            }
            else {
                classificacao = 'Obesidade de Classe III'
            }
        }
                
        resultado.innerHTML = `IMC: ${imc} (${classificacao})`
    }
    else {
        resultado.innerHTML = 'Preencha os campos para que se possa calcular.'
    }
}