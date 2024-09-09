function calcularMediaDeBags()
    {
        var quantdadePax = document.getElementById('valor1').value
        var media3Dias = document.getElementById('valor2').value
        var calcularMedia = quantdadePax * media3Dias
        var result = Math.round(calcularMedia)
        if(result > 0){
            document.getElementById('info').innerHTML = (result +' kg')
        }else {
            document.getElementById('info').innerHTML = ""
        }
        
    }
    document.addEventListener('keydown', function(event) {
        if(event.key === 'Enter'){
            calcularMediaDeBags()
        } 
    })
    function calcularDiferencaDeFuel()
    {
        var fuelComandante = document.getElementById('fuel-coma').value
        var fuelRecomendado = document.getElementById('fuel-rec').value
        var diferencaFuel = fuelComandante - fuelRecomendado
        if(diferencaFuel > 0){
            document.getElementById('infoFuel').innerHTML = (diferencaFuel +' kg')
        }else {
            document.getElementById('infoFuel').innerHTML = ""
        }
    }
    document.addEventListener('keydown', function(event) {
        if(event.key === 'Enter'){
            calcularDiferencaDeFuel()
        }
    })
    function calcularMedias(){
        var primeiraMedia = parseFloat(document.getElementById('media1').value)
        var segundaMedia = parseFloat(document.getElementById('media2').value)
        var terceiraMedia = parseFloat(document.getElementById('media3').value)
        var calculandoMedias = (primeiraMedia + segundaMedia + terceiraMedia) / 3;
        var resultadoMedia = calculandoMedias.toFixed(1)

        if(calculandoMedias > 0){
            document.getElementById('infoCalculoMedia').innerHTML = resultadoMedia
        }else{
            document.getElementById('infoCalculoMedia').innerHTML = ""
        }
    }
    document.addEventListener('keydown', function(event){
        if(event.key === 'Enter'){
            calcularMedias()
        }
    })
    
