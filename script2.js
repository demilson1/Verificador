function verificar() {
    var data = new Date();
    var ano = data.getFullYear()

    var txan = window.document.getElementById('txtn');
    var resultado = window.document.getElementById('res');

    if(txan.value.length == 0 || txan.value > ano){
        window.alert("[ERRO] Verifique os dados e tente novamente!");
    }else{
        var sexo = window.document.getElementsByName('radsexo');
        var idade = ano - Number(txan.value);

        var genero = '';

        var img = window.document.createElement('img');
        
        img.setAttribute('id', 'foto');
    
        if (sexo[0].checked){
            genero = 'Homem';
            if(idade >=0 && idade <=13){
                //crianca
                img.setAttribute('src', 'images/criancamenino.png');
            }else if (idade < 18){
                //adolecente
                img.setAttribute('src', 'images/adolecentemenino.png');
            }else if (idade < 65){
                //adulto
                img.setAttribute('src', 'images/adultohomem.png');
            }else{
                //idoso
                img.setAttribute('src', 'images/idosohomem.png');
            }

        }else{
            genero = 'Mulher';
            if(idade >=0 && idade <=13){
                //crianca
                img.setAttribute('src', 'images/criancamenina.png');
            }else if(idade < 18){
                //adolecente
                img.setAttribute('src', 'images/adolecentemenina.png');
            }else if(idade < 65){
                //adulto
                img.setAttribute('src', 'images/adultomulher.png');
            }else{
                //idoso
                img.setAttribute('src', 'images/idosomulher.png');
            }
        }
        resultado.innerHTML = `Detectamos que você é ${genero} e tem ${idade} anos de idade`;
        resultado.appendChild(img);
        }
        

       
}

