function calculate() {

    let principal = document.getElementById("principal").value;
    let rate = document.getElementById("rate").value;
    let years = document.getElementById("years").value;

    if(principal <= 0){
        alert("Digite um valor válido para o investimento");
        return;
    }

    let interest = principal * years * rate / 100;

    let year = new Date().getFullYear() + parseInt(years);

    document.getElementById("result").innerHTML =
        "Se você depositar <b>" + principal +
        "</b>, com uma taxa de juros de <b>" + rate +
        "%</b>.<br>Você receberá um valor de <b>" + interest +
        "</b> no ano <b>" + year + "</b>";
}