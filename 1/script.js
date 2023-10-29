function calcularMedia() {
    let nota1 = parseFloat(document.getElementById('nota1').value);
    let nota2 = parseFloat(document.getElementById('nota2').value);
    let nota3 = parseFloat(document.getElementById('nota3').value);
    let media = (nota1 + nota2 + nota3) / 3;

    let situacao;
    if (media >= 6.0) {
        situacao = "APROVADO";
    } else if (media >= 4.0 && media <= 5.9) {
        situacao = "RECUPERAÇÃO";
    } else {
        situacao = "REPROVADO";
    }

    document.getElementById('resultado').innerText = "Média: " + media.toFixed(2) + ". Situação: " + situacao;
}
