async function carregarAlunos() {
    const container = document.getElementById('lista-alunos');
    
    if (!container) return;

    try {
        const response = await fetch('alunos.json');
        if (!response.ok) throw new Error('Erro ao carregar lista de alunos');

        const alunos = await response.json();
        container.innerHTML = '';

        // Ordena por nome para manter a organização acadêmica
        alunos.sort((a, b) => a.nome.localeCompare(b.nome)).forEach(aluno => {
            container.innerHTML += `
                <div class="card-noticia card-aluno">
                    <h3>${aluno.nome}</h3>
                </div>
            `;
        });

    } catch (error) {
        console.error("Falha no carregamento dos alunos:", error);
        container.innerHTML = `<p>Não foi possível carregar a lista de alunos no momento.</p>`;
    }
}

document.addEventListener('DOMContentLoaded', carregarAlunos);