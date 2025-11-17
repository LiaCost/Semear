// js/data-loja.js

// Banco de dados simulado para os produtos da loja
const PRODUTO_DATA = {
    "arroz": {
        id: "arroz",
        titulo: "Semente de arroz: 10 sementes",
        preco: "R$ 6,50",
        imagem: "public/images/arroz.png",
        descricao: "Sementes de arroz de alta qualidade, prontas para o plantio. Ideal para climas úmidos e solos alagados.",
        avaliacoes: [
            { nome: "Ana Paula", nota: 5, comentario: "Excelente germinação! Recomendo." },
            { nome: "Bruno Costa", nota: 4, comentario: "Boas sementes, mas demorou um pouco para brotar." }
        ]
    },
    "lavanda": {
        id: "lavanda",
        titulo: "Semente de lavanda: 15 sementes",
        preco: "R$ 12,50",
        imagem: "public/images/lavanda.png",
        descricao: "Sementes de lavanda autêntica (Lavandula angustifolia). Perfeita para jardins aromáticos e produção de óleos essenciais.",
        avaliacoes: [
            { nome: "Carla Dias", nota: 5, comentario: "Cheirosas e brotaram muito rápido! Amei." }
        ]
    },
    "pitaya": {
        id: "pitaya",
        titulo: "Semente de pitaya: 10 sementes",
        preco: "R$ 12,50",
        imagem: "public/images/pitaya.png",
        descricao: "Sementes de Pitaya (Fruta-do-dragão). Cultivo exótico que gera frutos deliciosos e nutritivos.",
        avaliacoes: [] // Nenhuma avaliação ainda
    }
    // Adicione os outros produtos (cenoura, tomate, pimentao) aqui...
};