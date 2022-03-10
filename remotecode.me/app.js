const listinha = document.getElementById('listinha')

const nomes = ['Luan','John', 'Joe', 'Jane', 'Mary']

nomes.forEach(nome => {
    let li = document.createElement('li');
    li.innerText = nome;
    li.classList = ['listinha__item']
    listinha.appendChild(li)
})

