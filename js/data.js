// js/data.js

// Este objeto servirá como nosso "banco de dados" para os hubs.
// A "chave" (ex: "melancia") é o ID que usaremos.
const HUB_DATA = {
    "melancia": {
        titulo: "Semente de Melancia",
        imagem: "public/images/download.png",
        descricao_curta: "Aqui, agricultores e interessados no cultivo de melancia encontram orientações sobre o plantio, manejo e comercialização.",
        // MUDANÇA: Adicionada a descrição longa
        descricao_longa: [
            "A semente de melancia é responsável por dar origem a uma das frutas mais refrescantes e consumidas no verão. Seu cultivo é adaptável a diferentes tipos de solo, desde que bem drenado e com boa exposição solar. Além de ser essencial para a produção da fruta, as sementes também podem ser aproveitadas na alimentação por serem ricas em nutrientes.",
            "As plantações de melancia requerem atenção à irrigação, pois o excesso de água pode prejudicar o crescimento. O manejo adequado e o uso de sementes selecionadas garantem frutos maiores, mais doces e com casca firme, ideais para o consumo e comercialização."
        ],
        // MUDANÇA: Atualizado com base no seu HTML
        beneficios: [
            "Fonte natural de proteínas, ferro e magnésio.",
            "Excelente para produção comercial em climas tropicais.",
            "Ajuda na hidratação do corpo devido ao alto teor de água da fruta.",
            "As sementes torradas fortalecem o sistema imunológico."
        ],
        maleficios: [
            "Consumo excessivo de sementes cruas pode causar leve desconforto digestivo.",
            "Excesso de umidade no solo pode apodrecer as raízes.",
            "Algumas variedades híbridas não produzem sementes férteis para replantio."
        ]
    },
    "tamarindo": {
        titulo: "Semente de Tamarindo",
        imagem: "public/images/tama2.png",
        descricao_curta: "Nutritiva, rica em proteínas, gorduras saudáveis e minerais como magnésio e ferro.",
        // MUDANÇA: Adicionados campos vazios como placeholder
        descricao_longa: [
            "Parágrafo 1 sobre tamarindo...",
            "Parágrafo 2 sobre tamarindo..."
        ],
        beneficios: [
            "Auxilia na digestão e tem propriedades laxativas leves.",
            "Rico em antioxidantes que combatem radicais livres.",
            "Fonte de magnésio, essencial para a saúde óssea e muscular."
        ],
        maleficios: [
            "Pode interagir com certos medicamentos, como aspirina.",
            "Seu extrato concentrado pode ter efeito erosivo nos dentes."
        ]
    },
    "cacau": {
        titulo: "Semente de Cacau",
        imagem: "public/images/cacao.png",
        descricao_curta: "Rica em nutrientes e ideal para cultivo tropical.",
        // MUDANÇA: Adicionados campos vazios como placeholder
        descricao_longa: [
            "Parágrafo 1 sobre cacau...",
            "Parágrafo 2 sobre cacau..."
        ],
        beneficios: [
            "Excelente fonte de flavonoides, que melhoram a saúde do coração.",
            "Contém teobromina, um estimulante natural mais suave que a cafeína.",
            "Rico em ferro e magnésio."
        ],
        maleficios: [
            "Alto teor calórico e de gordura quando processado com açúcar (chocolate).",
            "Pode causar enxaqueca em pessoas sensíveis."
        ]
    },
    // Adicione as outras sementes (maracuja, girassol, etc.) aqui...
    "girassol": {
        titulo: "Semente de Girassol",
        imagem: "public/images/girassol.png",
        descricao_curta: "As sementes de girassol são amplamente conhecidas pelo seu valor nutricional e pelo papel ecológico dessa flor radiante. Além de     servirem como alimento saudável, também são essenciais para a produção de óleo vegetal e contribuem para a polinização e a biodiversidade.",
        // MUDANÇA: Adicionados campos vazios como placeholder
        descricao_longa: [
            "O girassol é uma planta rústica e de fácil cultivo, adaptando-se bem a solos férteis e locais com boa exposição solar. ",
            " Suas sementes são ricas em gorduras boas, proteínas e minerais, sendo muito utilizadas na alimentação humana e animal."
        ],
        beneficios: [
            "Rica em vitamina E e gorduras saudáveis que auxiliam na saúde do coração.",
            "Fonte de proteína vegetal e minerais como magnésio e selênio.",
            "Excelente opção de lanche natural e energético.",
            "Ajuda na regeneração do solo e atrai polinizadores."
        ],
        maleficios: [
            " O consumo excessivo pode aumentar a ingestão calórica devido ao alto teor de gordura.",
            "Em solos pobres, pode apresentar crescimento reduzido e baixa produtividade.",
            " O óleo extraído pode oxidar facilmente se não armazenado corretamente."
        ]
    },
    "margarida": {
        titulo: "Semente de Margarida",
        imagem: "public/images/margarida.png",
        descricao_curta: "As sementes de margarida dão origem a flores delicadas e muito apreciadas em jardins e paisagens ornamentais. São símbolo de pureza e simplicidade, ideais para quem busca um toque de cor e vida em espaços verdes.",
        // MUDANÇA: Adicionados campos vazios como placeholder
        descricao_longa: [
            "A margarida é uma planta de fácil cultivo, que prefere locais bem iluminados e solos férteis com boa drenagem.",
            "Além de sua beleza, também desempenha papel ecológico importante, atraindo abelhas e outros polinizadores."
        ],
        beneficios: [
            "Contribui para a beleza paisagística e bem-estar visual.",
            "Ajuda na atração de abelhas e borboletas, promovendo a polinização.",
            "Pode ser cultivada em vasos, canteiros ou bordas de jardins.",
            "Resistente e de fácil manutenção, adaptando-se bem a diferentes climas."
        ],
        maleficios: [
            "Flores delicadas podem ser sensíveis ao excesso de sol ou ventos fortes.",
            "Requer regas frequentes em períodos muito secos.",
            "Em solos encharcados, pode sofrer com fungos nas raízes."
        ]
    },
    "ipe": {
        titulo: "Semente de Ipê",
        imagem: "public/images/DALL·E 2024-10-25 19.03.47 - A close-up of a cluster of pink ipê flowers (Tabebuia rosea) with delicate petals and intricate details, showcasing the vibrant color and texture of e 1.png",
        descricao_curta: " O Ipê é uma das árvores mais emblemáticas do Brasil, conhecido por suas flores exuberantes nas cores roxa, amarela, rosa ou branca. Suas sementes são leves e aladas, permitindo que o vento as espalhe com facilidade.",
        // MUDANÇA: Adicionados campos vazios como placeholder
        descricao_longa: [
            " Ideal para reflorestamento e paisagismo urbano, o Ipê é resistente e se adapta bem a diferentes tipos de solo tornando-se uma excelente opção para quem busca beleza e durabilidade na natureza."          
        ],
        beneficios: [
            "Árvore símbolo da flora brasileira, com flores de beleza marcante.",
            "Ajuda na recuperação de áreas degradadas e no reflorestamento.",
            "Resistente a pragas e variações climáticas.",
            "Suas flores atraem abelhas e pássaros, contribuindo para a biodiversidade."
        ],
        maleficios: [
            "Crescimento relativamente lento, exigindo paciência no cultivo.",
            "Não se adapta bem a locais de sombra intensa ou solos encharcados.",
            "Suas folhas e flores podem causar sujeira em calçadas quando caem."
        ]
    },
    "linhaca": {
        titulo: "Semente de Linhaça",
        imagem: "public/images/08 DE MAIO - LINHAÇA - SEMENTE - FLOR (1).png",
        descricao_curta: "As sementes de linhaça são conhecidas por seu alto valor nutricional, ricas em ômega-3, fibras e antioxidantes. Além disso, são amplamente utilizadas tanto na alimentação quanto na produção de óleos naturais e cosméticos.",
        // MUDANÇA: Adicionados campos vazios como placeholder
        descricao_longa: [
            "A planta da linhaça é resistente e se adapta bem a climas temperados.",
            "Suas flores azuladas dão um toque ornamental, enquanto suas sementes trazem benefícios para a saúde e para o solo."
        ],
        beneficios: [
            "Rica em ômega-3, auxilia na saúde cardiovascular.",
            "Alta concentração de fibras que melhoram o sistema digestivo.",
            "Possui propriedades antioxidantes e anti-inflamatórias.",
            "Ajuda na fertilidade do solo e pode ser usada em rotação de culturas."
        ],
        maleficios: [
            "O consumo em excesso pode causar desconforto intestinal.",
            "Requer cuidados com irrigação — solos muito úmidos prejudicam ocultivo.",
            "Deve ser armazenada corretamente para evitar oxidação das gorduras."
        ]
    },
     "rosa": {
        titulo: "Semente de Rosa",
        imagem: "public/images/pexels-irene-asthetik-2147866784-34701049.jpg",
        descricao_curta: "A semente de rosa é símbolo de beleza e romantismo. Seu cultivo exige paciência e cuidado, pois germina lentamente e necessita de um ambiente equilibrado.",
        // MUDANÇA: Adicionados campos vazios como placeholder
        descricao_longa: [
            " As rosas são amplamente utilizadas em jardins, perfumaria e produtos cosméticos. Além disso, possuem propriedades terapêuticas e aromáticas."
        ],
        beneficios: [
            "Embeleza jardins e espaços públicos.",
            "Usada em perfumes e cosméticos naturais.",
            "Possui propriedades calmantes e aromáticas.",
            "Representa amor e harmonia nas culturas."
        ],
        maleficios: [
            "Exige solo fértil e irrigação regular.",
            "Susceptível a pragas e fungos.",
            "Produção intensiva pode afetar o solo."
        ]
    },
     "lavanda": {
        titulo: "Semente de lavanda",
        imagem: "public/images/pexels-kelly-rabie-787427-1878095 (1).jpg",
        descricao_curta: " A lavanda é conhecida pelo seu aroma suave e propriedades relaxantes.          Suas sementes precisam de sol pleno e solo bem drenado para uma germinação saudável e eficiente.",
        // MUDANÇA: Adicionados campos vazios como placeholder
        descricao_longa: [
            "Muito utilizada em aromaterapia, cosméticos e jardins ornamentais, a lavanda é uma planta versátil, elegante e altamente valorizada."
        ],
        beneficios: [
            "Propriedades calmantes e aromáticas.",
            "Usada em óleos essenciais e produtos cosméticos.",
            "Auxilia no alívio do estresse e da ansiedade.",
            "Decora ambientes com elegância, aroma e suavidade."
        ],
        maleficios: [
            "Não tolera solos encharcados.",
            "Pode causar irritação na pele quando usada em excesso.",
            "Germinação lenta, exigindo paciência e cuidados constantes."
        ]
    },
     "cravo": {
        titulo: "Semente de Cravo",
        imagem: "public/images/cravo.jpg",
        descricao_curta: " O cravo é uma flor aromática e vibrante, muito utilizada em arranjos florais e em produtos medicinais. Suas sementes necessitam de solos úmidos, ricos em nutrientes e boa luminosidade.",
        // MUDANÇA: Adicionados campos vazios como placeholder
        descricao_longa: [
            "  Além do uso ornamental, o cravo é amplamente empregado como tempero e possui diversas propriedades medicinais, sendo reconhecido por seu aroma marcante e efeitos terapêuticos."          
        ],
        beneficios: [
            "Utilizado como tempero natural.",
            "Possui propriedades antibacterianas e analgésicas.",
            "Fortalece o sistema imunológico.",
            "Beleza ornamental e perfume agradável."
        ],
        maleficios: [
            "Óleo essencial deve ser usado com cuidado.",
            "Não tolera excesso de água.",
            "Exposição prolongada pode causar irritação na pele."
        ]
    },
     "hortensia": {
        titulo: "Semente de Hortênsia",
        imagem: "public/images/hort.jpg",
        descricao_curta: "  A hortênsia encanta com suas flores volumosas e coloridas. Suas sementes necessitam de umidade constante e sombra parcial para germinação ideal.",
        // MUDANÇA: Adicionados campos vazios como placeholder
        descricao_longa: [
            "Muito utilizada em paisagismo e ornamentação, a hortênsia é um símbolo de gratidão, charme e beleza natural."
            
        ],
        beneficios: [
            "Flores disponíveis em diversas cores e formatos.",
            "Amplamente usada na decoração de jardins e eventos.",
            "Boa resistência a temperaturas moderadas.",
            "Alto valor ornamental."
        ],
        maleficios: [
            "Todas as partes da planta são tóxicas se ingeridas.",
            "Requer regas constantes e solos ácidos.",
            "Sensível a calor excessivo e baixa umidade."
        ]
    }
};