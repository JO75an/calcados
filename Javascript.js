// 1. Criar o Botão de WhatsApp Flutuante via JS
function criarBotaoWhats() {
    const linkWhats = "https://wa.me"; // Substitua pelo número real
    const botao = document.createElement('a');
    
    botao.href = linkWhats;
    botao.target = "_blank";
    botao.innerHTML = "📱 Atendimento";
    
    // Estilização direta via JS para garantir que apareça em todas as páginas
    Object.assign(botao.style, {
        position: "fixed",
        bottom: "20px",
        right: "20px",
        backgroundColor: "#22c55e",
        color: "white",
        padding: "15px 20px",
        borderRadius: "50px",
        textDecoration: "none",
        fontWeight: "bold",
        boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
        zIndex: "10000",
        display: "flex",
        alignItems: "center"
    });

    document.body.appendChild(botao);
}

// 2. Lógica de Filtro de Tamanhos (Para a página de catálogo)
function configurarFiltros() {
    const botoes = document.querySelectorAll('.filtros button');
    const cards = document.querySelectorAll('.card');

    botoes.forEach(botao => {
        botao.addEventListener('click', () => {
            const tamanhoSelecionado = botao.innerText;
            
            // Simulação de filtro: destaca o botão e dá feedback visual
            botoes.forEach(b => b.style.background = "white");
            botao.style.background = "#22c55e";
            botao.style.color = "white";

            console.log("Filtrando por tamanho: " + tamanhoSelecionado);
            
            // Aqui você poderia esconder/mostrar cards reais se tivessem tags de tamanho
            alert("Filtrando modelos tamanho " + tamanhoSelecionado + ". (Nesta demonstração, a lista permanece a mesma)");
        });
    });
}

// Inicializar funções ao carregar a página
window.onload = () => {
    criarBotaoWhats();
    if (document.querySelector('.filtros')) {
        configurarFiltros();
    }
};



