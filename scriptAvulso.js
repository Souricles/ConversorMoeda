const botao = document.querySelector('#botao');
const selectEscolher = document.querySelector('#select-escolher')


function converterValor() {
    const valorDigitado = document.querySelector('#valor-digitado').value
    const paragrafoDigitado = document.querySelector('#paragrafo-digitado')
    const paragrafoConvertido = document.querySelector('#paragrafo-convertido');

    const dolarDoDia = 5.44
    const euroDoDia = 6.06
    const libraDoDia= 7.22


    if (selectEscolher.value == 'dolar') {
        paragrafoConvertido.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(valorDigitado / dolarDoDia)
    }

    if (selectEscolher.value == 'euro') {
        paragrafoConvertido.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'EUR'
        }).format(valorDigitado / euroDoDia)
    }

    if (selectEscolher.value == 'libra') {
        paragrafoConvertido.innerHTML = new Intl.NumberFormat('en-GB', {
            style: 'currency',
            currency: 'GBP'
        }).format(valorDigitado / libraDoDia)
    }

    paragrafoDigitado.innerHTML = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(valorDigitado)

}

function trocarSelect(){
    const paragrafoDolar=document.querySelector('.paragraph-dolar')
    const imageDolar=document.querySelector('#image-dolar')
    
    if(selectEscolher.value == 'dolar'){
        paragrafoDolar.innerText= 'Dolar americano'
        imageDolar.src= './assets/dolar.png'
    }

    if(selectEscolher.value == 'euro'){
        paragrafoDolar.innerText= 'Euro'
        imageDolar.src= './assets/euro.png'
    }

    if(selectEscolher.value == 'libra'){
        paragrafoDolar.innerText= 'Libra'
        imageDolar.src= './assets/libra.png'
    }

    converterValor()
}


selectEscolher.addEventListener('change', trocarSelect)
botao.addEventListener('click', converterValor)





