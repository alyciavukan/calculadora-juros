function calcular(){  
    let nome, pmt, n, i;
    var resultado;
    
    // entrada de dados
    nome = String(document.getElementById("nome").value);
    pmt = Number(document.getElementById("pmt").value);
    n = Number(document.getElementById("n").value);
    i = 0.03;

    //processamento de dados
    var resultado = (pmt * (1+i) * ((Math.pow(1+i,n)-1)/i)).toFixed(2);
    // (pmt*(1+i)*((Math.pow(1+i, n)-1)/i)).toFixed(2);
    
    //saída de dados
    $("#formulario-juros").addClass("d-none");
    $("#mostrar-resultado").removeClass("d-none");
    document.getElementById("valor-resultado").innerHTML = ` ${resultado} reais`;
    $("#nome-usuario").html(nome);
    $("#mensalidade").html(`${pmt} de aporte mensal`);
    $("#tempo-contribuicao").html(`${n} meses`);
}