// js/data.js

// Este objeto servirá como nosso "banco de dados" para os hubs.
// A "chave" (ex: "melancia") é o ID que usaremos.
const HUB_DATA = {
    //sessao mais acessados
    "m-cafe": {
        titulo: "Semente de café",
        imagem: "public/images/cafe.png",
        descricao_curta: "Aqui, agricultores e interessados no cultivo de café encontram orientações sobre o plantio, manejo e comercialização.",
        // MUDANÇA: Adicionada a descrição longa
        descricao_longa: [
            "A semente de café é responsável por dar origem a uma das bebidas mais consumidas e apreciadas no mundo. Seu cultivo exige atenção especial ao tipo de solo, que deve ser fértil, bem drenado e com boa altitude, além de condições climáticas adequadas, como temperaturas amenas e chuvas regulares. Além de ser essencial para a produção dos grãos, as sementes de café representam o início de um processo agrícola que envolve seleção cuidadosa, manejo adequado e técnicas de plantio que garantem plantas vigorosas e produtivas. O uso de sementes de qualidade influencia diretamente na produtividade, na resistência a pragas e na qualidade final da bebida.",
            "As lavouras de café requerem manejo criterioso da irrigação e da adubação, pois o excesso ou a falta de água pode comprometer o desenvolvimento das plantas. Com práticas agrícolas corretas e sementes selecionadas, é possível obter grãos mais uniformes, de sabor marcante e com maior valor comercial, atendendo tanto ao mercado interno quanto à exportação."
        ],
        // MUDANÇA: Atualizado com base no seu HTML
        beneficios: [
            "Fonte natural de antioxidantes, como polifenóis e cafeína.",
            "Excelente para produção comercial em regiões de clima tropical e subtropical.",
            "Estimula o sistema nervoso central, aumentando a disposição e a concentração.",
            "Grãos de café torrados contribuem para a melhora do desempenho físico e mental."
        ],
        maleficios: [
            "Consumo excessivo pode causar insônia, ansiedade e palpitações devido à cafeína.",
            "Excesso de umidade no solo pode favorecer pragas e doenças nas lavouras de café.",
            "Algumas variedades híbridas podem ter menor resistência ou produtividade em replantio."
        ]
    },
    "m-acai": {
        titulo: "Semente de açaí",
        imagem: "public/images/acai.jpg",
        descricao_curta: "A semente de açaí é responsável por dar origem a uma das frutas mais valorizadas da Amazônia, conhecida pelo seu alto valor nutricional e energético. O cultivo do açaí é adaptado às regiões tropicais e úmidas, especialmente em áreas de várzea, onde o solo é fértil e rico em matéria orgânica.",
        // MUDANÇA: Adicionados campos vazios como placeholder
        descricao_longa: [
            "Além de ser essencial para a produção dos frutos, as sementes de açaí têm potencial de aproveitamento em pesquisas e usos alternativos, como na produção de biojoias, artesanato e até como insumo para geração de energia. A escolha de sementes de qualidade garante plantas mais resistentes e produtivas, fundamentais para atender à crescente demanda nacional e internacional.",
            "As plantações de açaí requerem manejo adequado da irrigação e do sombreamento, já que o excesso de sol direto pode comprometer o desenvolvimento das mudas. Com técnicas corretas de cultivo e seleção de sementes, é possível obter frutos mais abundantes, de polpa consistente e sabor marcante, ideais para consumo e comercialização."
        ],
        beneficios: [
            "Fonte natural de antioxidantes, fibras e gorduras saudáveis.",
            "Excelente para produção comercial em regiões tropicais úmidas, especialmente na Amazônia.",
            "Contribui para a saúde cardiovascular e para o aumento da energia",
            "As sementes podem ser reaproveitadas em artesanato, biojoias e pesquisas de sustentabilidade."
        ],
        maleficios: [
            "Consumo excessivo da polpa pode levar ao alto aporte calórico.",
            "Excesso de umidade no solo pode favorecer fungos e prejudicar o desenvolvimento das raízes.",
            "Algumas sementes não germinam facilmente sem tratamento prévio, dificultando o replantio."
        ]
    },
    "m-ameixa": {
        titulo: "Semente de ameixa",
        imagem: "public/images/ameixa.jpg",
        descricao_curta: "A semente de ameixa dá origem a uma das frutas mais apreciadas por seu sabor doce e levemente ácido. O cultivo da ameixa adapta-se bem a climas temperados, exigindo solos férteis, bem drenados e com boa exposição solar.",
        // MUDANÇA: Adicionados campos vazios como placeholder
        descricao_longa: [
            "Além de ser essencial para a produção dos frutos, as sementes de ameixa podem ser utilizadas em pesquisas e aproveitamentos alternativos, como extração de óleos e compostagem. A seleção de sementes de qualidade garante plantas mais resistentes, produtivas e frutos de melhor calibre para consumo e comercialização.",
            "As plantações de ameixa requerem manejo adequado da irrigação e podas regulares, já que o excesso de água ou a falta de controle no crescimento pode comprometer a produtividade. Com técnicas corretas de cultivo, é possível obter frutos suculentos, de polpa firme e sabor marcante, ideais para consumo in natura ou processamento industrial."
        ],
        beneficios: [
            "Fonte natural de vitaminas A, C e fibras.",
            "Excelente para produção comercial em regiões de clima temperado.",
            "Contribui para a saúde digestiva e auxilia no funcionamento intestinal.",
            "Frutos ricos em antioxidantes que fortalecem o sistema imunológico."
        ],
        maleficios: [
            "Consumo excessivo pode causar efeito laxativo e desconforto intestinal.",
            "Excesso de umidade no solo pode favorecer fungos e apodrecer as raízes.",
            "Algumas variedades híbridas podem ter menor fertilidade das sementes para replantio."
        ]
    },
    "m-pessego": {
        titulo: "Semente de pessêgo",
        imagem: "public/images/pessego.jpg",
        descricao_curta: "A semente de pêssego dá origem a uma das frutas mais apreciadas em climas temperados, conhecida por sua polpa suculenta e sabor adocicado. O cultivo do pêssego exige solos férteis, bem drenados e boa exposição solar, além de temperaturas amenas para garantir frutos de qualidade.",
        // MUDANÇA: Adicionados campos vazios como placeholder
        descricao_longa: [
            "Além de ser essencial para a produção dos frutos, as sementes de pêssego podem ser utilizadas em pesquisas e aproveitamentos alternativos, como extração de óleos e compostagem. A seleção de sementes de qualidade garante plantas mais resistentes, produtivas e frutos de melhor calibre para consumo e comercialização.",
            "As plantações de pêssego requerem manejo adequado da irrigação e podas regulares, já que o excesso de água ou a falta de controle no crescimento pode comprometer a produtividade. Com técnicas corretas de cultivo, é possível obter frutos doces, de polpa firme e casca delicada, ideais para consumo in natura ou processamento industrial."
        ],
        beneficios: [
            "Fonte natural de vitaminas A, C e fibras.",
            "Excelente para produção comercial em regiões de clima temperado.",
            "Fonte de magnésio, essencial para a saúde óssea e muscular.Contribui para a saúde digestiva e auxilia no funcionamento intestinal.",
            "Frutos ricos em antioxidantes que fortalecem o sistema imunológico."
        ],
        maleficios: [
            "Consumo excessivo pode causar efeito laxativo e desconforto intestinal.",
            "Excesso de umidade no solo pode favorecer fungos e apodrecer as raízes.",
            "Algumas variedades híbridas podem ter menor fertilidade das sementes para replantio."
        ]
    },
    //sessao frutas
    "melancia": {
        titulo: "Semente de melancia",
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
        titulo: "Semente de tamarindo",
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
        titulo: "Semente de cacau",
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

    //sessao flores
    "girassol": {
        titulo: "Semente de girassol",
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
        titulo: "Semente de margarida",
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
        titulo: "Semente de ipê",
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
        titulo: "Semente de linhaça",
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
        titulo: "Semente de rosa",
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
        titulo: "Semente de cravo",
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
        titulo: "Semente de hortênsia",
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