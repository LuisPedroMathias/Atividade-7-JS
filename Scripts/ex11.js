function ex11() {
    let nome         = prompt('Digite o nome do funcionário:');
    let salarioBruto = Number(prompt('Digite o salário bruto:'));

    let taxa;

    if (salarioBruto <= 1000) {
        taxa = 0.08;
    } else if (salarioBruto <= 1500) {
        taxa = 0.085;
    } else {
        taxa = 0.09;
    }

    let desconto       = salarioBruto * taxa;
    let salarioLiquido = salarioBruto - desconto;

    console.log('Folha de pagamento:');
    console.log(`Funcionário:     ${nome}`);
    console.log(`Salário bruto:   R$ ${salarioBruto.toFixed(2)}`);
    console.log(`Taxa INSS:       ${taxa * 100}%`);
    console.log(`Desconto INSS:   R$ ${desconto.toFixed(2)}`);
    console.log(`Salário líquido: R$ ${salarioLiquido.toFixed(2)}`);
}