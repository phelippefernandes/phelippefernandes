# Documentação do Site Imobiliário - Phelippe Fernandes

Este documento contém a documentação completa do site imobiliário desenvolvido para o corretor Phelippe Fernandes, especializado em imóveis de alto padrão em Indaiatuba, SP.

## Estrutura do Projeto

```
projeto_imobiliario/
├── codigo/
│   ├── css/
│   │   ├── style.css
│   │   └── admin.css
│   ├── js/
│   │   ├── script.js
│   │   └── admin.js
│   ├── img/
│   │   ├── corretor_bio.jpg
│   │   └── parque_ecologico.jpg
│   ├── index.html
│   └── admin.html
├── dados/
│   ├── imovel_49278.json
│   ├── imovel_49279.json
│   ├── imovel_49280.json
│   ├── imovel_49281.json
│   ├── imovel_49282.json
│   ├── imovel_49283.json
│   ├── imovel_49284.json
│   ├── imovel_49285.json
│   ├── modelo_visual.json
│   ├── requisitos.txt
│   ├── todo.md
│   ├── urls.txt
│   └── validacao.md
└── imagens/
    ├── imovel_49278/
    ├── imovel_49279/
    ├── imovel_49280/
    ├── imovel_49281/
    ├── imovel_49282/
    ├── imovel_49283/
    ├── imovel_49284/
    └── imovel_49285/
```

## Paleta de Cores

O site utiliza a seguinte paleta de cores, extraída do modelo visual fornecido:

- **Cores Primárias**:
  - Verde-oliva: `#4B5320`
  - Dourado: `#C5B358`
  - Bege: `#BFB393`

- **Cores Secundárias**:
  - Laranja: `#E25822`
  - Amarelo-ouro: `#FFD700`
  - Preto: `#000000`
  - Branco: `#FFFFFF`

## Fontes

O site utiliza as seguintes fontes:

- **Títulos**: Playfair Display (alternativa: Times New Roman)
- **Subtítulos**: Montserrat (alternativa: Arial)
- **Corpo**: Lato (alternativa: Helvetica)

## Funcionalidades Principais

### Página Principal (index.html)

1. **Header com Menu de Navegação**:
   - Links para as seções principais do site
   - Responsivo com menu hambúrguer para dispositivos móveis

2. **Seção Hero**:
   - Banner principal com imagem de fundo da cidade de Indaiatuba
   - Título e subtítulo destacando o foco em imóveis de alto padrão

3. **Busca de Imóveis**:
   - Filtros por tipo, negócio, dormitórios e valor
   - Botão de busca para aplicar os filtros

4. **Listagem de Imóveis**:
   - Cards com informações principais dos imóveis
   - Opção de ordenação por preço, área ou mais recentes
   - Botão para visualizar detalhes completos

5. **Modal de Detalhes do Imóvel**:
   - Galeria de imagens com miniaturas
   - Informações detalhadas do imóvel
   - Destaques e descrição completa
   - Botões de contato e WhatsApp

6. **Seção Sobre**:
   - Biografia do corretor com foto
   - Informações profissionais e CRECI

7. **Seção Cidade**:
   - Informações sobre Indaiatuba
   - Imagem do Parque Ecológico

8. **Seção Contato**:
   - Formulário de contato
   - Informações de endereço, telefone e e-mail
   - Links para redes sociais

9. **Footer**:
   - Links rápidos
   - Informações de contato
   - Copyright

### Painel Administrativo (admin.html)

1. **Sistema de Login**:
   - Autenticação com e-mail e senha
   - Proteção de acesso às funcionalidades administrativas

2. **Dashboard**:
   - Resumo de imóveis cadastrados
   - Atividades recentes

3. **Gerenciamento de Imóveis**:
   - Listagem de todos os imóveis
   - Opções para visualizar, editar e excluir

4. **Adição de Imóveis**:
   - Formulário completo para cadastro de novos imóveis
   - Upload de múltiplas imagens
   - Campos para todas as informações necessárias

5. **Edição de Biografia**:
   - Formulário para atualizar informações pessoais
   - Upload de nova foto de perfil

6. **Gerenciamento de Mensagens**:
   - Visualização de mensagens recebidas
   - Resposta direta pelo sistema

## Instruções para Edição

### Edição de Conteúdo

#### Alterar Informações de Imóveis

1. Acesse a pasta `dados/` e abra o arquivo JSON correspondente ao imóvel (ex: `imovel_49285.json`)
2. Modifique os campos desejados, mantendo a estrutura do JSON
3. Salve o arquivo

#### Adicionar Novo Imóvel

1. Crie um novo arquivo JSON na pasta `dados/` seguindo o padrão `imovel_XXXXX.json`
2. Copie a estrutura de um arquivo existente e preencha com os novos dados
3. Crie uma pasta correspondente em `imagens/` para armazenar as fotos do imóvel

#### Alterar Biografia

1. No arquivo `index.html`, localize a seção com id "sobre"
2. Edite o conteúdo dentro da div "sobre-text"
3. Para alterar a foto, substitua o arquivo `img/corretor_bio.jpg`

### Edição de Estilo

#### Alterar Cores

1. Abra o arquivo `css/style.css`
2. No início do arquivo, localize as variáveis CSS dentro de `:root`
3. Modifique os valores hexadecimais das cores conforme desejado

#### Alterar Fontes

1. No arquivo `index.html` e `admin.html`, localize a tag `<link>` que importa as fontes do Google Fonts
2. Modifique as fontes conforme necessário
3. Atualize as referências às fontes no arquivo `css/style.css`

### Edição de Funcionalidades

#### Modificar Sistema de Busca

1. Abra o arquivo `js/script.js`
2. Localize a função `filtrarImoveis()`
3. Modifique a lógica de filtragem conforme necessário

#### Alterar Sistema de Ordenação

1. No arquivo `js/script.js`, localize a função `ordenarImoveis()`
2. Modifique a lógica de ordenação conforme necessário

#### Personalizar Painel Administrativo

1. Edite o arquivo `admin.html` para adicionar ou remover seções
2. Atualize o arquivo `js/admin.js` para implementar novas funcionalidades
3. Modifique o estilo no arquivo `css/admin.css`

## Publicação no GitHub Pages

Para publicar o site no GitHub Pages:

1. Crie um repositório no GitHub
2. Faça upload de todo o conteúdo da pasta `codigo/`
3. Nas configurações do repositório, ative o GitHub Pages
4. Selecione a branch principal como fonte
5. O site estará disponível em `https://seu-usuario.github.io/nome-do-repositorio/`

## Credenciais de Acesso ao Painel Administrativo

- **E-mail**: phelippe.fernandes@creci.org.br
- **Senha**: *Mairinck88

## Considerações Finais

Este site foi desenvolvido com foco em design elegante, usabilidade e funcionalidades específicas para o mercado imobiliário de alto padrão. A estrutura foi planejada para ser facilmente editável e expansível, permitindo a adição de novos imóveis e funcionalidades no futuro.

Para qualquer dúvida ou suporte adicional, entre em contato com o desenvolvedor.
