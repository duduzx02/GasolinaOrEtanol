function calcularMediaKm() {
    const valor = parseFloat(document.querySelector('#preco').value)
    const gasolina = parseFloat(document.querySelector('#gasolina').value);
    const etanol = parseFloat(document.querySelector('#etanol').value);
    const kmPorGasolina = parseFloat(document.querySelector('#kmPorGasolina').value);
    const kmPorEtanol = parseFloat(document.querySelector('#KmPorEtanol').value);

    const litrosDeGasolina = valor / gasolina;
    const litrosDeEtanol = valor / etanol;
    const mediaKmTotalGasolina = litrosDeGasolina * kmPorGasolina;
    const mediaKmTotalEtanol = litrosDeEtanol * kmPorEtanol;

    const msg = document.querySelector('.msg');
    const gasolinaLitros = litrosDeGasolina.toFixed(2);
    const etanolLitros = litrosDeEtanol.toFixed(2);
    
    const mensagemPrincipal = `<p>1º Com ${gasolinaLitros} litros de Gasolina você irá fazer em média ${mediaKmTotalGasolina.toFixed(2)} km e com ${etanolLitros} litros de Etanol será ${mediaKmTotalEtanol.toFixed(2)} km</p>`;
    
    if (mediaKmTotalGasolina > mediaKmTotalEtanol) {
        const diferencaGasolinaKm = (mediaKmTotalGasolina - mediaKmTotalEtanol).toFixed(2);
        const diferencaPorcentagem = (etanol / gasolina).toFixed(2);
        msg.innerHTML = `${mensagemPrincipal}<p>2º Com a Gasolina você fará ${diferencaGasolinaKm} km a mais.</p><p>3º ${diferencaPorcentagem}% diferença entre preço da Gasolina e Etanol</p>`;
    } else if (mediaKmTotalGasolina < mediaKmTotalEtanol) {
        const diferencaEtanolKm = (mediaKmTotalEtanol - mediaKmTotalGasolina).toFixed(2);
        const diferencaPorcentagem = (gasolina / etanol).toFixed(2);
        msg.innerHTML = `${mensagemPrincipal}<p>Com o Etanol você fará ${diferencaEtanolKm} km a mais.</p><p>3º ${diferencaPorcentagem}% diferença entre preço da Etanol e Gasolina</p>`;
    }
    

}
