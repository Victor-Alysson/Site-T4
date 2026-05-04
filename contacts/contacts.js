async function carregarContatos() {
    try {
        const response = await fetch('contatos.json');
        const contatos = await response.json();
        const container = document.getElementById('lista-contatos');
        
        container.innerHTML = '';

        contatos.forEach(item => {
            
            const emailHTML = item.email 
                ? `<p class="info-contato"><strong>Email:</strong> <a href="mailto:${item.email}">${item.email}</a></p>` 
                : '';
                
            const telHTML = item.telefone 
                ? `<p class="info-contato"><strong>Telefone:</strong> ${item.telefone}</p>` 
                : '';

            const card = `
                <div class="card-noticia">
                    <h3>${item.nome}</h3>
                    <div class="dados-professor">
                        ${emailHTML}
                        ${telHTML}
                    </div>
                </div>
            `;
            container.innerHTML += card;
        });
    } catch (error) {
        console.error("Erro ao carregar os contatos:", error);
    }
}

document.addEventListener('DOMContentLoaded', carregarContatos);