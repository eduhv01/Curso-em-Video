function carregar() {
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('imagem');
    var dataAtual = new Date();
    var hora = dataAtual.getHours();
    var minutos = dataAtual.getMinutes();
    var minutos = dataAtual.getMinutes().toString().padStart(2, '0');
    
    msg.innerHTML = "Agora são "+ hora +":"+minutos +" horas";

    if(hora >= 6 && hora < 12) {
        img.src = 'assets/bom_dia.png';
        document.body.style.backgroundColor = '#D68844';
        msg.innerText = msg.innerText + ", bom dia."
    } else if (hora >= 12 && hora <= 18) {
        img.src = 'assets/boa_tarde.png';
        document.body.style.backgroundColor = '#A06B4F';
        msg.innerText = msg.innerText + ", boa tarde."
    } else {
        img.src = 'assets/boa_noite.png';
        document.body.style.backgroundColor = '#293E5D';
        msg.innerText = msg.innerText + ", boa noite."
    }
}

