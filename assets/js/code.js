function calcularMediaDeBags()
    {
        var quantdadePax = parseInt(document.getElementById('valor1').value);
        var media3Dias = parseInt(document.getElementById('valor2').value);
        
        var calcularMedia = quantdadePax * media3Dias;
        parseInt(document.getElementById('info').innerHTML = (calcularMedia.toFixed(1) +' kg'));
    }
    function calcularDiferencaDeFuel()
    {
        var fuelComandante = document.getElementById('fuel-coma').value;
        var fuelRecomendado = document.getElementById('fuel-rec').value;

        var diferencaFuel = fuelComandante - fuelRecomendado;
        document.getElementById('infoFuel').innerHTML = (diferencaFuel +' kg')
    }