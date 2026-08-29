const QUESTION_TIME_LIMIT = 80; // 1 minuto 20 segundos por reactivo

const rawQuestions = [
    {
        cat: "Expresiones",
        q: "Simplifique la siguiente expresión numérica: $$\\sqrt{2^6 \\cdot 3^2} + \\frac{2^4}{2^2}$$",
        options: [{ text: "28", correct: true }, { text: "24", correct: false }, { text: "32", correct: false }, { text: "20", correct: false }],
        explanation: "1. Simplificamos la raíz: $$\\sqrt{2^6 \\cdot 3^2} = 2^3 \\cdot 3 = 8 \\cdot 3 = 24$$.\n2. Simplificamos la fracción: $$\\frac{2^4}{2^2} = 2^{4-2} = 2^2 = 4$$.\n3. Sumamos: $$24 + 4 = 28$$."
    },
    {
        cat: "Expresiones",
        q: "Calcule el valor exacto de: $$\\left( \\frac{3}{2} \\right)^3 \\cdot \\frac{4}{9} - \\frac{1}{2}$$",
        options: [{ text: "1.00", correct: true }, { text: "0.75", correct: false }, { text: "1.25", correct: false }, { text: "0.50", correct: false }],
        explanation: "1. Desarrollamos la potencia: $$\\left(\\frac{3}{2}\\right)^3 = \\frac{27}{8}$$.\n2. Multiplicamos: $$\\frac{27}{8} \\cdot \\frac{4}{9} = \\frac{3}{2}$$.\n3. Restamos: $$\\frac{3}{2} - \\frac{1}{2} = 1.00$$."
    },
    {
        cat: "Expresiones",
        q: "Determine el resultado final de: $$\\frac{5^3 \\cdot 5^{-1}}{5^2} + \\sqrt[3]{27}$$",
        options: [{ text: "4", correct: true }, { text: "5", correct: false }, { text: "8", correct: false }, { text: "6", correct: false }],
        explanation: "1. Simplificamos exponente: $$5^3 \\cdot 5^{-1} = 5^2$$.\n2. Dividimos: $$\\frac{5^2}{5^2} = 1$$.\n3. Sumamos con la raíz: $$1 + 3 = 4$$."
    },
    {
        cat: "Proporcionalidad y Fracciones",
        q: "Tres impresoras industriales procesan 1200 páginas en 4 minutos. ¿Cuántas páginas procesarán 5 impresoras de igual rendimiento en 6 minutos?",
        options: [{ text: "3000", correct: true }, { text: "2500", correct: false }, { text: "3600", correct: false }, { text: "2800", correct: false }],
        explanation: "Regla de tres compuesta: $$\\frac{3 \\cdot 4}{1200} = \\frac{5 \\cdot 6}{x} \\implies \\frac{12}{1200} = \\frac{30}{x} \\implies x = 3000$$."
    },
    {
        cat: "Proporcionalidad y Fracciones",
        q: "Un producto tecnológico de $800 recibe un descuento sucesivo del 10% y posteriormente del 20%. ¿Cuál es el precio final?",
        options: [{ text: "$576.00", correct: true }, { text: "$560.00", correct: false }, { text: "$600.00", correct: false }, { text: "$592.00", correct: false }],
        explanation: "1. Descuento 1: $$800 \\cdot 0.90 = 720$$.\n2. Descuento 2: $$720 \\cdot 0.80 = 576.00$$."
    },
    {
        cat: "Proporcionalidad y Fracciones",
        q: "Un depósito contiene agua hasta los $$\\frac{3}{5}$$ de su capacidad. Si se extraen 30 litros, la capacidad disminuye a los $$\\frac{1}{2}$$. ¿Cuál es la capacidad total en litros?",
        options: [{ text: "300", correct: true }, { text: "250", correct: false }, { text: "350", correct: false }, { text: "200", correct: false }],
        explanation: "Ecuación: $$\\frac{3}{5}C - 30 = \\frac{1}{2}C \\implies \\frac{1}{10}C = 30 \\implies C = 300$$ L."
    },
    {
        cat: "Ecuaciones y Edades",
        q: "La edad actual de Pedro es el triple de la edad de Juan. Dentro de 10 años, la edad de Pedro será el doble de la de Juan. ¿Qué edad tiene Pedro actualmente?",
        options: [{ text: "30", correct: true }, { text: "25", correct: false }, { text: "35", correct: false }, { text: "40", correct: false }],
        explanation: "1. $$P = 3J$$\n2. $$P + 10 = 2(J + 10) \\implies 3J + 10 = 2J + 20 \\implies J = 10$$.\nPedro tiene $$3(10) = 30$$ años."
    },
    {
        cat: "Ecuaciones y Edades",
        q: "Un comerciante compró un total de 20 artículos entre cuadernos y bolígrafos por $45. Si cada cuaderno cuesta $3 y cada bolígrafo $2, ¿cuántos cuadernos compró?",
        options: [{ text: "5", correct: true }, { text: "8", correct: false }, { text: "10", correct: false }, { text: "12", correct: false }],
        explanation: "Sistema: $$x + y = 20$$ y $$3x + 2y = 45$$.\nSustituyendo: $$3x + 2(20-x) = 45 \\implies x = 5$$ cuadernos."
    },
    {
        cat: "Ecuaciones y Edades",
        q: "Si al doble de un número se le resta 15, se obtiene el mismo número aumentado en 10. ¿Cuál es la mitad de dicho número?",
        options: [{ text: "12.50", correct: true }, { text: "25.00", correct: false }, { text: "15.00", correct: false }, { text: "10.00", correct: false }],
        explanation: "Ecuación: $$2x - 15 = x + 10 \\implies x = 25$$.\nLa mitad es $$\\frac{25}{2} = 12.50$$."
    },
    {
        cat: "Ecuaciones y Edades",
        q: "La suma de los salarios de un desarrollador Junior y uno Senior es $5000. Si el Senior gana $1400 más que el Junior, ¿cuál es el sueldo del Junior?",
        options: [{ text: "$1800", correct: true }, { text: "$2000", correct: false }, { text: "$1600", correct: false }, { text: "$2200", correct: false }],
        explanation: "$$(J + 1400) + J = 5000 \\implies 2J = 3600 \\implies J = 1800$$."
    },
    {
        cat: "Ecuaciones y Edades",
        q: "Hace 5 años, María tenía la mitad de la edad que tendrá dentro de 7 años. ¿Cuál es la edad actual de María?",
        options: [{ text: "17", correct: true }, { text: "19", correct: false }, { text: "15", correct: false }, { text: "21", correct: false }],
        explanation: "$$M - 5 = \\frac{M + 7}{2} \\implies 2M - 10 = M + 7 \\implies M = 17$$ años."
    },
    {
        cat: "Ecuaciones y Edades",
        q: "Un servitramite cobró $120 por atender a 15 clientes. Si algunos trámites eran estándar ($5) y otros complejos ($10), ¿cuántos realizaron trámites complejos?",
        options: [{ text: "9", correct: true }, { text: "6", correct: false }, { text: "8", correct: false }, { text: "10", correct: false }],
        explanation: "$$5(15 - c) + 10c = 120 \\implies 75 + 5c = 120 \\implies c = 9$$."
    },
    {
        cat: "Ecuaciones y Edades",
        q: "¿Cuál es el número que sumado con su triple y disminuido en 8 da como resultado 32?",
        options: [{ text: "10", correct: true }, { text: "8", correct: false }, { text: "12", correct: false }, { text: "14", correct: false }],
        explanation: "$$x + 3x - 8 = 32 \\implies 4x = 40 \\implies x = 10$$."
    },
    {
        cat: "Ecuaciones y Edades",
        q: "Ana tiene el doble de dinero que Beatriz. Si Ana le da $20 a Beatriz, ambas tendrán la misma cantidad. ¿Cuánto dinero tenía Ana al principio?",
        options: [{ text: "$80", correct: true }, { text: "$60", correct: false }, { text: "$100", correct: false }, { text: "$40", correct: false }],
        explanation: "$$2B - 20 = B + 20 \\implies B = 40$$. Ana tenía $$2(40) = 80$$."
    },
    {
        cat: "Ecuaciones y Edades",
        q: "Tres números enteros consecutivos suman 102. ¿Cuál es el número mayor?",
        options: [{ text: "35", correct: true }, { text: "34", correct: false }, { text: "33", correct: false }, { text: "36", correct: false }],
        explanation: "$$x + (x+1) + (x+2) = 102 \\implies 3x = 99 \\implies x = 33$$. El mayor es $$35$$."
    },
    {
        cat: "Probabilidad y Combinatoria",
        q: "En una bolsa hay 4 bolas rojas, 5 azules y 3 verdes. ¿Cuál es la probabilidad de extraer una bola azul al azar?",
        options: [{ text: "\\frac{5}{12}", correct: true }, { text: "\\frac{1}{3}", correct: false }, { text: "\\frac{5}{7}", correct: false }, { text: "\\frac{1}{4}", correct: false }],
        explanation: "Total = 12. Azules = 5. Probabilidad = $$\\frac{5}{12}$$."
    },
    {
        cat: "Probabilidad y Combinatoria",
        q: "¿De cuántas formas distintas se pueden sentar 4 personas en una fila de 4 sillas?",
        options: [{ text: "24", correct: true }, { text: "12", correct: false }, { text: "16", correct: false }, { text: "4", correct: false }],
        explanation: "Permutación: $$4! = 4 \\cdot 3 \\cdot 2 \\cdot 1 = 24$$."
    },
    {
        cat: "Probabilidad y Combinatoria",
        q: "Se lanza un dado justo de 6 caras. ¿Cuál es la probabilidad de obtener un número primo?",
        options: [{ text: "0.50", correct: true }, { text: "0.33", correct: false }, { text: "0.67", correct: false }, { text: "0.25", correct: false }],
        explanation: "Primos: $$\\left\\{2, 3, 5\\right\\}$$ (3 de 6). $$P = \\frac{3}{6} = 0.50$$."
    },
    {
        cat: "Probabilidad y Combinatoria",
        q: "De un grupo de 5 personas, ¿cuántos comités de 2 personas se pueden formar sin importar el orden?",
        options: [{ text: "10", correct: true }, { text: "20", correct: false }, { text: "15", correct: false }, { text: "5", correct: false }],
        explanation: "Combinatoria: $$\\binom{5}{2} = \\frac{5 \\cdot 4}{2 \\cdot 1} = 10$$."
    },
    {
        cat: "Probabilidad y Combinatoria",
        q: "Al lanzar dos monedas simultáneamente, ¿cuál es la probabilidad de obtener al menos una cara?",
        options: [{ text: "0.75", correct: true }, { text: "0.50", correct: false }, { text: "0.25", correct: false }, { text: "1.00", correct: false }],
        explanation: "Casos favorables: $$\\left\\{(C,C), (C,X), (X,C)\\right\\}$$ de 4 totales. $$P = 0.75$$."
    }
];

// ESTADO GLOBAL
let sessionId = "";
let questions = [];
let userAnswers = {}; // { qIndex: { chosenIndex: number, isCorrect: boolean, expired: boolean } }
let questionTimestamps = {}; // { qIndex: targetEndTimeInMillis }
let currentQuestionIndex = 0;
let timerInterval = null;

function shuffleArray(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

// INICIALIZACIÓN PERSISTENTE DE SESIÓN
function initSession() {
    let hash = window.location.hash.replace('#', '');
    if (!hash || !hash.startsWith('session-num-')) {
        sessionId = 'session-num-' + Math.random().toString(36).substring(2, 8);
        window.location.hash = sessionId;
    } else {
        sessionId = hash;
    }

    questions = rawQuestions.map(q => ({
        ...q,
        options: shuffleArray(q.options)
    }));

    // Cargar datos persistentes
    const savedAnswers = localStorage.getItem(`${sessionId}_answers`);
    if (savedAnswers) userAnswers = JSON.parse(savedAnswers);

    const savedTimestamps = localStorage.getItem(`${sessionId}_timestamps`);
    if (savedTimestamps) questionTimestamps = JSON.parse(savedTimestamps);

    if (Object.keys(userAnswers).length > 0 || Object.keys(questionTimestamps).length > 0) {
        showDashboard();
    }
}

function saveData() {
    localStorage.setItem(`${sessionId}_answers`, JSON.stringify(userAnswers));
    localStorage.setItem(`${sessionId}_timestamps`, JSON.stringify(questionTimestamps));
}

// CONTROL DE TEMPORIZADOR
function startTimer(qIdx) {
    clearInterval(timerInterval);
    const display = document.getElementById('timer-display');

    // Asignar tiempo de fin persistente si no existe
    if (!questionTimestamps[qIdx] && userAnswers[qIdx] === undefined) {
        questionTimestamps[qIdx] = Date.now() + (QUESTION_TIME_LIMIT * 1000);
        saveData();
    }

    function update() {
        if (userAnswers[qIdx] !== undefined) {
            display.textContent = "--:--";
            clearInterval(timerInterval);
            return;
        }

        const now = Date.now();
        const remainingMs = questionTimestamps[qIdx] - now;
        const remainingSecs = Math.ceil(remainingMs / 1000);

        if (remainingSecs <= 0) {
            clearInterval(timerInterval);
            display.textContent = "00:00";
            // Marcar expirado automáticamente
            userAnswers[qIdx] = { chosenIndex: -1, isCorrect: false, expired: true };
            saveData();
            loadQuestion(qIdx);
        } else {
            const mins = Math.floor(remainingSecs / 60);
            const secs = remainingSecs % 60;
            display.textContent = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
        }
    }

    update();
    timerInterval = setInterval(update, 1000);
}

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

    const feedbackPanel = document.getElementById('feedback-panel');
    if (isAnswered) {
        feedbackPanel.classList.remove('hidden');
        let note = userAnswers[index].expired ? "<p class='text-amber-400 font-bold mb-2'>⚠️ Tiempo agotado para este reactivo.</p>" : "";
        document.getElementById('feedback-text').innerHTML = note + q.explanation;
    } else {
        feedbackPanel.classList.add('hidden');
    }

    renderMatrix();
    renderKaTeX();
    startTimer(index);
}

function selectOption(qIdx, optIdx) {
    const isCorrect = questions[qIdx].options[optIdx].correct;
    userAnswers[qIdx] = { chosenIndex: optIdx, isCorrect, expired: false };
    saveData();
    loadQuestion(qIdx);
}

function showDashboard() {
    document.getElementById('welcome-screen').classList.add('hidden');
    document.getElementById('results-screen').classList.add('hidden');
    document.getElementById('app-dashboard').classList.remove('hidden');

    if (!document.getElementById('security-watermark')) {
        const watermark = document.createElement('div');
        watermark.id = 'security-watermark';
        watermark.className = 'watermark';
        watermark.innerText = `EVALUACIÓN PRIVADA - SESIÓN: ${sessionId}`;
        document.getElementById('app-dashboard').appendChild(watermark);
    }

    loadQuestion(currentQuestionIndex);
}

function finishEvaluation() {
    clearInterval(timerInterval);
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
    localStorage.removeItem(`${sessionId}_answers`);
    localStorage.removeItem(`${sessionId}_timestamps`);
    userAnswers = {};
    questionTimestamps = {};
    currentQuestionIndex = 0;
    
    sessionId = 'session-num-' + Math.random().toString(36).substring(2, 8);
    window.location.hash = sessionId;

    document.getElementById('results-screen').classList.add('hidden');
    document.getElementById('welcome-screen').classList.remove('hidden');
}

// SEGURIDAD Y EVENTOS
document.addEventListener('contextmenu', (e) => e.preventDefault());

document.addEventListener('keydown', (e) => {
    if (e.key === 'PrintScreen') {
        navigator.clipboard.writeText('');
        alert('Las capturas de pantalla están desactivadas por seguridad.');
    }
    if (
        (e.ctrlKey && ['p', 'u', 'c', 's'].includes(e.key.toLowerCase())) ||
        (e.ctrlKey && e.shiftKey && ['i', 'j', 'c'].includes(e.key.toLowerCase())) ||
        e.key === 'F12'
    ) {
        e.preventDefault();
        return false;
    }
});

window.addEventListener('blur', () => document.body.classList.add('security-blur'));
window.addEventListener('focus', () => document.body.classList.remove('security-blur'));

document.addEventListener('DOMContentLoaded', () => {
    initSession();
    document.getElementById('start-btn').addEventListener('click', showDashboard);
    document.getElementById('prev-btn').addEventListener('click', () => {
        if (currentQuestionIndex > 0) loadQuestion(currentQuestionIndex - 1);
    });
    document.getElementById('next-btn').addEventListener('click', () => {
        if (currentQuestionIndex < questions.length - 1) loadQuestion(currentQuestionIndex + 1);
    });
    document.getElementById('finish-btn').addEventListener('click', finishEvaluation);
    document.getElementById('reset-btn').addEventListener('click', resetSimulator);
});