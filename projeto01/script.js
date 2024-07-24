function verificar() {
    let dataAtual = new Date();
    var ano = dataAtual.getFullYear();
    var form = document.getElementById('txtn');
    let resultado = document.getElementById('resultado')
    var img = document.getElementById('imagem')
    if (form.value.length == 0  || form.value > ano) {
        window.alert('Verifique se os dados foram colocados corretamente.');
    } else {
        var sexo = document.getElementsByName('sexo')
        var s = ano - Number(form.value)
        let genero = ' '
        if (sexo[0].checked) {
            genero = "Homem"
            if(s > 70) {
                img.src = 'assets/img/homem_idoso.png'
            } else if (s <70 && s >= 18) {
                img.src = 'assets/img/homem_adulto.png'
            } else if (s < 18 && s >= 12) {
                img.src = 'assets/img/homem_jovem.png'
            } else  if (s < 12) {
                img.src = 'assets/img/bebe_masculino.png'
            }
        } else {
            genero = "feminino"
            if (s > 70) {
                img.src = 'assets/img/mulher_idosa.png'
            } else if (s < 70 && s >= 18) {
                img.src = 'assets/img/Mulher_adulta.png'
            } else if (s < 18 && s >= 12) {
                img.src = 'assets/img/Mulher_jovem.png'
            } else if (s < 12) {
                img.src = 'assets/img/bebe_feminino.png'
            }
        resultado.innerHTML = ("O resultado da idade foi "+ s +", o genêro foi o "+ genero)
    }
    

}
}
