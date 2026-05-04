async function carregarNoticias() {
    try {
        const response = await fetch('noticias.json');
        const noticias = await response.json();
        const container = document.getElementById('container-noticias');
        
        container.innerHTML = '';

        noticias.reverse().forEach(item => {
           
            const linkHTML = item.link 
                ? `<a href="${item.link}" target="_blank" class="link-externo">Acesse o conteúdo</a>` 
                : '';

            const card = `
                <div class="card-noticia">
                    <span class="data-noticia">${item.data}</span>
                    <h3>${item.titulo}</h3>
                    <p>${item.resumo}</p>
                    ${linkHTML}
                </div>
            `;
            container.innerHTML += card;
        });
    } catch (error) {
        console.error("Erro ao carregar as notícias:", error);
    }
}

document.addEventListener('DOMContentLoaded', carregarNoticias);