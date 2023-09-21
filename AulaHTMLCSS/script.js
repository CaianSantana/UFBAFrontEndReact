
function download(nomeArquivo, texto){
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(texto));
    element.setAttribute('download', nomeArquivo);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}
function salvaRespostas(){
    let tudoOk = true;
    let nome = document.getElementById("nome").value;
    if(!nome){
        alert("Campo nome é obrigatório!");
        tudoOk = false;
    }
    let mensagem = document.getElementById("mensagem").value;
    if(!mensagem){
        alert("Campo mensagem é obrigatório!");
        tudoOk = false;
    }
    if(tudoOk){
        let texto = nome+";"+mensagem+";";
        download(nome+".csv",texto);
        document.forms[0].submit;
    }
}





