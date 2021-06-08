
        

        // Escríbe aquí tu código
    function mostarResultado(valor){
        if(valor < 0){
            valor = 0;
        }
        document.querySelector(".resultado").innerHTML = valor;

    }
    document.getElementById("btn-sumar").addEventListener('click', function(){
        let valor1 = document.getElementById("valor1").value;
        let valor2 = document.getElementById("valor2").value;
        let valor3 = parseInt(valor1) + parseInt(valor2)
        mostarResultado(valor3)
    })
    document.getElementById("btn-restar").addEventListener('click', function(){
        let valor1 = document.getElementById("valor1").value;
        let valor2 = document.getElementById("valor2").value;
        let valor3 = parseInt(valor1) - parseInt(valor2)
        mostarResultado(valor3)
    })
