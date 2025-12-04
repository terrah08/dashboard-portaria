// Dados iniciais
let pagamentos = {
    "Dinheiro": 120,
    "Crédito": 80,
    "Débito": 60,
    "Pix": 40
};

let gratuidades = {
    "Lista (Free)": 30,
    "Militar": 20,
    "50 Pessoas": 40,
    "Aniversário": 10
};

let totalPessoas = 0;
let totalValor = 0;

// Soma total de pessoas e valor pago
function atualizarTotais() {
    totalPessoas =
        pagamentos.Dinheiro +
        pagamentos.Crédito +
        pagamentos.Débito +
        pagamentos.Pix +
        gratuidades["Lista (Free)"] +
        gratuidades["Militar"] +
        gratuidades["50 Pessoas"] +
        gratuidades["Aniversário"];

    // Valores pagos (gratuidade = 0)
    totalValor =
        pagamentos.Dinheiro +
        pagamentos.Crédito +
        pagamentos.Débito +
        pagamentos.Pix;

    document.getElementById("totalPessoas").innerText = totalPessoas;
    document.getElementById("valorTotal").innerText = "R$ " + totalValor;
}

atualizarTotais();

// GRÁFICO DE PAGAMENTOS
const ctx1 = document.getElementById('graficoPagamentos');

new Chart(ctx1, {
    type: 'pie',
    data: {
        labels: ["Dinheiro", "Crédito", "Débito", "Pix"],
        datasets: [{
            data: [
                pagamentos.Dinheiro,
                pagamentos.Crédito,
                pagamentos.Débito,
                pagamentos.Pix
            ],
            backgroundColor: ["#2ecc71", "#f1c40f", "#3498db", "#7f8c8d"]
        }]
    },
    options: {
        plugins: {
            legend: { position: "bottom" },
            tooltip: { enabled: true }
        }
    }
});

// GRÁFICO DE GRATUIDADES
const ctx2 = document.getElementById('graficoGratuidades');

new Chart(ctx2, {
    type: 'pie',
    data: {
        labels: ["Lista (Free)", "Militar", "50 Pessoas", "Aniversário"],
        datasets: [{
            data: [
                gratuidades["Lista (Free)"],
                gratuidades["Militar"],
                gratuidades["50 Pessoas"],
                gratuidades["Aniversário"]
            ],
            backgroundColor: ["#3498db", "#9b59b6", "#e67e22", "#1abc9c"]
        }]
    },
    options: {
        plugins: {
            legend: { position: "bottom" },
            tooltip: { enabled: true }
        }
    }
});

