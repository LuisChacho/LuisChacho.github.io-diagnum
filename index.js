// BANCO DE REACTIVOS DE RAZONAMIENTO NUMÉRICO (20 PREGUNTAS)
const RAW_QUESTIONS = [
    { id: 1, category: "Expresiones y Potenciación", stem: "Simplifica la siguiente expresión numérica: $$\\sqrt{\\frac{2^6 \\times 5^3}{5 \\times 2^2}}$$ ", options: [{ id: "a", text: "$$20$$", correct: true }, { id: "b", text: "$$10$$", correct: false }, { id: "c", text: "$$40$$", correct: false }, { id: "d", text: "$$25$$", correct: false }], explanation: "Aplicamos propiedades de potencias: $$\\frac{2^6}{2^2} = 2^{6-2} = 2^4$$ y $$\\frac{5^3}{5^1} = 5^{3-1} = 5^2$$. Luego: $$\\sqrt{2^4 \\times 5^2} = \\sqrt{16 \\times 25} = \\sqrt{400} = 20$$." },
    { id: 2, category: "Expresiones y Radicación", stem: "Calcula el valor numérico exacto de: $$\\frac{3^4 - 2^5}{\\sqrt{144} + \\sqrt[3]{125}}$$", options: [{ id: "a", text: "$$\\frac{49}{17}$$", correct: true }, { id: "b", text: "$$\\frac{49}{12}$$", correct: false }, { id: "c", text: "$$\\frac{51}{17}$$", correct: false }, { id: "d", text: "$$3$$", correct: false }], explanation: "Evaluamos: $3^4 = 81$, $2^5 = 32 \\implies 81 - 32 = 49$. En el denominador: $\\sqrt{144} = 12$, $\\sqrt[3]{125} = 5 \\implies 12 + 5 = 17$. El resultado es $\\frac{49}{17}$." },
    { id: 3, category: "Expresiones y Operaciones", stem: "Evalúa la siguiente expresión simplificada: $$\\left( \\frac{1}{2} \\right)^{-2} + \\sqrt{81} \\times 2^{-1}$$", options: [{ id: "a", text: "$$8.50$$", correct: true }, { id: "b", text: "$$6.50$$", correct: false }, { id: "c", text: "$$4.50$$", correct: false }, { id: "d", text: "$$9.00$$", correct: false }], explanation: "Recordamos exponentes negativos: $(1/2)^{-2} = 2^2 = 4$. Luego: $\\sqrt{81} = 9$ y $2^{-1} = 0.5$. La expresión queda: $4 + (9 \\times 0.5) = 4 + 4.5 = 8.50$." },
    { id: 4, category: "Proporcionalidad Compuesta", stem: "Una imprenta con 6 máquinas idénticas produce 3,600 cuadernos trabajando 8 horas diarias durante 5 días. ¿Cuántas horas diarias deberán trabajar 10 máquinas similares para producir 9,000 cuadernos en 6 días?", options: [{ id: "a", text: "$$10.00\\text{ horas}$$", correct: true }, { id: "b", text: "$$8.00\\text{ horas}$$", correct: false }, { id: "c", text: "$$12.00\\text{ horas}$$", correct: false }, { id: "d", text: "$$9.50\\text{ horas}$$", correct: false }], explanation: "Planteamos la regla de tres compuesta para horas diarias ($h$):\n$$h = 8 \\times \\left(\\frac{6}{10}\\right) \\times \\left(\\frac{9000}{3600}\\right) \\times \\left(\\frac{5}{6}\\right) = 10.00\\text{ horas/día}$$." },
    { id: 5, category: "Porcentajes y Aumentos", stem: "Un servicio en la nube aplica dos incrementos sucesivos de tarifa por mantenimiento: primero un 15% y luego un 20% sobre la nueva tarifa. ¿Cuál es el porcentaje de incremento total cobrado?", options: [{ id: "a", text: "$$38.00\\%$$", correct: true }, { id: "b", text: "$$35.00\\%$$", correct: false }, { id: "c", text: "$$40.00\\%$$", correct: false }, { id: "d", text: "$$37.50\\%$$", correct: false }], explanation: "Multiplicamos los factores multiplicativos: $(1 + 0.15) \\times (1 + 0.20) = 1.15 \\times 1.20 = 1.38$. Restamos la base ($1.38 - 1 = 0.38$), lo que representa un incremento único del $38.00\\%$." },
    { id: 6, category: "Fracciones y Repartos", stem: "Un servidor distribuye su capacidad de almacenamiento: la mitad se asigna a bases de datos, $\\frac{1}{3}$ del resto a archivos temporales y quedan 400 GB libres. ¿Cuál es la capacidad total del servidor?", options: [{ id: "a", text: "$$1200\\text{ GB}$$", correct: true }, { id: "b", text: "$$800\\text{ GB}$$", correct: false }, { id: "c", text: "$$1600\\text{ GB}$$", correct: false }, { id: "d", text: "$$2400\\text{ GB}$$", correct: false }], explanation: "Sea $C$ la capacidad total. BD toma $\\frac{1}{2}C$, restando $\\frac{1}{2}C$. Archivos toma $\\frac{1}{3} \\times \\frac{1}{2}C = \\frac{1}{6}C$. Queda libre: $C - \\left(\\frac{1}{2}C + \\frac{1}{6}C\\right) = \\frac{1}{3}C$. Si $\\frac{1}{3}C = 400\\text{ GB} \\implies C = 1200\\text{ GB}$." },
    { id: 7, category: "Problemas de Edades", stem: "La edad actual de Sofía es el triple de la edad de su sobrino Mateo. Dentro de 12 años, la edad de Sofía será el doble de la de Mateo. ¿Qué edad tiene Sofía actualmente?", options: [{ id: "a", text: "$$36\\text{ años}$$", correct: true }, { id: "b", text: "$$12\\text{ años}$$", correct: false }, { id: "c", text: "$$45\\text{ años}$$", correct: false }, { id: "d", text: "$$24\\text{ años}$$", correct: false }], explanation: "Sea $m$ la edad de Mateo. Sofía tiene $3m$. En 12 años: $3m + 12 = 2(m + 12) \\implies 3m + 12 = 2m + 24 \\implies m = 12$. La edad actual de Sofía es $3(12) = 36\\text{ años}$." },
    { id: 8, category: "Sistemas de Ecuaciones", stem: "Un departamento de TI adquiere 15 equipos entre Laptops y Tablets por un total de $\\$13,500$. Si cada Laptop costó $\\$1,100$ y cada Tablet $\\$600$, ¿cuántas Laptops se compraron?", options: [{ id: "a", text: "$$9$$", correct: true }, { id: "b", text: "$$6$$", correct: false }, { id: "c", text: "$$8$$", correct: false }, { id: "d", text: "$$10$$", correct: false }], explanation: "Sean $L$ y $T$ laptops y tablets: $L + T = 15 \\implies T = 15 - L$.\nEcuación de costos: $1100L + 600(15 - L) = 13500 \\implies 500L = 4500 \\implies L = 9$." },
    { id: 9, category: "Agilidad Lógica (Visual)", stem: "Si $2a + 3b = 18$ y $b = 4$, determine el valor exacto de la expresión $\\frac{a^2 + 5}{3}$.", options: [{ id: "a", text: "$$4.67$$", correct: true }, { id: "b", text: "$$3.00$$", correct: false }, { id: "c", text: "$$7.00$$", correct: false }, { id: "d", text: "$$5.33$$", correct: false }], explanation: "Sustituimos $b = 4$: $2a + 3(4) = 18 \\implies 2a = 6 \\implies a = 3$. Sustituimos en la expresión: $\\frac{3^2 + 5}{3} = \\frac{14}{3} \\approx 4.67$." },
    { id: 10, category: "Planteo de Ecuaciones", stem: "El perímetro de una sala de conferencias rectangular es de 64 metros. Si el largo excede al ancho en 8 metros, ¿cuál es el área de la sala?", options: [{ id: "a", text: "$$240.00\\text{ m}^2$$", correct: true }, { id: "b", text: "$$256.00\\text{ m}^2$$", correct: false }, { id: "c", text: "$$192.00\\text{ m}^2$$", correct: false }, { id: "d", text: "$$280.00\\text{ m}^2$$", correct: false }], explanation: "Sea $x$ el ancho. Largo $= x + 8$. Perímetro $2(x + x + 8) = 64 \\implies 4x + 16 = 64 \\implies x = 12\\text{ m}$. Ancho $= 12\\text{ m}$, Largo $= 20\\text{ m}$. Área $= 12 \\times 20 = 240.00\\text{ m}^2$." },
    { id: 11, category: "Agilidad Lógica", stem: "Dada la relación $P = \\frac{2K}{1 + M}$, descarte opciones y calcule $M$ cuando $P = 8$ y $K = 20$.", options: [{ id: "a", text: "$$4.00$$", correct: true }, { id: "b", text: "$$3.50$$", correct: false }, { id: "c", text: "$$5.00$$", correct: false }, { id: "d", text: "$$2.00$$", correct: false }], explanation: "Sustituimos valores: $8 = \\frac{2(20)}{1 + M} \\implies 8(1 + M) = 40 \\implies 1 + M = 5 \\implies M = 4.00$." },
    { id: 12, category: "Problemas de Mezclas/Costos", stem: "Un comerciante mezcla 20 kg de café tipo A de $\\$8$/kg con 30 kg de café tipo B de $\\$13$/kg. ¿A qué precio por kg debe vender la mezcla para ganar el 20% sobre el costo total?", options: [{ id: "a", text: "$$\\$13.20$$", correct: true }, { id: "b", text: "$$\\$11.00$$", correct: false }, { id: "c", text: "$$\\$12.50$$", correct: false }, { id: "d", text: "$$\\$14.00$$", correct: false }], explanation: "Costo total $= (20 \\times 8) + (30 \\times 13) = \\$550$. Peso $= 50\\text{ kg}$. Costo por kg $= \\frac{550}{50} = \\$11$/kg. Precio con $20\\%$ de ganancia $= 11 \\times 1.20 = \\$13.20$." },
    { id: 13, category: "Agilidad Lógica", stem: "Si a la mitad del quíntuple de un número se le resta 7, se obtiene 18. ¿Cuál es la tercera parte de dicho número?", options: [{ id: "a", text: "$$3.33$$", correct: true }, { id: "b", text: "$$10.00$$", correct: false }, { id: "c", text: "$$5.00$$", correct: false }, { id: "d", text: "$$2.50$$", correct: false }], explanation: "Planteo: $\\frac{5x}{2} - 7 = 18 \\implies \\frac{5x}{2} = 25 \\implies x = 10$. La tercera parte de 10 es $\\frac{10}{3} \\approx 3.33$." },
    { id: 14, category: "Trabajo Compartido", stem: "El Operario A realiza un ensamblaje en 4 horas, mientras el Operario B lo realiza en 6 horas. ¿Cuánto tiempo tardarán en completarlo si trabajan juntos?", options: [{ id: "a", text: "$$2.40\\text{ horas}$$", correct: true }, { id: "b", text: "$$5.00\\text{ horas}$$", correct: false }, { id: "c", text: "$$2.50\\text{ horas}$$", correct: false }, { id: "d", text: "$$3.00\\text{ horas}$$", correct: false }], explanation: "Sumamos tasas de trabajo: $\\frac{1}{4} + \\frac{1}{6} = \\frac{5}{12}$. Tiempo total $T = \\frac{12}{5} = 2.40\\text{ horas}$." },
    { id: 15, category: "Planteo de Ecuaciones", stem: "En una empresa, el presupuesto de MKT es el doble que el de RH, y Operaciones es $\\$5,000$ mayor que MKT. Si el total es $\\$45,000$, ¿cuál es el presupuesto de Operaciones?", options: [{ id: "a", text: "$$\\$21,000$$", correct: true }, { id: "b", text: "$$\\$16,000$$", correct: false }, { id: "c", text: "$$\\$8,000$$", correct: false }, { id: "d", text: "$$\\$25,000$$", correct: false }], explanation: "Sea $RH = x \\implies MKT = 2x \\implies OP = 2x + 5000$.\nSuma: $x + 2x + (2x + 5000) = 45000 \\implies 5x = 40000 \\implies x = 8000$.\nOperaciones $= 2(8000) + 5000 = \\$21,000$." },
    { id: 16, category: "Probabilidad Simple", stem: "En una urna hay 8 bolas rojas, 5 azules y 7 verdes. Si se extrae una bola al azar, ¿cuál es la probabilidad de que NO sea azul?", options: [{ id: "a", text: "$$0.75$$", correct: true }, { id: "b", text: "$$0.25$$", correct: false }, { id: "c", text: "$$0.60$$", correct: false }, { id: "d", text: "$$0.40$$", correct: false }], explanation: "Total bolas $= 20$. Bolas no azules $= 8 + 7 = 15$.\nProbabilidad $= \\frac{15}{20} = 0.75$." },
    { id: 17, category: "Combinatoria Básica", stem: "Un comité de calidad debe elegir 3 analistas a partir de un grupo de 7 candidatos disponibles. ¿Cuántas combinaciones únicas de comités se pueden formar?", options: [{ id: "a", text: "$$35$$", correct: true }, { id: "b", text: "$$210$$", correct: false }, { id: "c", text: "$$21$$", correct: false }, { id: "d", text: "$$42$$", correct: false }], explanation: "Fórmula de combinaciones $C(7,3) = \\frac{7 \\times 6 \\times 5}{3 \\times 2 \\times 1} = 35$." },
    { id: 18, category: "Permutaciones Elementales", stem: "¿De cuántas formas distintas pueden organizarse 5 ejecutivos en una fila de sillas para una foto corporativa?", options: [{ id: "a", text: "$$120$$", correct: true }, { id: "b", text: "$$25$$", correct: false }, { id: "c", text: "$$60$$", correct: false }, { id: "d", text: "$$720$$", correct: false }], explanation: "Calculamos el factorial del número de elementos ($5!$):\n$$5! = 5 \\times 4 \\times 3 \\times 2 \\times 1 = 120$$." },
    { id: 19, category: "Probabilidad Compuesta", stem: "Se lanza una moneda justa y un dado estándar de 6 caras simultáneamente. ¿Cuál es la probabilidad de obtener 'Cara' en la moneda y un número impar en el dado?", options: [{ id: "a", text: "$$0.25$$", correct: true }, { id: "b", text: "$$0.50$$", correct: false }, { id: "c", text: "$$0.16$$", correct: false }, { id: "d", text: "$$0.33$$", correct: false }], explanation: "Eventos independientes: $P(\\text{Cara}) = 0.5$, $P(\\text{Impar}) = 0.5$.\n$P(\\text{Ambos}) = 0.5 \\times 0.5 = 0.25$." },
    { id: 20, category: "Combinatoria y Regla del Producto", stem: "Una contraseña corporativa consta de 2 letras distintas entre {A, B, C} seguidas de 2 dígitos distintos entre {1, 2, 3}. ¿Cuántas contraseñas únicas se pueden crear?", options: [{ id: "a", text: "$$36$$", correct: true }, { id: "b", text: "$$18$$", correct: false }, { id: "c", text: "$$81$$", correct: false }, { id: "d", text: "$$24$$", correct: false }], explanation: "Letras (sin repetición): $3 \\times 2 = 6$. Dígitos (sin repetición): $3 \\times 2 = 6$. Regla del producto: $6 \\times 6 = 36$." }
];

let state = { sessionId: "", currentIndex: 0, answers: {}, shuffledQuestions: [] };

function shuffleArray(array) {
    let arr = JSON.parse(JSON.stringify(array));
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

function initSession() {
    let hash = window.location.hash.replace('#', '');
    if (!hash || !hash.startsWith('session-raznum-')) {
        const newId = 'session-raznum-' + Math.random().toString(36).substring(2, 9);
        window.location.hash = newId;
        state.sessionId = newId;
    } else {
        state.sessionId = hash;
    }

    document.getElementById('session-badge').innerText = `ID Sesión: ${state.sessionId}`;

    const savedData = sessionStorage.getItem(state.sessionId);
    if (savedData) {
        try {
            const parsed = JSON.parse(savedData);
            state.answers = parsed.answers || {};
            state.currentIndex = parsed.currentIndex || 0;
            state.shuffledQuestions = parsed.shuffledQuestions || prepareQuestions();
            showAppScreen();
            return;
        } catch(e) {}
    }

    state.shuffledQuestions = prepareQuestions();
    saveState();
}

function prepareQuestions() {
    return RAW_QUESTIONS.map(q => {
        let copy = JSON.parse(JSON.stringify(q));
        copy.options = shuffleArray(copy.options);
        return copy;
    });
}

function saveState() {
    try {
        sessionStorage.setItem(state.sessionId, JSON.stringify({
            answers: state.answers,
            currentIndex: state.currentIndex,
            shuffledQuestions: state.shuffledQuestions
        }));
    } catch (e) {}
}

function renderMatrix() {
    const container = document.getElementById('question-matrix');
    container.innerHTML = '';

    state.shuffledQuestions.forEach((q, idx) => {
        const btn = document.createElement('button');
        btn.className = `h-10 text-sm font-bold rounded-lg border transition-all flex items-center justify-center `;
        
        const isCurrent = idx === state.currentIndex;
        const userAnswer = state.answers[idx];

        if (userAnswer !== undefined) {
            const isCorrect = q.options.find(o => o.id === userAnswer)?.correct;
            btn.classList.add(isCorrect ? 'bg-emerald-600' : 'bg-rose-600', 'text-white', 'border-transparent');
        } else {
            btn.classList.add('bg-white', 'text-slate-700', 'border-slate-300', 'hover:bg-slate-100');
        }

        if (isCurrent) btn.classList.add('ring-2', 'ring-slate-900', 'ring-offset-2');

        btn.innerText = idx + 1;
        btn.addEventListener('click', () => {
            state.currentIndex = idx;
            saveState();
            renderQuestion();
            renderMatrix();
        });
        container.appendChild(btn);
    });

    const total = state.shuffledQuestions.length;
    const answered = Object.keys(state.answers).length;
    const pct = Math.round((answered / total) * 100);
    document.getElementById('progress-bar').style.width = `${pct}%`;
    document.getElementById('progress-percent').innerText = `${pct}%`;
    document.getElementById('answered-count').innerText = `Respondidas: ${answered}/${total}`;
}

function renderQuestion() {
    const q = state.shuffledQuestions[state.currentIndex];
    document.getElementById('item-category').innerText = q.category;
    document.getElementById('item-number').innerText = `Reactivo ${state.currentIndex + 1} de ${state.shuffledQuestions.length}`;
    
    const stemEl = document.getElementById('item-stem');
    stemEl.innerHTML = q.stem;

    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';

    const answered = state.answers[state.currentIndex] !== undefined;
    const selectedOptId = state.answers[state.currentIndex];

    q.options.forEach((opt) => {
        const optBtn = document.createElement('button');
        optBtn.className = `w-full text-left p-4 rounded-xl border transition-all duration-150 flex items-center justify-between text-slate-800 `;

        if (!answered) {
            optBtn.classList.add('border-slate-200', 'hover:border-slate-400', 'hover:shadow-md', 'bg-white');
            optBtn.addEventListener('click', () => selectAnswer(opt.id));
        } else {
            optBtn.disabled = true;
            if (opt.id === selectedOptId) {
                optBtn.classList.add(opt.correct ? 'border-emerald-500' : 'border-rose-500', opt.correct ? 'bg-emerald-50' : 'bg-rose-50', 'font-semibold');
            } else if (opt.correct) {
                optBtn.classList.add('border-emerald-300', 'bg-emerald-50/50');
            } else {
                optBtn.classList.add('border-slate-200', 'opacity-60', 'bg-white');
            }
        }

        optBtn.innerHTML = `<div>${opt.text}</div>`;
        optionsContainer.appendChild(optBtn);
    });

    if (window.renderMathInElement) {
        renderMathInElement(stemEl, { delims: [{left: "$$", right: "$$", display: true}, {left: "$", right: "$", display: false}] });
        renderMathInElement(optionsContainer, { delims: [{left: "$$", right: "$$", display: true}, {left: "$", right: "$", display: false}] });
    }

    const feedbackPanel = document.getElementById('feedback-panel');
    if (answered) {
        const isCorrect = q.options.find(o => o.id === selectedOptId)?.correct;
        const statusEl = document.getElementById('feedback-status');
        const textEl = document.getElementById('feedback-text');

        statusEl.innerText = isCorrect ? '¡RESPUESTA CORRECTA!' : 'RESPUESTA INCORRECTA';
        statusEl.className = isCorrect ? 'font-bold text-sm tracking-wide text-emerald-400' : 'font-bold text-sm tracking-wide text-rose-400';

        textEl.innerHTML = q.explanation;
        if (window.renderMathInElement) {
            renderMathInElement(textEl, { delims: [{left: "$$", right: "$$", display: true}, {left: "$", right: "$", display: false}] });
        }
        feedbackPanel.classList.remove('hidden');
    } else {
        feedbackPanel.classList.add('hidden');
    }

    document.getElementById('btn-prev').disabled = state.currentIndex === 0;
    document.getElementById('btn-prev').style.opacity = state.currentIndex === 0 ? '0.5' : '1';
    document.getElementById('btn-next').disabled = state.currentIndex === state.shuffledQuestions.length - 1;
    document.getElementById('btn-next').style.opacity = state.currentIndex === state.shuffledQuestions.length - 1 ? '0.5' : '1';
}

function selectAnswer(optId) {
    state.answers[state.currentIndex] = optId;
    saveState();
    renderQuestion();
    renderMatrix();
}

function showAppScreen() {
    document.getElementById('welcome-screen').classList.add('hidden');
    document.getElementById('results-screen').classList.add('hidden');
    document.getElementById('app-dashboard').classList.remove('hidden');
    renderMatrix();
    renderQuestion();
}

function finishAssessment() {
    document.getElementById('app-dashboard').classList.add('hidden');
    document.getElementById('results-screen').classList.remove('hidden');

    let correctCount = 0;
    state.shuffledQuestions.forEach((q, idx) => {
        const userAns = state.answers[idx];
        if (userAns !== undefined && q.options.find(o => o.id === userAns)?.correct) correctCount++;
    });

    const total = state.shuffledQuestions.length;
    const pct = Math.round((correctCount / total) * 100);

    document.getElementById('final-score-percent').innerText = `${pct}%`;
    document.getElementById('final-correct').innerText = `${correctCount} / ${total}`;
    document.getElementById('final-incorrect').innerText = `${total - correctCount} / ${total}`;

    const evalEl = document.getElementById('pedagogical-eval');
    if (pct >= 85) {
        evalEl.innerText = "Excelente desempeño. Demuestra una alta agilidad mental, dominio avanzado de relaciones numéricas y rapidez para estructurar problemas matemáticos complejos sin dependencia de patrones memorizados.";
    } else if (pct >= 65) {
        evalEl.innerText = "Buen nivel de razonamiento numérico. Resuelve con solvencia ejercicios de proporcionalidad y ecuaciones básicas, aunque se sugiere reforzar el análisis rápido en combinatoria y simplificación de expresiones.";
    } else {
        evalEl.innerText = "Se recomienda reforzar la traducción de lenguaje cotidiano a modelos algebraicomáticos y repasar propiedades fundamentales de exponentes, fracciones y probabilidades básicas.";
    }
}

function resetAssessment() {
    sessionStorage.removeItem(state.sessionId);
    const newId = 'session-raznum-' + Math.random().toString(36).substring(2, 9);
    window.location.hash = newId;
    state.sessionId = newId;
    state.currentIndex = 0;
    state.answers = {};
    state.shuffledQuestions = prepareQuestions();
    saveState();

    document.getElementById('results-screen').classList.add('hidden');
    document.getElementById('welcome-screen').classList.remove('hidden');
    document.getElementById('session-badge').innerText = `ID Sesión: ${state.sessionId}`;
}

document.addEventListener('DOMContentLoaded', () => {
    initSession();
    document.getElementById('btn-start').addEventListener('click', showAppScreen);
    document.getElementById('btn-finish').addEventListener('click', finishAssessment);
    document.getElementById('btn-reset').addEventListener('click', resetAssessment);

    document.getElementById('btn-prev').addEventListener('click', () => {
        if (state.currentIndex > 0) {
            state.currentIndex--;
            saveState();
            renderQuestion();
            renderMatrix();
        }
    });

    document.getElementById('btn-next').addEventListener('click', () => {
        if (state.currentIndex < state.shuffledQuestions.length - 1) {
            state.currentIndex++;
            saveState();
            renderQuestion();
            renderMatrix();
        }
    });
});