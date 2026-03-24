function ex3() {

    let ganhoanual = 0;
    let gastoanual = 0;
    let saldoanual = 0;

    for (let i = 1; i <= 12; i++) {

        let ganho = Number(prompt("Ganho do mês" + i));
        let gasto = Number(prompt("Gsto do mês" + i));
        ganhoanual += ganho;
        gastoAnual += gasto;

    }

    saldoanual = ganhoanual - gastoanual;

    console.log("Ganho anual:" + ganhoAnual);
    console.log("Gasto anual:" + gastoAnual);
    console.log("Saldo anual:" + saldoAnual);
    if (saldoAnual < 0) {
        console.log("Prejuízo");
    } else {
        console.log("Lucro!");

    }
}