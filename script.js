function mudarCor(cor){
    let body = document.body;

    switch(cor){
        case'preto' : body.style.backgroundColor = 'black'; break;
        case'cinza' : body.style.backgroundColor = 'gray'; break;
        case'branco' : body.style.backgroundColor = 'white'; break;
        case'vermelho' : body.style.backgroundColor = 'red'; break;
        case'verde' : body.style.backgroundColor = 'green'; break;
        case'roxo' : body.style.backgroundColor = 'purple'; break;
        case'azul' : body.style.backgroundColor = 'navy'; break;
        case'laranja' : body.style.backgroundColor = 'orange'; break;
        case'amarelo' : body.style.backgroundColor = 'yellow'; break;
        case'marrom' : body.style.backgroundColor = 'brown'; break;

        default: body.style.backgroundColor = 'black'

    }
}