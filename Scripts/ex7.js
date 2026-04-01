function ex7() {
    const picoles = {
        a: { sabor: 'Chocolate',   preco: 'R$ 1,50' },
        b: { sabor: 'Morango',     preco: 'R$ 2,50' },
        c: { sabor: 'Creme',       preco: 'R$ 2,50' },
        d: { sabor: 'Manga',       preco: 'R$ 3,20' },
        e: { sabor: 'Melancia',    preco: 'R$ 3,40' },
        f: { sabor: 'Vanilla Ice', preco: 'R$ 3,00' },
        g: { sabor: 'Céu Azul',    preco: 'R$ 3,60' },
        h: { sabor: 'Brownie',     preco: 'R$ 4,00' },
        i: { sabor: 'Hawaiano',    preco: 'R$ 5,00' },
    };

    let codigo = prompt("Digite o código do sabor (a até i): ").toLowerCase();

    if (picoles[codigo]) {
        console.log(`Sabor: ${picoles[codigo].sabor}`);
        console.log(`Preço: ${picoles[codigo].preco}`);
    } else {
        console.log("Código inválido! Escolha um código de a até i.");
    }
}