document.addEventListener('DOMContentLoaded', function() {
    // Carregar dados dos imóveis
    carregarImoveis();
    
    // Configurar eventos
    configurarEventos();
    
    // Configurar modal
    configurarModal();
});

// Variáveis globais
let todosImoveis = [];
let imoveisExibidos = [];

// Função para carregar os imóveis
async function carregarImoveis() {
    try {
        // Códigos dos imóveis disponíveis
        const codigos = ['49278', '49279', '49280', '49281', '49282', '49283', '49284', '49285'];
        
        // Carregar todos os imóveis
        for (const codigo of codigos) {
            const response = await fetch(`../dados/imovel_${codigo}.json`);
            const imovel = await response.json();
            todosImoveis.push(imovel);
        }
        
        // Exibir todos os imóveis inicialmente
        filtrarImoveis();
        
    } catch (error) {
        console.error('Erro ao carregar imóveis:', error);
        // Carregar dados de exemplo caso não consiga acessar os arquivos JSON
        carregarDadosExemplo();
    }
}

// Função para carregar dados de exemplo caso os JSONs não estejam acessíveis
function carregarDadosExemplo() {
    todosImoveis = [
        {
            "codigo": "49285",
            "titulo": "Sobrado 3 Dorm, Suíte, Terraço no Regent",
            "tipo": "Sobrado",
            "negocio": "Vende-se",
            "valor": "R$ 850.000,00",
            "cidade": "Indaiatuba",
            "bairro": "Regent",
            "dormitorios": 3,
            "suites": 1,
            "banheiros": 2,
            "garagem": "2 Vagas",
            "area_terreno": "150 m²",
            "area_construida": "180 m²",
            "destaques": ["Terraço", "Churrasqueira", "Jardim"],
            "descricao": "Lindo sobrado em condomínio fechado com 3 dormitórios, sendo 1 suíte, terraço e excelente acabamento."
        },
        {
            "codigo": "49284",
            "titulo": "Sobrado Luxo 4 Dorm, 2 Suítes e Cinema",
            "tipo": "Sobrado",
            "negocio": "Vende-se",
            "valor": "R$ 1.950.000,00",
            "cidade": "Indaiatuba",
            "bairro": "Jardim Esplanada",
            "dormitorios": 4,
            "suites": 2,
            "banheiros": 3,
            "garagem": "4 Vagas",
            "area_terreno": "360 m²",
            "area_construida": "320 m²",
            "destaques": ["Cinema", "Piscina", "Área Gourmet"],
            "descricao": "Sobrado de luxo com 4 dormitórios, 2 suítes, sala de cinema, piscina e área gourmet completa."
        },
        {
            "codigo": "49283",
            "titulo": "Casa Nova 3 Dorm, Gourmet e Garagem p/ 3",
            "tipo": "Casa",
            "negocio": "Vende-se",
            "valor": "R$ 780.000,00",
            "cidade": "Indaiatuba",
            "bairro": "Parque das Nações",
            "dormitorios": 3,
            "suites": 1,
            "banheiros": 2,
            "garagem": "3 Vagas",
            "area_terreno": "200 m²",
            "area_construida": "160 m²",
            "destaques": ["Nova", "Área Gourmet", "Quintal"],
            "descricao": "Casa nova com 3 dormitórios, área gourmet e garagem para 3 carros em bairro tranquilo."
        }
    ];
    
    filtrarImoveis();
}

// Função para filtrar imóveis
function filtrarImoveis() {
    const tipo = document.getElementById('tipo').value;
    const negocio = document.getElementById('negocio').value;
    const dormitorios = document.getElementById('dormitorios').value;
    const valorMax = document.getElementById('valor').value;
    
    imoveisExibidos = todosImoveis.filter(imovel => {
        // Filtro por tipo
        if (tipo !== 'todos' && !imovel.tipo.toLowerCase().includes(tipo.toLowerCase())) {
            return false;
        }
        
        // Filtro por negócio
        if (negocio !== 'todos' && !imovel.negocio.toLowerCase().includes(negocio.toLowerCase())) {
            return false;
        }
        
        // Filtro por dormitórios
        if (dormitorios !== 'todos' && imovel.dormitorios < parseInt(dormitorios)) {
            return false;
        }
        
        // Filtro por valor
        if (valorMax !== 'todos') {
            const valorImovel = parseFloat(imovel.valor.replace(/[^\d,]/g, '').replace(',', '.'));
            if (valorImovel > parseFloat(valorMax)) {
                return false;
            }
        }
        
        return true;
    });
    
    // Ordenar imóveis
    ordenarImoveis();
}

// Função para ordenar imóveis
function ordenarImoveis() {
    const ordenacao = document.getElementById('ordenacao').value;
    
    switch (ordenacao) {
        case 'preco-asc':
            imoveisExibidos.sort((a, b) => {
                const valorA = parseFloat(a.valor.replace(/[^\d,]/g, '').replace(',', '.'));
                const valorB = parseFloat(b.valor.replace(/[^\d,]/g, '').replace(',', '.'));
                return valorA - valorB;
            });
            break;
            
        case 'preco-desc':
            imoveisExibidos.sort((a, b) => {
                const valorA = parseFloat(a.valor.replace(/[^\d,]/g, '').replace(',', '.'));
                const valorB = parseFloat(b.valor.replace(/[^\d,]/g, '').replace(',', '.'));
                return valorB - valorA;
            });
            break;
            
        case 'area-asc':
            imoveisExibidos.sort((a, b) => {
                const areaA = parseFloat(a.area_construida.replace(/[^\d,]/g, ''));
                const areaB = parseFloat(b.area_construida.replace(/[^\d,]/g, ''));
                return areaA - areaB;
            });
            break;
            
        case 'area-desc':
            imoveisExibidos.sort((a, b) => {
                const areaA = parseFloat(a.area_construida.replace(/[^\d,]/g, ''));
                const areaB = parseFloat(b.area_construida.replace(/[^\d,]/g, ''));
                return areaB - areaA;
            });
            break;
            
        default: // recentes (código maior é mais recente)
            imoveisExibidos.sort((a, b) => {
                return parseInt(b.codigo) - parseInt(a.codigo);
            });
    }
    
    // Exibir imóveis ordenados
    exibirImoveis();
}

// Função para exibir imóveis
function exibirImoveis() {
    const container = document.getElementById('imoveis-container');
    const template = document.getElementById('imovel-template');
    
    // Limpar container
    container.innerHTML = '';
    
    if (imoveisExibidos.length === 0) {
        container.innerHTML = '<p class="sem-resultados">Nenhum imóvel encontrado com os filtros selecionados.</p>';
        return;
    }
    
    // Adicionar cada imóvel ao container
    imoveisExibidos.forEach(imovel => {
        const card = template.content.cloneNode(true);
        
        // Imagem principal
        const img = card.querySelector('.imovel-img img');
        img.src = `../imagens/imovel_${imovel.codigo}/fachada.jpeg`;
        img.alt = imovel.titulo;
        
        // Tag de negócio
        const tag = card.querySelector('.imovel-tag');
        tag.textContent = imovel.negocio === 'Vende-se' ? 'Venda' : 'Aluguel';
        
        // Título
        card.querySelector('.imovel-titulo').textContent = imovel.titulo;
        
        // Local
        card.querySelector('.imovel-local span').textContent = `${imovel.bairro}, ${imovel.cidade}`;
        
        // Detalhes
        card.querySelector('.dormitorios').textContent = imovel.dormitorios;
        card.querySelector('.banheiros').textContent = imovel.banheiros;
        card.querySelector('.garagem').textContent = imovel.garagem;
        card.querySelector('.area').textContent = imovel.area_construida;
        
        // Preço
        card.querySelector('.imovel-preco').textContent = imovel.valor;
        
        // Botão de detalhes
        const btnDetalhes = card.querySelector('.ver-detalhes');
        btnDetalhes.setAttribute('data-codigo', imovel.codigo);
        btnDetalhes.addEventListener('click', function(e) {
            e.preventDefault();
            abrirModal(imovel.codigo);
        });
        
        // Adicionar card ao container
        container.appendChild(card);
    });
}

// Função para configurar eventos
function configurarEventos() {
    // Evento de busca
    document.getElementById('btn-buscar').addEventListener('click', function() {
        filtrarImoveis();
    });
    
    // Evento de ordenação
    document.getElementById('ordenacao').addEventListener('change', function() {
        ordenarImoveis();
    });
    
    // Evento de menu mobile
    document.querySelector('.menu-toggle').addEventListener('click', function() {
        document.querySelector('.main-nav').classList.toggle('active');
    });
    
    // Evento de envio do formulário de contato
    document.getElementById('form-contato').addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Mensagem enviada com sucesso! Em breve entraremos em contato.');
        this.reset();
    });
}

// Função para configurar modal
function configurarModal() {
    const modal = document.getElementById('modal-imovel');
    const closeBtn = document.querySelector('.close-modal');
    
    // Fechar modal ao clicar no X
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });
    
    // Fechar modal ao clicar fora do conteúdo
    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
}

// Função para abrir modal com detalhes do imóvel
function abrirModal(codigo) {
    const imovel = todosImoveis.find(item => item.codigo === codigo);
    if (!imovel) return;
    
    const modal = document.getElementById('modal-imovel');
    
    // Imagem principal
    const mainImage = modal.querySelector('.main-image img');
    mainImage.src = `../imagens/imovel_${imovel.codigo}/fachada.jpeg`;
    mainImage.alt = imovel.titulo;
    
    // Limpar miniaturas
    const thumbnails = modal.querySelector('.thumbnails');
    thumbnails.innerHTML = '';
    
    // Adicionar miniaturas (simulação)
    const imagensSimuladas = ['fachada.jpeg', 'interior1.jpeg', 'interior2.jpeg'];
    imagensSimuladas.forEach(img => {
        const thumb = document.createElement('div');
        thumb.className = 'thumbnail';
        
        const thumbImg = document.createElement('img');
        thumbImg.src = `../imagens/imovel_${imovel.codigo}/${img}`;
        thumbImg.alt = imovel.titulo;
        
        thumbImg.addEventListener('click', function() {
            mainImage.src = this.src;
        });
        
        thumb.appendChild(thumbImg);
        thumbnails.appendChild(thumb);
    });
    
    // Informações do imóvel
    modal.querySelector('.modal-titulo').textContent = imovel.titulo;
    modal.querySelector('.modal-local span').textContent = `${imovel.bairro}, ${imovel.cidade}`;
    modal.querySelector('.modal-preco').textContent = imovel.valor;
    
    // Detalhes
    modal.querySelector('.dormitorios').textContent = imovel.dormitorios;
    modal.querySelector('.suites').textContent = imovel.suites || 0;
    modal.querySelector('.banheiros').textContent = imovel.banheiros;
    modal.querySelector('.garagem').textContent = imovel.garagem;
    modal.querySelector('.area-construida').textContent = imovel.area_construida;
    modal.querySelector('.area-terreno').textContent = imovel.area_terreno;
    
    // Destaques
    const destaquesList = modal.querySelector('.destaques-lista');
    destaquesList.innerHTML = '';
    
    if (imovel.destaques && imovel.destaques.length > 0) {
        imovel.destaques.forEach(destaque => {
            const li = document.createElement('li');
            li.textContent = destaque;
            destaquesList.appendChild(li);
        });
    } else {
        const li = document.createElement('li');
        li.textContent = 'Imóvel em excelente localização';
        destaquesList.appendChild(li);
    }
    
    // Descrição
    modal.querySelector('.modal-descricao p').textContent = imovel.descricao;
    
    // Configurar botão de WhatsApp
    const btnWhatsapp = modal.querySelector('.btn-whatsapp');
    btnWhatsapp.href = `https://wa.me/5519989376201?text=Olá, tenho interesse no imóvel ${imovel.titulo} (Código: ${imovel.codigo}). Poderia me dar mais informações?`;
    
    // Exibir modal
    modal.style.display = 'block';
}
