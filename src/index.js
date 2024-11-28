// funçao inicial
export function contaPalavras(texto) {
    const paragrafos = extraiParagrafos(texto);
    const contagem = paragrafos.flatMap((paragrafo) => {
        if (!paragrafo) {
            return [];
        }
        else {
            return verificaPalavrasDuplicadas(paragrafo);
        }
    })
    return contagem;
}

function extraiParagrafos(texto) {
    return texto.toLowerCase().split('\n'); // divide o texto em paragrafos na quebra de linha \n
}


function limpaPalavras(palavra) {
    return palavra.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '');
}

function verificaPalavrasDuplicadas(texto) {
    const listaPalavras = texto.split(' ');// divide o texto onde tem espaços pra fazer a contagem das palavras
    const resultado = {};
    listaPalavras.forEach(element => {
        if (element.length >= 3) {
            const palavraLimpa = limpaPalavras(element);
            resultado[palavraLimpa] = (resultado[palavraLimpa] || 0) + 1; // se o elemento tem um valor, recebe o valor + 1, se nao, recebe 0 + 1
        }
    });
    return resultado;
}