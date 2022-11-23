
// Pegando o elemento canvas.
const c = document.getElementById("matrix");

// definido o contexto da tela.
const ctx = c.getContext("2d");

// definindo a tela para full-screen
c.height = window.innerHeight;
c.width = window.innerWidth;

// letras usadas para o efeito matrix (Kanji, Katakana, Números, Algarismo Romano, Operadores Aritméticos)
const letras = ["日", "ﾊ", "ﾐ", "ﾋ", "ｰ", "ｳ", "ｼ", "ﾅ", "ﾓ", "ﾆ", "ｻ", "ﾜ", "ﾂ", "ｵ", "ﾘ", "ｱ", "ﾎ", "ﾃ", "ﾏ", "ｹ", "ﾒ", "ｴ", "ｶ", "ｷ", "ﾑ", "ﾕ", "ﾗ", "ｾ", "ﾈ", "ｽ", "ﾀ", "ﾇ", "ﾍ", ":", "・", ".", "=", "*", "+", "-", "<", ">", "¦", "｜", "ﾘ"];

const fontSize = 18;

// definindo quantas colunas serão impressas com base na largura da tela e no tamanho da fonte
const colunas = c.width / fontSize;

// criando a queda das letras para cada coluna
let queda = [];

// iniciando a queda em um loop em vertical 
for (let x = 0; x < colunas; x++) queda[x] = 1;

// desenhando caracteres
function desenhando() {
    // definindo o fundo
    // a dica é usar rgba para o fundo como último parâmetro a opacidade
    ctx.fillStyle = "rgba(17, 15, 23, 0.05)";
    ctx.fillRect(0, 0, c.width, c.height);

    // definir a cor e o estilo da fonte
    ctx.fillStyle = "#0F0";
    ctx.font = `${fontSize}px arial`;

    // desenhando os caracteres
    for (let i = 0; i < queda.length; i++) {
        // obtendo uma letra aleatória para a matrix
        const texto = letras[Math.floor(Math.random() * letras.length)];

        // desenhando caracteres
        ctx.fillText(texto, i * fontSize, queda[i] * fontSize);

        // após atingir o final da tela retornar ao início
        if (queda[i] * fontSize > c.height && Math.random() > 0.975)
            queda[i] = 0;

        // definindo a queda na coordenada vertical
        queda[i]++;
    }

    // chamada recursiva para desenhar quadro a quadro
    window.requestAnimationFrame(desenhando);
}

// chamando a função para ser iniciada
desenhando();