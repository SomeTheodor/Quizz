let questions = [
    {
        numb: 1,
        question: "¿Qué tan interesado/a estás en el mundo de la programación y el desarrollo de software?",
        options: [
            { text: "Me apasiona, siempre estoy buscando aprender más al respecto", answer: "pA" },
            { text: "Me interesa, pero no profundizo mucho en el tema", answer: "pB" },
            { text: "No me despierta un gran interés", answer: "pN" }
        ]
    }/*,
    {
        numb: 2,
        question: "¿Qué haces cuando te enfrentas a un problema LOGICO?",
        options: [
            { text: "Trato de resolverlo por mi cuenta", answer: "pA" },
            { text: "Pido ayuda a amigos", answer: "pB" },
            { text: "Me siento frustrado/a y no sé qué hacer", answer: "pN" }
        ]
    },
    {
        numb: 3,
        question: "¿Qué te resulta más interesante?",
        options: [
            { text: "Crear soluciones innovadoras y resolver problemas complejos.", answer: "pA" },
            { text: "Diseñar interfaces de usuario atractivas y funcionales.", answer: "pB" },
            { text: "Analizar datos y obtener información valiosa.", answer: "pC" }
        ]
    },
    {
         numb: 4,
        question: "¿Te sientes cómodo/a resolviendo problemas lógicos?",
        options: [
            { text: "Sí, me siento seguro/a lidiando con desafíos lógicos.", answer: "pA" },
            { text: "A veces me siento un poco inseguro/a, pero estoy dispuesto/a a mejorar.", answer: "pB" },
            { text: "No me siento cómodo/a.", answer: "pC" }
        ]
    },
    {
       numb: 5,
        question: "¿Qué opinas sobre la colaboración y el trabajo en equipo?",
        options: [
            { text: "Es esencial para el éxito del proyecto y permite intercambiar ideas.", answer: "pA" },
            { text: "A veces es útil, pero también puede ser complicado coordinarse con otros.", answer: "pB" },
            { text: "No me siento cómodo/a trabajando en equipo.", answer: "pC" }
        ]
    },
    {
        numb: 6,
        question: ". ¿Te interesaria aprender sobre el manejo y almacenamiento de bases de datos?",
        options: [
            { text: "si, puede serme útil en mi trabajo", answer: "bdA" },
            { text: "no del todo, pero si podría ver un par de cosas ", answer: "bdB" },
            { text: "no estoy interisado", answer: "bdC" }
        ]
    },
        {
            numb: 7,
            question: "¿Has tenido alguna experiencia trabajando con manejo de datos?",
            options: [
                { text: "A) Si, y sé cómo funcionan", answer: "bdA" },
                { text: "B) Sí, aunque no comprendí del todo cómo funciona", answer: "bdB" },
                { text: "C) No conozco nada", answer: "bdC" }
            ]
        },
        {
            numb: 8,
            question: "¿Eres curioso/a sobre cómo se gestionan los datos?",
            options: [
                { text: "A) Sí, ya que ayuda a cómo organizar la información", answer: "bdA" },
                { text: "B) No, pero me intrigan ciertos aspectos", answer: "bdB" },
                { text: "C) No estoy interesado en estudiar", answer: "bdC" }
            ]
        },
        {
            numb: 9,
            question: "¿Te gustaría aprender a crear y administrar bases de datos?",
            options: [
                { text: "A) Sí", answer: "bdA" },
                { text: "B) Tal vez", answer: "bdB" },
                { text: "C) No", answer: "bdC" }
            ]
        },
        {
            numb: 10,
            question: "¿Has investigado sobre diferentes sistemas de bases de datos y sus usos?",
            options: [
                { text: "A) Sí", answer: "bdA" },
                { text: "B) Nose", answer: "bdB" },
                { text: "C) No", answer: "bdC" }
            ]
        },
        {
            numb: 11,
            question: "¿Te apasionaría aprender sobre desarrollo web?",
            options: [
                { text: "A) Sí", answer: "wA" },
                { text: "B) Tal vez", answer: "wB" },
                { text: "C) No", answer: "wC" }
            ]
        },
        {
            numb: 12,
            question: "¿Has tenido alguna experiencia con la creación de sitios web o aplicaciones?",
            options: [
                { text: "A) Sí", answer: "wA" },
                { text: "B) Tal vez", answer: "wB" },
                { text: "C) No", answer: "wC" }
            ]
        },
        {
            numb: 13,
            question: "¿Eres curioso/a sobre cómo funcionan los sitios web y aplicaciones que usas?",
            options: [
                { text: "A) Sí", answer: "wA" },
                { text: "B) En algunas cosas", answer: "wB" },
                { text: "C) No", answer: "wC" }
            ]
        },
        {
            numb: 14,
            question: "¿Te gustaría aprender a programar y crear tus propias páginas web?",
            options: [
                { text: "A) Sí", answer: "wA" },
                { text: "B) Solo por diversión", answer: "wB" },
                { text: "C) No", answer: "wC" }
            ]
        },
        {
            numb: 15,
            question: "¿Has investigado sobre herramientas para el desarrollo web?",
            options: [
                { text: "A) Sí", answer: "wA" },
                { text: "B) Me hablaron del tema", answer: "wB" },
                { text: "C) No", answer: "wC" }
            ]
        },
        {
            numb: 16,
            question: "¿Te interesa aprender sobre el funcionamiento y ensamblaje de hardware?",
            options: [
                { text: "A) Sí", answer: "hA" },
                { text: "B) Dependerá de lo que haga", answer: "hB" },
                { text: "C) No", answer: "hC" }
            ]
        },
        {
            numb: 17,
            question: "¿Has tenido alguna experiencia reparando o mejorando equipos informáticos?",
            options: [
                { text: "A) Sí", answer: "hA" },
                { text: "B) No pero investigué cómo lo hacen", answer: "hB" },
                { text: "C) No", answer: "hC" }
            ]
        },
        {
            numb: 18,
            question: "¿Eres curioso/a sobre cómo se construyen y conectan los componentes del hardware?",
            options: [
                { text: "A) Sí", answer: "hA" },
                { text: "B) Tal vez", answer: "hB" },
                { text: "C) No", answer: "hC" }
            ]
        },
        {
            numb: 19,
            question: "¿Te gustaría aprender a montar y configurar tu propio equipo informático?",
            options: [
                { text: "A) Sí", answer: "hA" },
                { text: "B) Únicamente para uso personal", answer: "hB" },
                { text: "C) No", answer: "hC" }
            ]
        },
        {
            numb: 20,
            question: "¿Has investigado sobre diferentes dispositivos y sus características técnicas?",
            options: [
                { text: "A) Sí", answer: "hA" },
                { text: "B) Conozco un poco", answer: "hB" },
                { text: "C) No", answer: "hC" }
            ]
        },
        {
            numb: 21,
            question: "¿Te interesa aprender sobre redes de computadoras y su funcionamiento?",
            options: [
                { text: "A) Sí", answer: "rA" },
                { text: "B) Tal vez", answer: "rB" },
                { text: "C) No", answer: "rC" }
            ]
        },
        {
            numb: 22,
            question: "¿Has tenido alguna experiencia configurando o solucionando problemas de redes?",
            options: [
                { text: "A) Sí", answer: "rA" },
                { text: "B) Tengo conocimiento pero no experiencia", answer: "rB" },
                { text: "C) No", answer: "rC" }
            ]
        },
        {
            numb: 23,
            question: "¿Eres curioso/a sobre cómo se conectan y comunican los dispositivos en red?",
            options: [
                { text: "A) Sí", answer: "rA" },
                { text: "B) Tal vez", answer: "rB" },
                { text: "C) No", answer: "rC" }
            ]
        },
        {
            numb: 24,
            question: "¿Te gustaría aprender a diseñar y mantener redes informáticas eficientes?",
            options: [
                { text: "A) Sí", answer: "rA" },
                { text: "B) Solo por pasatiempo", answer: "rB" },
                { text: "C) No", answer: "rC" }
            ]
        },
        {
            numb: 25,
            question: "¿Has investigado sobre diferentes protocolos y tecnologías de red?",
            options: [
                { text: "A) Sí", answer: "rA" },
                { text: "B) Me enseñaron", answer: "rB" },
                { text: "C) No", answer: "rC" }
            ]
        }*/
    ];

// ... (código de manejo de puntajes y funciones relacionadas)
