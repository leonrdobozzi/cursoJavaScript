let btn = document.querySelector('button');

btn.onclick = function () {
    //Declara a variavel de texto quer sera adicionado ao paragrafo
    let textElement = '';
    //recupera o valor do input
    let inputValue = document.querySelector('input').value;
    //cria um elemento paragrafo<p>
    let pElement = document.createElement('p');
    //adiciona o atributo class ao paragrafo
    pElement.setAttribute('class', 'classe-p');
    //verifica se o usuario preencheu o input, caso contrario coloca um texto padrao
    if (inputValue !== '') {
        textElement = document.createTextNode(inputValue);
    }else{
        textElement = document.createTextNode('Veio vazio...');
    }
    //adiciona o texto do input como filho do paragrafo
    pElement.appendChild(textElement);
    //recupera a div
    let divElement = document.querySelector('#app');
    //adiciona o paragrafo como filho da div 
    divElement.appendChild(pElement);
    //limpa o input
    document.querySelector('input').value = '';
}                                                                                                                                                                                                                                                                                                                                let btn = document.querySelector('button');

btn.onclick = function () {
    //Declara a variavel de texto quer sera adicionado ao paragrafo
    let textElement = '';
    //recupera o valor do input
    let inputValue = document.querySelector('input').value;
    //cria um elemento paragrafo<p>
    let pElement = document.createElement('p');
    //adiciona o atributo class ao paragrafo
    pElement.setAttribute('class', 'classe-p');
    //verifica se o usuario preencheu o input, caso contrario coloca um texto padrao
    if (inputValue !== '') {
        textElement = document.createTextNode(inputValue);
    }else{
        textElement = document.createTextNode('Veio vazio...');
    }
    //adiciona o texto do input como filho do paragrafo
    pElement.appendChild(textElement);
    //recupera a div
    let divElement = document.querySelector('#app');
    //adiciona o paragrafo como filho da div 
    divElement.appendChild(pElement);
    //limpa o input
    document.querySelector('input').value = '';
}