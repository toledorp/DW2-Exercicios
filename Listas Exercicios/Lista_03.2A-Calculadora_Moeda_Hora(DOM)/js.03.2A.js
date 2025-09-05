async function cotacao(op) {
    const n1 = parseFloat(document.getElementById("valor").value);
    if (isNaN(n1)) {
        document.getElementById('resultado').innerText = "Digite um valor válido!";
        return;
    }

    let moeda;
    switch(op) {
        case 'USD': moeda = "Dólar (USD)"; break;
        case 'GBP': moeda = "Libra (GBP)"; break;
        case 'EUR': moeda = "Euro (EUR)"; break;
        case 'JPY': moeda = "Iene (JPY)"; break;
        default:
            document.getElementById('resultado').innerText = "Moeda inválida!";
            return;
    }

    //auxilio do chatgpt para importar API de taxas cambiais
    try {
        const url = "https://economia.awesomeapi.com.br/json/last/USD-BRL,GBP-BRL,EUR-BRL,JPY-BRL";
        const resp = await fetch(url);
        if (!resp.ok) throw new Error("Erro ao acessar API");

        const data = await resp.json();
        const key = op + "BRL"; // exemplo: USDBRL
        const taxa = parseFloat(data[key].bid);

        const resultado = n1 / taxa;
        const dataAtual = new Date();

        // Exibe dentro do <p id="resultado"> sem apagar o restante da página
        document.getElementById('resultado').innerHTML = 
            `Resultado em ${moeda}: ${resultado.toFixed(2)}<br>` +
            `Taxa da cotação: ${taxa.toFixed(2)} <br>`+
            `Data/Hora da taxa de cotação: ${dataAtual.toString()}`;
    } catch (e) {
        document.getElementById('resultado').innerText = "Erro: " + e.message;
    }
}
