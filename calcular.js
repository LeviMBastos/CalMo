src="https://cdn.jsdelivr.net/npm/sweetalert2@11";

let n1, n2, n3;
let media;

function getData () {
    
    str1 = document.getElementById("n1").value.toString();
    str2 = document.getElementById("n2").value.toString();
    str3 = document.getElementById("n3").value.toString();

    str1 = str1.replace(",", ".")
    str2 = str2.replace(",", ".")
    str3 = str3.replace(",", ".")

    n1 = parseFloat(str1);
    n2 = parseFloat(str2);
    n3 = parseFloat(str3);

}

function formsValido(){

    switch(true)
    {
        case n1 > 10 || n1 < 0:
            Swal.fire(
                'Eae mor',
                'Não dá pra calcular com a nota da P1 errada. 😑',
                'error'
              );
            return false;
        case n2 > 10 || n2 < 0:
            Swal.fire(
                'Eae mor',
                'Não dá pra calcular com a nota da P2 errada. 😑',
                'error'
              );
            return false;
        case n3 > 10 || n3 < 0:
            Swal.fire(
                'Eae mor',
                'Não dá pra calcular com a nota da P3 errada. 😑',
                'error'
              );a
            return false;
        default:
            return true;
    }
}

function validaNota(n1, n2, n3){

    if(isNaN(n1) || isNaN(n2) || (isNaN(n3) & isNaN(n2)) || n1 === null || n2 === null)
    {
        Swal.fire(
            'Eae mor',
            'Tem que digitar os números nos campos. 😉',
            'error'
          );
        return false;
    }

    return true;
}

function CalcularMedia () {
    
    getData();
    
    if(formsValido())
    {
        
        if(!validaNota(n1, n2, n3))
            return;

        if(n3 === null || isNaN(n3)){

            media = (n1 + n2) / 2;
            media = media.toFixed(1);

            document.getElementById("txtMedia").value = media.toString();

            if(media >= 7){
                Swal.fire(
                    'PARABÉNS MOR HEHE 🥳',
                    'Sabia que você era um gênio escondido. 😨',
                    'success'
                  );
            }
        }
        else{

            media = (n1 + n2 + n3) / 3;
            media = media.toFixed(1);

            document.getElementById("txtMedia").value = media.toString();

            if(media >= 7){
                Swal.fire(
                    'PARABÉNS MOR HEHE 🥳',
                    'Sabia que você era um gênio escondido. 😨',
                    'success'
                  );
            }
        }
    }
}

function CalcularDiferenca () {

    getData();

    if(formsValido()){

        if(isNaN(n3) & isNaN(n1) & !isNaN(n2)){
            nf1 = 14 - n2;
            nf1 = nf1.toFixed(1);

            document.getElementById("txtMedia").value = "P1 = " + nf1.toString();
        }
        else if(isNaN(n3) & isNaN(n2) & !isNaN(n1)){
            nf2 = 14 - n1;
            nf2 = nf2.toFixed(1);

            document.getElementById("txtMedia").value = "P2 = " + nf2.toString();
        }
        else if(isNaN(n3) & !isNaN(n1) & !isNaN(n2)){
            nf3 = 21 - n1 - n2
            nf3 = nf3.toFixed(1);

            document.getElementById("txtMedia").value = "P3 = " + nf3.toString();
        }
        else if(!isNaN(n1) & !isNaN(n3) & isNaN(n2)){
            nf2 = 21 - n1 - n3;
            nf2 = nf2.toFixed(1);

            document.getElementById("txtMedia").value = "P2 = " + nf2.toString();
        }
        else{
            Swal.fire(
              'Po mor',
              'Digita a P1 e deixe apenas uma nota em branco. (Não precisa preencher P3 caso não tenha)',
              'error'
            );
        }
    }
        
}
