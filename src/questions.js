let questions = [
    {
        numb: 1,
        question: "¿Qué tan interesado/a estás en el mundo de la programación y el desarrollo de software?",
        options: [
            { text: "A) Me apasiona, siempre estoy buscando aprender más al respecto", answer: "pA" },
            { text: "B) Me interesa, pero no profundizo mucho en el tema", answer: "pB" },
            { text: "C) No me despierta un gran interés", answer: "pC" }
        ]
    },
    {
        numb: 2,
        question: "¿Qué haces cuando te enfrentas a un problema lógico?",
        options: [
            { text: "A) Trato de resolverlo por mi cuenta", answer: "pA" },
            { text: "B) Pido ayuda a amigos", answer: "pB" },
            { text: "C) Me siento frustrado/a y no sé qué hacer", answer: "pC" }
        ]
    },
    {
        numb: 3,
        question: "¿Qué te resulta más interesante?",
        options: [
            { text: "A) Crear soluciones innovadoras y resolver problemas complejos", answer: "pA" },
            { text: "B) Diseñar interfaces de usuario atractivas y funcionales", answer: "pB" },
            { text: "C) Analizar datos y obtener información valiosa", answer: "pC" }
        ]
    },
    {
        numb: 4,
        question: "¿Te sientes cómodo/a resolviendo problemas lógicos?",
        options: [
            { text: "A) Sí, me siento seguro/a lidiando con desafíos lógicos", answer: "pA" },
            { text: "B) A veces me siento un poco inseguro/a, pero estoy dispuesto/a a mejorar", answer: "pB" },
            { text: "C) No me siento cómodo/a", answer: "pC" }
        ]
    },
    {
        numb: 5,
        question: "¿Qué opinas sobre la colaboración y el trabajo en equipo?",
        options: [
            { text: "A) Es esencial para el éxito del proyecto y permite intercambiar ideas", answer: "pA" },
            { text: "B) A veces es útil, pero también puede ser complicado coordinarse con otros", answer: "pB" },
            { text: "C) No me siento cómodo/a trabajando en equipo", answer: "pC" }
        ]
    },
    {
        numb: 6,
        question: "¿Te interesaría aprender sobre el manejo y almacenamiento de bases de datos?",
        options: [
            { text: "A) Sí, puede serme útil en mi trabajo", answer: "bdA" },
            { text: "B) No del todo, pero si podría ver un par de cosas", answer: "bdB" },
            { text: "C) No estoy interesado", answer: "bdC" }
        ]
    },
    {
        numb: 7,
        question: "¿Has tenido alguna experiencia trabajando con el manejo de datos?",
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
            { text: "A) Sí, estoy emocionado/a por aprender a crear y administrar bases de datos de manera eficiente.", answer: "bdA" },
            { text: "B) Tal vez, me parece interesante, pero quiero explorar más antes de decidir.", answer: "bdB" },
            { text: "C) No, no tengo interés en aprender sobre bases de datos.", answer: "bdC" }
        ]
    },
    {
        numb: 10,
        question: "¿Has investigado sobre diferentes sistemas de bases de datos y sus usos?",
        options: [
            { text: "A) Sí, he investigado y tengo conocimiento sobre varios sistemas de bases de datos y sus aplicaciones.", answer: "bdA" },
            { text: "B) No, no he investigado, pero estoy dispuesto/a a aprender más sobre el tema.", answer: "bdB" },
            { text: "C) No, no he investigado y no tengo intención de hacerlo.", answer: "bdC" }
        ]
    },
    {
        numb: 11,
        question: "¿Te apasionaría aprender sobre desarrollo web?",
        options: [
            { text: "A) Sí, estoy emocionado/a por aprender sobre desarrollo web y crear sitios web y aplicaciones.", answer: "wA" },
            { text: "B) Tal vez, me intriga, pero quiero explorar más antes de decidir.", answer: "wB" },
            { text: "C) No, no me interesa aprender sobre desarrollo web.", answer: "wC" }
        ]
    },
    {
        numb: 12,
        question: "¿Has tenido alguna experiencia con la creación de sitios web o aplicaciones?",
        options: [
            { text: "A) Sí, tengo experiencia en la creación de sitios web o aplicaciones.", answer: "wA" },
            { text: "B) Tal vez, he experimentado un poco, pero no tengo experiencia sólida.", answer: "wB" },
            { text: "C) No, no tengo experiencia en la creación de sitios web o aplicaciones.", answer: "wC" }
        ]
    },
    {
        numb: 13,
        question: "¿Eres curioso/a sobre cómo funcionan los sitios web y aplicaciones que usas?",
        options: [
            { text: "A) Sí, me interesa profundamente entender cómo funcionan los sitios web y aplicaciones.", answer: "wA" },
            { text: "B) En algunas cosas, me intriga ciertos aspectos pero no profundizo mucho.", answer: "wB" },
            { text: "C) No, no tengo curiosidad sobre su funcionamiento.", answer: "wC" }
        ]
    },
    {
        numb: 14,
        question: "¿Te gustaría aprender a programar y crear tus propias páginas web?",
        options: [
            { text: "A) Sí, estoy emocionado/a por aprender a programar y crear mis propias páginas web.", answer: "wA" },
            { text: "B) Solo por diversión, me gustaría experimentar y ver qué puedo hacer.", answer: "wB" },
            { text: "C) No, no tengo interés en aprender a programar para crear páginas web.", answer: "wC" }
        ]
    },
    {
        numb: 15,
        question: "¿Has investigado sobre herramientas para el desarrollo web?",
        options: [
            { text: "A) Sí, he investigado y estoy familiarizado/a con diversas herramientas de desarrollo web.", answer: "wA" },
            { text: "B) Me han hablado del tema, pero aún no he investigado a fondo.", answer: "wB" },
            { text: "C) No, no he investigado sobre herramientas para el desarrollo web.", answer: "wC" }
        ]
    },
    {
        numb: 16,
        question: "¿Te interesa aprender sobre el funcionamiento y ensamblaje de hardware?",
        options: [
            { text: "A) Sí, estoy entusiasmado/a por aprender sobre el funcionamiento y ensamblaje de hardware de computadoras.", answer: "hA" },
            { text: "B) Dependerá de lo que haga, podría ser útil en mi carrera.", answer: "hB" },
            { text: "C) No, no me interesa aprender sobre hardware.", answer: "hC" }
        ]
    },
    {
        numb: 17,
        question: "¿Has tenido alguna experiencia reparando o mejorando equipos informáticos?",
        options: [
            { text: "A) Sí, tengo experiencia en la reparación y mejora de equipos informáticos.", answer: "hA" },
            { text: "B) No, pero he investigado cómo se hacen estas tareas.", answer: "hB" },
            { text: "C) No, no tengo experiencia ni interés en estas actividades.", answer: "hC" }
        ]
    },
    {
        numb: 18,
        question: "¿Eres curioso/a sobre cómo se construyen y conectan los componentes del hardware?",
        options: [
            { text: "A) Sí, tengo una gran curiosidad sobre cómo se construyen y conectan los componentes del hardware.", answer: "hA" },
            { text: "B) Tal vez, me intriga, pero no profundizo mucho en el tema.", answer: "hB" },
            { text: "C) No, no tengo curiosidad sobre cómo se construyen los componentes del hardware.", answer: "hC" }
        ]
    },
    {
        numb: 19,
        question: "¿Te gustaría aprender a montar y configurar tu propio equipo informático?",
        options: [
            { text: "A) Sí, me gustaría aprender a montar y configurar mi propio equipo informático.", answer: "hA" },
            { text: "B) Únicamente para uso personal, consideraría aprenderlo solo para mi uso personal.", answer: "hB" },
            { text: "C) No, no tengo interés en aprender a montar y configurar equipos informáticos.", answer: "hC" }
        ]
    },
    {
        numb: 20,
        question: "¿Has investigado sobre diferentes dispositivos y sus características técnicas?",
        options: [
            { text: "A) Sí, he investigado y conozco las características técnicas de varios dispositivos.", answer: "hA" },
            { text: "B) Conozco un poco, pero no he profundizado en este tema.", answer: "hB" },
            { text: "C) No, no he investigado sobre dispositivos y sus características técnicas.", answer: "hC" }
        ]
    },
    {
        numb: 21,
        question: "¿Te interesa aprender sobre redes de computadoras y su funcionamiento?",
        options: [
            { text: "A) Sí, estoy entusiasmado/a por aprender sobre redes de computadoras y su funcionamiento.", answer: "rA" },
            { text: "B) Tal vez, me intriga el tema y estoy dispuesto/a a explorarlo.", answer: "rB" },
            { text: "C) No, no tengo interés en aprender sobre redes de computadoras.", answer: "rC" }
        ]
    },
    {
        numb: 22,
        question: "¿Has tenido alguna experiencia configurando o solucionando problemas de redes?",
        options: [
            { text: "A) Sí, tengo experiencia en configurar y solucionar problemas de redes.", answer: "rA" },
            { text: "B) Tengo conocimiento teórico, pero no experiencia práctica.", answer: "rB" },
            { text: "C) No, no tengo experiencia ni conocimiento en este campo.", answer: "rC" }
        ]
    },
    {
        numb: 23,
        question: "¿Eres curioso/a sobre cómo se conectan y comunican los dispositivos en red?",
        options: [
            { text: "A) Sí, tengo una gran curiosidad sobre cómo se conectan y comunican los dispositivos en una red.", answer: "rA" },
            { text: "B) Tal vez, me intriga, pero no he profundizado en el tema.", answer: "rB" },
            { text: "C) No, no tengo curiosidad sobre este aspecto de la tecnología.", answer: "rC" }
        ]
    },
    {
        numb: 24,
        question: "¿Te gustaría aprender a diseñar y mantener redes informáticas eficientes?",
        options: [
            { text: "A) Sí, me gustaría aprender a diseñar y mantener redes informáticas de manera eficiente.", answer: "rA" },
            { text: "B) Solo por pasatiempo, consideraría aprenderlo como un hobby.", answer: "rB" },
            { text: "C) No, no tengo interés en aprender sobre diseño y mantenimiento de redes informáticas.", answer: "rC" }
        ]
    },
    {
        numb: 25,
        question: "¿Has investigado sobre diferentes protocolos y tecnologías de red?",
        options: [
            { text: "A) Sí, he investigado y tengo conocimiento sobre diferentes protocolos y tecnologías de red.", answer: "rA" },
            { text: "B) Me han proporcionado información al respecto, pero no he profundizado en el tema.", answer: "rB" },
            { text: "C) No, no he investigado sobre protocolos y tecnologías de red.", answer: "rC" }
        ]
    }
];

// ... (código de manejo de puntajes y funciones relacionadas)
