document.addEventListener('DOMContentLoaded', function() {
    // Verificar autenticação
    verificarAutenticacao();
    
    // Configurar eventos
    configurarEventos();
    
    // Carregar dados dos imóveis para a tabela
    carregarTabelaImoveis();
});

// Função para verificar autenticação
function verificarAutenticacao() {
    // Simulação de verificação de autenticação
    // Em um ambiente real, isso seria feito com um sistema de autenticação adequado
    const autenticado = sessionStorage.getItem('admin_autenticado');
    
    if (!autenticado) {
        // Mostrar modal de login
        const loginModal = document.getElementById('login-modal');
        loginModal.style.display = 'block';
    }
}

// Função para configurar eventos
function configurarEventos() {
    // Navegação da sidebar
    const menuLinks = document.querySelectorAll('.sidebar a');
    menuLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remover classe active de todos os links
            menuLinks.forEach(item => item.classList.remove('active'));
            
            // Adicionar classe active ao link clicado
            this.classList.add('active');
            
            // Mostrar seção correspondente
            const sectionId = this.getAttribute('data-section');
            const sections = document.querySelectorAll('.admin-section');
            
            sections.forEach(section => {
                section.classList.remove('active');
            });
            
            document.getElementById(sectionId).classList.add('active');
        });
    });
    
    // Evento de login
    document.getElementById('form-login').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = document.getElementById('login-email').value;
        const senha = document.getElementById('login-senha').value;
        
        // Verificar credenciais (simulação)
        if (email === 'phelippe.fernandes@creci.org.br' && senha === '*Mairinck88') {
            // Autenticar usuário
            sessionStorage.setItem('admin_autenticado', 'true');
            
            // Fechar modal
            document.getElementById('login-modal').style.display = 'none';
        } else {
            alert('Credenciais inválidas. Por favor, tente novamente.');
        }
    });
    
    // Evento de logout
    document.getElementById('btn-logout').addEventListener('click', function(e) {
        e.preventDefault();
        
        // Remover autenticação
        sessionStorage.removeItem('admin_autenticado');
        
        // Redirecionar para a página inicial
        window.location.href = 'index.html';
    });
    
    // Evento de adicionar imóvel
    document.getElementById('form-imovel').addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Simulação de adição de imóvel
        alert('Imóvel adicionado com sucesso!');
        this.reset();
        
        // Limpar preview de imagens
        document.getElementById('image-preview').innerHTML = '';
    });
    
    // Evento de editar biografia
    document.getElementById('form-biografia').addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Simulação de edição de biografia
        alert('Biografia atualizada com sucesso!');
    });
    
    // Evento de upload de imagens do imóvel
    document.getElementById('upload-images').addEventListener('change', function(e) {
        const files = e.target.files;
        const preview = document.getElementById('image-preview');
        
        // Limpar preview existente
        preview.innerHTML = '';
        
        // Adicionar previews das imagens selecionadas
        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            
            if (!file.type.startsWith('image/')) continue;
            
            const reader = new FileReader();
            
            reader.onload = function(e) {
                const previewItem = document.createElement('div');
                previewItem.className = 'preview-item';
                
                const img = document.createElement('img');
                img.src = e.target.result;
                img.alt = file.name;
                
                const removeBtn = document.createElement('span');
                removeBtn.className = 'preview-remove';
                removeBtn.innerHTML = '<i class="fas fa-times"></i>';
                removeBtn.addEventListener('click', function() {
                    previewItem.remove();
                });
                
                previewItem.appendChild(img);
                previewItem.appendChild(removeBtn);
                preview.appendChild(previewItem);
            };
            
            reader.readAsDataURL(file);
        }
    });
    
    // Evento de upload de foto de perfil
    document.getElementById('upload-profile').addEventListener('change', function(e) {
        const file = e.target.files[0];
        
        if (!file || !file.type.startsWith('image/')) return;
        
        const reader = new FileReader();
        
        reader.onload = function(e) {
            document.getElementById('preview-profile').src = e.target.result;
        };
        
        reader.readAsDataURL(file);
    });
    
    // Eventos para os botões de mensagens
    const btnView = document.querySelectorAll('.btn-view');
    btnView.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            // Lógica para visualizar mensagem (já implementada no layout)
        });
    });
    
    const btnDelete = document.querySelectorAll('.btn-delete');
    btnDelete.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            if (confirm('Tem certeza que deseja excluir esta mensagem?')) {
                // Simulação de exclusão
                this.closest('.mensagem-item').remove();
            }
        });
    });
    
    // Evento para clicar em uma mensagem
    const mensagemItems = document.querySelectorAll('.mensagem-item');
    mensagemItems.forEach(item => {
        item.addEventListener('click', function() {
            // Remover classe unread
            this.classList.remove('unread');
            
            // Lógica para exibir detalhes da mensagem (já implementada no layout)
        });
    });
}

// Função para carregar tabela de imóveis
function carregarTabelaImoveis() {
    // Simulação de carregamento de dados
    const imoveis = [
        {
            codigo: '49285',
            titulo: 'Sobrado 3 Dorm, Suíte, Terraço no Regent',
            tipo: 'Sobrado',
            negocio: 'Vende-se',
            valor: 'R$ 850.000,00'
        },
        {
            codigo: '49284',
            titulo: 'Sobrado Luxo 4 Dorm, 2 Suítes e Cinema',
            tipo: 'Sobrado',
            negocio: 'Vende-se',
            valor: 'R$ 1.950.000,00'
        },
        {
            codigo: '49283',
            titulo: 'Casa Nova 3 Dorm, Gourmet e Garagem p/ 3',
            tipo: 'Casa',
            negocio: 'Vende-se',
            valor: 'R$ 780.000,00'
        },
        {
            codigo: '49282',
            titulo: 'Casa Enorme com Piscina, Sauna e 5 Qtos',
            tipo: 'Casa',
            negocio: 'Vende-se',
            valor: 'R$ 1.200.000,00'
        },
        {
            codigo: '49281',
            titulo: 'Casa Nova no Veneza Pronta pra Morar',
            tipo: 'Casa',
            negocio: 'Vende-se',
            valor: 'R$ 690.000,00'
        },
        {
            codigo: '49280',
            titulo: 'Casa 3 Qtos, Suíte e Gourmet - 105m²',
            tipo: 'Casa',
            negocio: 'Vende-se',
            valor: 'R$ 764.000,00'
        },
        {
            codigo: '49279',
            titulo: 'Casa Premium: 2 Suítes Gourmet e 3 Vagas',
            tipo: 'Casa',
            negocio: 'Vende-se',
            valor: 'R$ 1.100.000,00'
        },
        {
            codigo: '49278',
            titulo: 'Oportunidade Única Em Bairro Em Ascenção',
            tipo: 'Comercial',
            negocio: 'Vende-se',
            valor: 'R$ 750.000,00'
        }
    ];
    
    const tableBody = document.getElementById('imoveis-table-body');
    
    // Limpar tabela
    tableBody.innerHTML = '';
    
    // Adicionar linhas à tabela
    imoveis.forEach(imovel => {
        const row = document.createElement('tr');
        
        row.innerHTML = `
            <td>${imovel.codigo}</td>
            <td>${imovel.titulo}</td>
            <td>${imovel.tipo}</td>
            <td>${imovel.negocio}</td>
            <td>${imovel.valor}</td>
            <td>
                <div class="table-actions">
                    <button class="btn-view"><i class="fas fa-eye"></i></button>
                    <button class="btn-edit"><i class="fas fa-edit"></i></button>
                    <button class="btn-delete"><i class="fas fa-trash"></i></button>
                </div>
            </td>
        `;
        
        // Adicionar eventos aos botões
        const btnView = row.querySelector('.btn-view');
        btnView.addEventListener('click', function() {
            window.open(`index.html#imovel-${imovel.codigo}`, '_blank');
        });
        
        const btnEdit = row.querySelector('.btn-edit');
        btnEdit.addEventListener('click', function() {
            // Redirecionar para formulário de edição
            const addSection = document.querySelector('[data-section="adicionar"]');
            addSection.click();
            
            // Preencher formulário com dados do imóvel (simulação)
            document.getElementById('titulo').value = imovel.titulo;
            document.getElementById('codigo').value = imovel.codigo;
            document.getElementById('tipo').value = imovel.tipo;
            document.getElementById('negocio').value = imovel.negocio;
            document.getElementById('valor').value = imovel.valor;
        });
        
        const btnDelete = row.querySelector('.btn-delete');
        btnDelete.addEventListener('click', function() {
            if (confirm(`Tem certeza que deseja excluir o imóvel ${imovel.titulo}?`)) {
                // Simulação de exclusão
                row.remove();
            }
        });
        
        tableBody.appendChild(row);
    });
}
