function ex10() {
    const TAXA_INSS = 0.08;

    let nome = prompt('Digite o nome do funcionário:');
    let salarioBruto = Number(prompt('Digite o salário bruto:'));

    let desconto = salarioBruto * TAXA_INSS;
    let salarioLiquido = salarioBruto - desconto;

    console.log('Folha de pagamento:');
    console.log(`Funcionário:    ${nome}`);
    console.log(`Salário bruto:  R$ ${salarioBruto.toFixed(2)}`);
    console.log(`Desconto INSS:  R$ ${desconto.toFixed(2)}`);
    console.log(`Salário líquido: R$ ${salarioLiquido.toFixed(2)}`);
}