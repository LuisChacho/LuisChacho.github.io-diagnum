// BANCO DE REACTIVOS DE RAZONAMIENTO NUMÉRICO
const rawQuestions = [
    // Expresiones (1-3)
    {
        cat: "Expresiones",
        q: "Simplifique la siguiente expresión numérica: $$\\sqrt{2^6 \\cdot 3^2} + \\frac{2^4}{2^2}$$",
        options: [
            { text: "28", correct: true },
            { text: "24", correct: false },
            { text: "32", correct: false },
            { text: "20", correct: false }
        ],
        explanation: "1. Simplificamos la raíz: $$\\sqrt{2^6 \\cdot 3^2} = 2^3 \\cdot 3 = 8 \\cdot 3 = 24$$.\n2. Simplificamos la fracción: $$\\frac{2^4}{2^2} = 2^{4-2} = 2^2 = 4$$.\n3. Sumamos: $$24 + 4 = 28$$."
    },
    {
        cat: "Expresiones",
        q: "Calcule el valor exacto de: $$\\left( \\frac{3}{2} \\right)^3 \\cdot \\frac{4}{9} - \\frac{1}{2}$$",
        options: [
            { text: "1.00", correct: true },
            { text: "0.75", correct: false },
            { text: "1.25", correct: false },
            { text: "0.50", correct: false }
        ],
        explanation: "1. Desarrollamos la potencia: $$\\left(\\frac{3}{2}\\right)^3 = \\frac{27}{8}$$.\n2. Multiplicamos: $$\\frac{27}{8} \\cdot \\frac{4}{9} = \\frac{27 \\cdot 4}{8 \\cdot 9} = \\frac{3}{2}$$.\n3. Restamos: $$\\frac{3}{2} - \\frac{1}{2} = \\frac{2}{2} = 1.00$$."
    },
    {
        cat: "Expresiones",
        q: "Determine el resultado final de: $$\\frac{5^3 \\cdot 5^{-1}}{5^2} + \\sqrt[3]{27}$$",
        options: [
            { text: "4", correct: true },
            { text: "5", correct: false },
            { text: "8", correct: false },
            { text: "6", correct: false }
        ],
        explanation: "1. Aplicamos propiedades de exponentes en el numerador: $$5^3 \\cdot 5^{-1} = 5^2$$.\n2. Dividimos: $$\\frac{5^2}{5^2} = 1$$.\n3. Calculamos la raíz cúbica: $$\\sqrt[3]{27} = 3$$.\n4. Sumamos: $$1 + 3 = 4$$."
    },

    // Proporcionalidad y Fracciones (4-6)
    {
        cat: "Proporcionalidad y Fracciones",
        q: "Tres impresoras industriales procesan 1200 páginas en 4 minutos. ¿Cuántas páginas procesarán 5 impresoras de igual rendimiento en 6 minutos?",
        options: [
            { text: "3000", correct: true },
            { text: "2500", correct: false },
            { text: "3600", correct: false },
            { text: "2800", correct: false }
        ],
        explanation: "Regla de tres compuesta:\n$$\\frac{\\text{Impresoras}_1 \\cdot \\text{Tiempo}_1}{\\text{Páginas}_1} = \\frac{\\text{Impresoras}_2 \\cdot \\text{Tiempo}_2}{\\text{Páginas}_2}$$\n$$\\frac{3 \\cdot 4}{1200} = \\frac{5 \\cdot 6}{x} \\implies \\frac{12}{1200} = \\frac{30}{x} \\implies x = \\frac{30 \\cdot 1200}{12} = 3000$$."
    },
    {
        cat: "Proporcionalidad y Fracciones",
        q: "Un producto tecnológico de $800 recibe un descuento sucesivo del 10% y posteriormente del 20%. ¿Cuál es el precio final?",
        options: [
            { text: "$576.00", correct: true },
            { text: "$560.00", correct: false },
            { text: "$600.00", correct: false },
            { text: "$592.00", correct: false }
        ],
        explanation: "1. Primer descuento (10%): $$800 \\cdot 0.90 = 720$$.\n2. Segundo descuento (20% sobre el saldo): $$720 \\cdot 0.80 = 576.00$$."
    },
    {
        cat: "Proporcionalidad y Fracciones",
        q: "Un depósito contiene agua hasta los $$\\frac{3}{5}$$ de su capacidad. Si se extraen 30 litros, la capacidad disminuye a los $$\\frac{1}{2}$$. ¿Cuál es la capacidad total en litros?",
        options: [
            { text: "300", correct: true },
            { text: "250", correct: false },
            { text: "350", correct: false },
            { text: "200", correct: false }
        ],
        explanation: "Planteamos la ecuación: $$\\frac{3}{5}C - 30 = \\frac{1}{2}C$$\n$$\\frac{3}{5}C - \\frac{1}{2}C = 30 \\implies \\left(\\frac{6 - 5}{10}\\right)C = 30 \\implies \\frac{1}{10}C = 30 \\implies C = 300$$ litros."
    },

    // Ecuaciones, Edades y Planteos (7-15)
    {
        cat: "Ecuaciones y Edades",
        q: "La edad actual de Pedro es el triple de la edad de Juan. Dentro de 10 años, la edad de Pedro será el doble de la de Juan. ¿Qué edad tiene Pedro actualmente?",
        options: [
            { text: "30", correct: true },
            { text: "25", correct: false },
            { text: "35", correct: false },
            { text: "40", correct: false }
        ],
        explanation: "Sean $$P$$ y $$J$$ sus edades actuales.\n1. $$P = 3J$$\n2. Dentro de 10 años: $$P + 10 = 2(J + 10)$$\nSustituyendo $$P$$: $$3J + 10 = 2J + 20 \\implies J = 10$$\nPor lo tanto, Pedro tiene $$P = 3(10) = 30$$ años."
    },
    {
        cat: "Ecuaciones y Edades",
        q: "Un comerciante compró un total de 20 artículos entre cuadernos y bolígrafos por $45. Si cada cuaderno cuesta $3 y cada bolígrafo $2, ¿cuántos cuadernos compró?",
        options: [
            { text: "5", correct: true },
            { text: "8", correct: false },
            { text: "10", correct: false },
            { text: "12", correct: false }
        ],
        explanation: "Sea $$x$$ el número de cuadernos e $$y$$ los bolígrafos.\n1. $$x + y = 20 \\implies y = 20 - x$$\n2. $$3x + 2y = 45$$\nSustituyendo: $$3x + 2(20 - x) = 45 \\implies 3x + 40 - 2x = 45 \\implies x = 5$$ cuadernos."
    },
    {
        cat: "Ecuaciones y Edades",
        q: "Si al doble de un número se le resta 15, se obtiene el mismo número aumentado en 10. ¿Cuál es la mitad de dicho número?",
        options: [
            { text: "12.50", correct: true },
            { text: "25.00", correct: false },
            { text: "15.00", correct: false },
            { text: "10.00", correct: false }
        ],
        explanation: "Planteamos: $$2x - 15 = x + 10 \\implies 2x - x = 25 \\implies x = 25$$.\nLa mitad del número es $$\\frac{25}{2} = 12.50$$."
    },
    {
        cat: "Ecuaciones y Edades",
        q: "En una empresa de software, la suma de los salarios de un desarrollador Junior y uno Senior es de $5000. Si el Senior gana $1400 más que el Junior, ¿cuál es el sueldo del Junior?",
        options: [
            { text: "$1800", correct: true },
            { text: "$2000", correct: false },
            { text: "$1600", correct: false },
            { text: "$2200", correct: false }
        ],
        explanation: "Sean $$S$$ (Senior) y $$J$$ (Junior).\n1. $$S + J = 5000$$\n2. $$S = J + 1400$$\nSustituyendo: $$(J + 1400) + J = 5000 \\implies 2J = 3600 \\implies J = 1800$$."
    },
    {
        cat: "Ecuaciones y Edades",
        q: "Hace 5 años, María tenía la mitad de la edad que tendrá dentro de 7 años. ¿Cuál es la edad actual de María?",
        options: [
            { text: "17", correct: true },
            { text: "19", correct: false },
            { text: "15", correct: false },
            { text: "21", correct: false }
        ],
        explanation: "Sea $$M$$ la edad actual.\n$$M - 5 = \\frac{M + 7}{2} \\implies 2(M - 5) = M + 7 \\implies 2M - 10 = M + 7 \\implies M = 17$$ años."
    },
    {
        cat: "Ecuaciones y Edades",
        q: "Un servitramite cobró un total de $120 por atender a 15 clientes. Si algunos trámites eran estándar ($5) y otros complejos ($10), ¿cuántos clientes realizaron trámites complejos?",
        options: [
            { text: "9", correct: true },
            { text: "6", correct: false },
            { text: "8", correct: false },
            { text: "10", correct: false }
        ],
        explanation: "Sea $$c$$ clientes de trámites complejos y $$e$$ estándar.\n1. $$e + c = 15 \\implies e = 15 - c$$\n2. $$5e + 10c = 120 \\implies 5(15 - c) + 10c = 120 \\implies 75 + 5c = 120 \\implies 5c = 45 \\implies c = 9$$."
    },
    {
        cat: "Ecuaciones y Edades",
        q: "¿Cuál es el número que sumado con su triple y disminuido en 8 da como resultado 32?",
        options: [
            { text: "10", correct: true },
            { text: "8", correct: false },
            { text: "12", correct: false },
            { text: "14", correct: false }
        ],
        explanation: "Planteamiento: $$x + 3x - 8 = 32 \\implies 4x = 40 \\implies x = 10$$."
    },
    {
        cat: "Ecuaciones y Edades",
        q: "Ana tiene el doble de dinero que Beatriz. Si Ana le da $20 a Beatriz, ambas tendrán la misma cantidad. ¿Cuánto dinero tenía Ana al principio?",
        options: [
            { text: "$80", correct: true },
            { text: "$60", correct: false },
            { text: "$100", correct: false },
            { text: "$40", correct: false }
        ],
        explanation: "Sea $$B$$ el dinero de Beatriz y $$A = 2B$$ el de Ana.\n$$A - 20 = B + 20 \\implies 2B - 20 = B + 20 \\implies B = 40$$.\nPor lo tanto, Ana tenía $$A = 2(40) = 80$$."
    },
    {
        cat: "Ecuaciones y Edades",
        q: "Tres números enteros consecutivos suman 102. ¿Cuál es el número mayor?",
        options: [
            { text: "35", correct: true },
            { text: "34", correct: false },
            { text: "33", correct: false },
            { text: "36", correct: false }
        ],
        explanation: "Sean los números $$x, x+1, x+2$.\n$$x + (x+1) + (x+2) = 102 \\implies 3x + 3 = 102 \\implies 3x = 99 \\implies x = 33$$.\nEl mayor es $$x + 2 = 35$$."
    },

    // Probabilidad y Combinatoria (16-20)
    {
        cat: "Probabilidad y Combinatoria",
        q: "En una bolsa hay 4 bolas rojas, 5 azules y 3 verdes. ¿Cuál es la probabilidad de extraer una bola azul al azar?",
        options: [
            { text: "\\frac{5}{12}", correct: true },
            { text: "\\frac{1}{3}", correct: false },
            { text: "\\frac{5}{7}", correct: false },
            { text: "\\frac{1}{4}", correct: false }
        ],
        explanation: "Total de bolas: $$4 + 5 + 3 = 12$$.\nCasos favorables (azules): 5.\nProbabilidad: $$P = \\frac{5}{12}$$."
    },
    {
        cat: "Probabilidad y Combinatoria",
        q: "¿De cuántas formas distintas se pueden sentar 4 personas en una fila de 4 sillas?",
        options: [
            { text: "24", correct: true },
            { text: "12", correct: false },
            { text: "16", correct: false },
            { text: "4", correct: false }
        ],
        explanation: "Aplicamos permutación lineal de 4 elementos: $$4! = 4 \\cdot 3 \\cdot 2 \\cdot 1 = 24$$ formas."
    },
    {
        cat: "Probabilidad y Combinatoria",
        q: "Se lanza un dado justo de 6 caras. ¿Cuál es la probabilidad de obtener un número primo?",
        options: [
            { text: "0.50", correct: true },
            { text: "0.33", correct: false },
            { text: "0.67", correct: false },
            { text: "0.25", correct: false }
        ],
        explanation: "Casos posibles: $$\\left\\{1, 2, 3, 4, 5, 6\\right\\}$$ (6 en total).\nNúmeros primos en el dado: $$\\left\\{2, 3, 5\\right\\}$$ (3 casos favorables).\n$$P = \\frac{3}{6} = 0.50$$."
    },
    {
        cat: "Probabilidad y Combinatoria",
        q: "De un grupo de 5 personas, ¿cuántos comités de 2 personas se pueden formar sin importar el orden?",
        options: [
            { text: "10", correct: true },
            { text: "20", correct: false },
            { text: "15", correct: false },
            { text: "5", correct: false }
        ],
        explanation: "Aplicamos la fórmula de Combinatoria $$\\binom{n}{k} = \\frac{n!}{k!(n-k)!}$$:\n$$\\binom{5}{2} = \\frac{5!}{2!3!} = \\frac{5 \\cdot 4}{2 \\cdot 1} = 10$$ comités."
    },
    {
        cat: "Probabilidad y Combinatoria",
        q: "Al lanzar dos monedas simultáneamente al aire, ¿cuál es la probabilidad de obtener al menos una cara?",
        options: [
            { text: "0.75", correct: true },
            { text: "0.50", correct: false },
            { text: "0.25", correct: false },
            { text: "1.00", correct: false }
        ],
        explanation: "Espacio muestral: $$\\left\\{(C,C), (C,X), (X,C), (X,X)\\right\\}$$ (4 casos).\nCasos con al menos una cara: $$\\left\\{(C,C), (C,X), (X,C)\\right\\}$$ (3 casos).\n$$P = \\frac{3}{4} = 0.75$$."
    }
];

// ESTADO DE LA APLICACIÓN
let sessionId = "";
let questions = [];
let userAnswers = {}; // { qIndex: { chosenIndex: number, isCorrect: boolean } }
let currentQuestionIndex = 0;

// ALGORITMO FISHER-YATES (Anti-copia)
function shuffleArray(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

// INICIALIZACIÓN DE LA SESIÓN (URL Hash)
function initSession() {
    let hash = window.location.hash.replace('#', '');
    if (!hash || !hash.startsWith('session-num-')) {
        sessionId = 'session-num-' + Math.random().toString(36).substring(2, 8);
        window.location.hash = sessionId;
    } else {
        sessionId = hash;
    }

    // Cargar preguntas mezclando opciones
    questions = rawQuestions.map(q => ({
        ...q,
        options: shuffleArray(q.options)
    }));

    // Cargar progreso de sessionStorage (Fallback rápido de 800ms)
    const saved = sessionStorage.getItem(sessionId);
    if (saved) {
        try {
            userAnswers = JSON.parse(saved);
        } catch (e) {
            userAnswers = {};
        }
    }

    if (Object.keys(userAnswers).length > 0) {
        showDashboard();
    }
}

function saveProgress() {
    sessionStorage.setItem(sessionId, JSON.stringify(userAnswers));
}

// RENDERING
function renderKaTeX() {
    if (window.renderMathInElement) {
        renderMathInElement(document.body, {
            delimiters: [
                {left: "$$", right: "$$", display: true},
                {left: "$", right: "$", display: false}
            ],
            throwOnError: false
        });
    }
}

function renderMatrix() {
    const grid = document.getElementById('matrix-grid');
    grid.innerHTML = '';
    
    questions.forEach((_, idx) => {
        const btn = document.createElement('button');
        btn.textContent = idx + 1;
        btn.className = `h-10 w-full rounded-lg font-semibold text-sm transition flex items-center justify-center border `;
        
        if (userAnswers[idx] !== undefined) {
            if (userAnswers[idx].isCorrect) {
                btn.className += 'bg-emerald-500 text-white border-emerald-600';
            } else {
                btn.className += 'bg-rose-500 text-white border-rose-600';
            }
        } else {
            btn.className += 'bg-gray-100 text-gray-600 border-gray-200 hover:bg-gray-200';
        }

        if (idx === currentQuestionIndex) {
            btn.className += ' ring-2 ring-blue-600 ring-offset-2';
        }

        btn.addEventListener('click', () => {
            currentQuestionIndex = idx;
            loadQuestion(currentQuestionIndex);
        });

        grid.appendChild(btn);
    });

    // Actualizar barra de progreso
    const answeredCount = Object.keys(userAnswers).length;
    const pct = Math.round((answeredCount / questions.length) * 100);
    document.getElementById('progress-bar').style.width = `${pct}%`;
    document.getElementById('progress-text').textContent = `${pct}% completado (${answeredCount}/${questions.length})`;
}

function loadQuestion(index) {
    currentQuestionIndex = index;
    const q = questions[index];

    document.getElementById('category-badge').textContent = q.cat;
    document.getElementById('question-indicator').textContent = `Reactivo ${index + 1} de ${questions.length}`;
    document.getElementById('question-text').innerHTML = q.q;

    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';

    const isAnswered = userAnswers[index] !== undefined;

    q.options.forEach((opt, optIdx) => {
        const btn = document.createElement('button');
        btn.className = `option-card w-full p-4 text-left rounded-xl border font-medium flex items-center justify-between text-gray-700 `;

        if (isAnswered) {
            btn.disabled = true;
            if (opt.correct) {
                btn.className += 'bg-emerald-50 border-emerald-500 text-emerald-900 font-semibold';
            } else if (userAnswers[index].chosenIndex === optIdx) {
                btn.className += 'bg-rose-50 border-rose-500 text-rose-900 font-semibold';
            } else {
                btn.className += 'bg-gray-50 border-gray-200 opacity-60';
            }
        } else {
            btn.className += 'bg-white border-gray-200 hover:border-blue-500 hover:bg-blue-50/30';
            btn.addEventListener('click', () => selectOption(index, optIdx));
        }

        btn.innerHTML = `<span>${opt.text}</span>`;
        optionsContainer.appendChild(btn);
    });

    // Retroalimentación
    const feedbackPanel = document.getElementById('feedback-panel');
    if (isAnswered) {
        feedbackPanel.classList.remove('hidden');
        document.getElementById('feedback-text').innerHTML = q.explanation;
    } else {
        feedbackPanel.classList.add('hidden');
    }

    renderMatrix();
    renderKaTeX();
}

function selectOption(qIdx, optIdx) {
    const isCorrect = questions[qIdx].options[optIdx].correct;
    userAnswers[qIdx] = { chosenIndex: optIdx, isCorrect };
    saveProgress();
    loadQuestion(qIdx);
}

function showDashboard() {
    document.getElementById('welcome-screen').classList.add('hidden');
    document.getElementById('results-screen').classList.add('hidden');
    document.getElementById('app-dashboard').classList.remove('hidden');
    loadQuestion(currentQuestionIndex);
}

function finishEvaluation() {
    document.getElementById('app-dashboard').classList.add('hidden');
    document.getElementById('results-screen').classList.remove('hidden');

    let correctCount = 0;
    Object.values(userAnswers).forEach(ans => {
        if (ans.isCorrect) correctCount++;
    });

    const total = questions.length;
    const pct = Math.round((correctCount / total) * 100);

    document.getElementById('score-text').textContent = `${correctCount}/${total}`;
    document.getElementById('score-percentage').textContent = `${pct}% de aciertos`;
}

function resetSimulator() {
    sessionStorage.removeItem(sessionId);
    userAnswers = {};
    currentQuestionIndex = 0;
    
    // Generar un nuevo hash e iniciar
    sessionId = 'session-num-' + Math.random().toString(36).substring(2, 8);
    window.location.hash = sessionId;

    document.getElementById('results-screen').classList.add('hidden');
    document.getElementById('welcome-screen').classList.remove('hidden');
}

// ANCLAJE DE EVENTOS
document.addEventListener('DOMContentLoaded', () => {
    initSession();

    document.getElementById('start-btn').addEventListener('click', showDashboard);
    
    document.getElementById('prev-btn').addEventListener('click', () => {
        if (currentQuestionIndex > 0) {
            loadQuestion(currentQuestionIndex - 1);
        }
    });

    document.getElementById('next-btn').addEventListener('click', () => {
        if (currentQuestionIndex < questions.length - 1) {
            loadQuestion(currentQuestionIndex + 1);
        }
    });

    document.getElementById('finish-btn').addEventListener('click', finishEvaluation);
    document.getElementById('reset-btn').addEventListener('click', resetSimulator);
});