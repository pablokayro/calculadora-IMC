const calcular = document.getElementById( "botao" );
const diagnostico = document.getElementById( "diagnostico" );

function exibirDiagnostico () {
    const nome = document.getElementById( "nome" ).value;
    const peso = document.getElementById( "peso" ).value;  
    const altura = document.getElementById( "altura" ).value;
    
    
    

    if(nome.value != "" && peso != "" && altura.value != ""){
        let imc = (peso / (altura*altura)).toFixed(1);

        let classificacao = "";
        if ( imc < 18.5 ) {
            classificacao = "Desnutrido. Procure ajuda médica!";
        }else if ( imc < 24.9 ) {
            classificacao = "com peso normal.";
        }else if ( imc < 29.9 ) {
            classificacao = "com sobrepeso.";
        }else if ( imc < 34.9 ) {
            classificacao = " com obesidade grau I.";
        }else if ( imc < 39.9 ) {
            classificacao = "com obesidade grau II";
        }else{
            classificacao = "com obdesidade grau III";
        }
        diagnostico.textContent = `Olá ${nome}, seu IMC é ${imc} e você esta ${classificacao}`;
    }else{
        alert("preencha todos os dados")
    }
}

calcular.addEventListener( "click", exibirDiagnostico );