// 20 PREGUNTAS x 80 SEGUNDOS = 1600 SEGUNDOS (26 MIN 40 SEG)
const TOTAL_EXAM_TIME_SECONDS = 20 * 80;

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
        explanation: "1. Exponente: $$5^3 \\cdot 5^{-1} = 5^2$$.\n2. Dividimos: $$\\frac{5^2}{5^2} = 1$$.\n3. Sumamos: $$1 + 3 = 4$$."
    },
    {
        cat: "Proporcionalidad y Fracciones",
        q: "Tres impresoras industriales procesan 1200 páginas en 4 minutos. ¿Cuántas páginas procesarán 5 impresoras en 6 minutos?",
        options: [{ text: "3000", correct: true }, { text: "2500", correct: false }, { text: "3600", correct: false }, { text: "2800", correct: false }],
        explanation: "Regla de tres compuesta: $$\\frac{3 \\cdot 4}{1200} = \\frac{5 \\cdot 6}{x} \\implies x = 3000$$."
    },
    {
        cat: "Proporcionalidad y Fracciones",
        q: "Un producto de $800 recibe un descuento sucesivo del 10% y luego del 20%. ¿Cuál es el precio final?",
        options: [{ text: "$576.00", correct: true }, { text: "$560.00", correct: false }, { text: "$600.00", correct: false }, { text: "$592.00", correct: false }],
        explanation: "1. Descuento 1: $$800 \\cdot 0.90 = 720$$.\n2. Descuento 2: $$720 \\cdot 0.80 = 576.00$$."
    },
    {
        cat: "Proporcionalidad y Fracciones",
        q: "Un depósito contiene agua hasta los $$\\frac{3}{5}$$ de su capacidad. Si se extraen 30 litros, disminuye a $$\\frac{1}{2}$$. ¿Capacidad total?",
        options: [{ text: "300", correct: true }, { text: "250", correct: false }, { text: "350", correct: false }, { text: "200", correct: false }],
        explanation: "$$\\frac{3}{5}C - 30 = \\frac{1}{2}C \\implies \\frac{1}{10}C = 30 \\implies C = 300$$ L."
    },
    {
        cat: "Ecuaciones y Edades",
        q: "La edad de Pedro es el triple de la de Juan. Dentro de 10 años, la edad de Pedro será el doble. ¿Qué edad tiene Pedro?",
        options: [{ text: "30", correct: true }, { text: "25", correct: false }, { text: "35", correct: false }, { text: "40", correct: false }],
        explanation: "$$P = 3J$$, $$P + 10 = 2(J + 10) \\implies J = 10$$. Pedro tiene $$30$$ años."
    },
    {
        cat: "Ecuaciones y Edades",
        q: "Un comerciante compró 20 artículos (cuadernos a $3 y bolígrafos a $2) por $45. ¿Cuántos cuadernos compró?",
        options: [{ text: "5", correct: true }, { text: "8", correct: false }, { text: "10", correct: false }, { text: "12", correct: false }],
        explanation: "$$3x + 2(20-x) = 45 \\implies x = 5$$ cuadernos."
    },
    {
        cat: "Ecuaciones y Edades",
        q: "Si al doble de un número se le resta 15, resulta el mismo número más 10. ¿Cuál es la mitad del número?",
        options: [{ text: "12.50", correct: true }, { text: "25.00", correct: false }, { text: "15.00", correct: false }, { text: "10.00", correct: false }],
        explanation: "$$2x - 15 = x + 10 \\implies x = 25$$. La mitad es $$12.50$$."
    },
    {
        cat: "Ecuaciones y Edades",
        q: "La suma de salarios de un Junior y un Senior es $5000. El Senior gana $1400 más. ¿Sueldo del Junior?",
        options: [{ text: "$1800", correct: true }, { text: "$2000", correct: false }, { text: "$1600", correct: false }, { text: "$2200", correct: false }],
        explanation: "$$2J + 1400 = 5000 \\implies 2J = 3600 \\implies J = 1800$$."
    },
    {
        cat: "Ecuaciones y Edades",
        q: "Hace 5 años, María tenía la mitad de la edad que tendrá dentro de 7 años. ¿Edad actual?",
        options: [{ text: "17", correct: true }, { text: "19", correct: false }, { text: "15", correct: false }, { text: "21", correct: false }],
        explanation: "$$M - 5 = \\frac{M + 7}{2} \\implies M = 17$$ años."
    },
    {
        cat: "Ecuaciones y Edades",
        q: "Un servitramite cobró $120 por 15 clientes (trámites de $5 y $10). ¿Cuántos hicieron el trámite de $10?",
        options: [{ text: "9", correct: true }, { text: "6", correct: false }, { text: "8", correct: false }, { text: "10", correct: false }],
        explanation: "$$5(15 - c) + 10c = 120 \\implies 5c = 45 \\implies c = 9$$."
    },
    {
        cat: "Ecuaciones y Edades",
        q: "¿Qué número sumado con su triple y disminuido en 8 da como resultado 32?",
        options: [{ text: "10", correct: true }, { text: "8", correct: false }, { text: "12", correct: false }, { text: "14", correct: false }],
        explanation: "$$x + 3x - 8 = 32 \\implies 4x = 40 \\implies x = 10$$."
    },
    {
        cat: "Ecuaciones y Edades",
        q: "Ana tiene el doble de dinero que Beatriz. Si le da $20, tienen lo mismo. ¿Cuánto tenía Ana?",
        options: [{ text: "$80", correct: true }, { text: "$60", correct: false }, { text: "$100", correct: false }, { text: "$40", correct: false }],
        explanation: "$$2B - 20 = B + 20 \\implies B = 40$$. Ana tenía $$80$$."
    },
    {
        cat: "Ecuaciones y Edades",
        q: "Tres números enteros consecutivos suman 102. ¿Cuál es el número mayor?",
        options: [{ text: "35", correct: true }, { text: "34", correct: false }, { text: "33", correct: false }, { text: "36", correct: false }],
        explanation: "$$3x + 3 = 102 \\implies x = 33$$. El mayor es $$35$$."
    },
    {
        cat: "Probabilidad y Combinatoria",
        q: "En una bolsa hay 4 bolas rojas, 5 azules y 3 verdes. ¿Probabilidad de extraer azul?",
        options: [{ text: "\\frac{5}{12}", correct: true }, { text: "\\frac{1}{3}", correct: false }, { text: "\\frac{5}{7}", correct: false }, { text: "\\frac{1}{4}", correct: false }],
        explanation: "$$P = \\frac{5}{4+5+3} = \\frac{5}{12}$$."
    },
    {
        cat: "Probabilidad y Combinatoria",
        q: "¿De cuántas formas se pueden sentar 4 personas en una fila de 4 sillas?",
        options: [{ text: "24", correct: true }, { text: "12", correct: false }, { text: "16", correct: false }, { text: "4", correct: false }],
        explanation: "$$4! = 24$$ formas."
    },
    {
        cat: "Probabilidad y Combinatoria",
        q: "Se lanza un dado de 6 caras. ¿Probabilidad de obtener un número primo?",
        options: [{ text: "0.50", correct: true }, { text: "0.33", correct: false }, { text: "0.67", correct: false }, { text: "0.25", correct: false }],
        explanation: "Primos: $$2, 3, 5$$. $$P = \\frac{3}{6} = 0.50$$."
    },
    {
        cat: "Probabilidad y Combinatoria",
        q: "De un grupo de 5 personas, ¿cuántos comités de 2 personas se pueden formar?",
        options: [{ text: "10", correct: true }, { text: "20", correct: false }, { text: "15", correct: false }, { text: "5", correct: false }],
        explanation: "$$\\binom{5}{2} = \\frac{5 \\cdot 4}{2} = 10$$."
    },
    {
        cat: "Probabilidad y Combinatoria",
        q: "Al lanzar dos monedas simultáneamente, ¿probabilidad de obtener al menos una cara?",
        options: [{ text: "0.75", correct: true }, { text: "0.50", correct: false }, { text: "0.25", correct: false }, { text: "1.00", correct: false }],
        explanation: "Casos: $$(C,C), (C,X), (X,C)$$. $$P = \\frac{3}{4} = 0.75$$."
    }
];

let sessionId = "";
let questions = [];
let userAnswers = {};
let examEndTime = null;
let currentQuestionIndex = 0;
let globalTimerInterval = null;

function shuffleArray(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

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

    const savedAnswers = localStorage.getItem(`${sessionId}_answers`);
    if (savedAnswers) userAnswers = JSON.parse(savedAnswers);

    const savedEndTime = localStorage.getItem(`${sessionId}_endtime`);
    if (savedEndTime) examEndTime = parseInt(savedEndTime, 10);

    if (examEndTime) {
        showDashboard();
    }
}

function saveData() {
    localStorage.setItem(`${sessionId}_answers`, JSON.stringify(userAnswers));
    if (examEndTime) {
        localStorage.setItem(`${sessionId}_endtime`, examEndTime.toString());
    }
}

// MANEJO DEL TEMPORIZADOR GLOBAL EN TIEMPO REAL
function startGlobalTimer() {
    if (!examEndTime) {
        examEndTime = Date.now() + (TOTAL_EXAM_TIME_SECONDS * 1000);
        saveData();
    }

    const timerDisplay = document.getElementById('timer-display');

    function updateTimer() {
        const now = Date.now();
        const diff = examEndTime - now;

        if (diff <= 0) {
            clearInterval(globalTimerInterval);
            timerDisplay.textContent = "00:00";
            finishEvaluation();
            alert("⏰ El tiempo global de la evaluación ha finalizado.");
            return;
        }

        const totalSecs = Math.floor(diff / 1000);
        const mins = Math.floor(totalSecs / 60);
        const secs = totalSecs % 60;

        timerDisplay.textContent = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    }

    updateTimer();
    clearInterval(globalTimerInterval);
    globalTimerInterval = setInterval(updateTimer, 1000);
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
    saveData();
    loadQuestion(qIdx);
}

// ACTIVAR PANTALLA COMPLETA OBLIGATORIA
function requestFullScreen() {
    const docEl = document.documentElement;
    if (docEl.requestFullscreen) {
        docEl.requestFullscreen().catch(() => {});
    } else if (docEl.mozRequestFullScreen) {
        docEl.mozRequestFullScreen().catch(() => {});
    } else if (docEl.webkitRequestFullscreen) {
        docEl.webkitRequestFullscreen().catch(() => {});
    } else if (docEl.msRequestFullscreen) {
        docEl.msRequestFullscreen().catch(() => {});
    }
}

function showDashboard() {
    requestFullScreen();
    document.getElementById('welcome-screen').classList.add('hidden');
    document.getElementById('results-screen').classList.add('hidden');
    document.getElementById('app-dashboard').classList.remove('hidden');

    if (!document.getElementById('security-watermark')) {
        const watermark = document.createElement('div');
        watermark.id = 'security-watermark';
        watermark.className = 'watermark';
        watermark.innerText = `EVALUACIÓN ESTRICTA - SESIÓN: ${sessionId}`;
        document.getElementById('app-dashboard').appendChild(watermark);
    }

    startGlobalTimer();
    loadQuestion(currentQuestionIndex);
}

function finishEvaluation() {
    clearInterval(globalTimerInterval);
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

    if (document.fullscreenElement) {
        document.exitFullscreen().catch(() => {});
    }
}

function resetSimulator() {
    localStorage.removeItem(`${sessionId}_answers`);
    localStorage.removeItem(`${sessionId}_endtime`);
    userAnswers = {};
    examEndTime = null;
    currentQuestionIndex = 0;
    
    sessionId = 'session-num-' + Math.random().toString(36).substring(2, 8);
    window.location.hash = sessionId;

    document.getElementById('results-screen').classList.add('hidden');
    document.getElementById('welcome-screen').classList.remove('hidden');
}

// SISTEMA DE SEGURIDAD Y CONTROL DE PANTALLA
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

// Control de salida de pantalla completa y cambio de ventana
window.addEventListener('blur', () => {
    document.body.classList.add('security-blur');
});

window.addEventListener('focus', () => {
    document.body.classList.remove('security-blur');
});

document.addEventListener('fullscreenchange', () => {
    const isDashboardVisible = !document.getElementById('app-dashboard').classList.contains('hidden');
    if (!document.fullscreenElement && isDashboardVisible) {
        document.body.classList.add('security-blur');
        alert("⚠️ ATENCIÓN: Has salido del modo Pantalla Completa. Debes permanecer en la plataforma para continuar.");
        requestFullScreen();
        document.body.classList.remove('security-blur');
    }
});

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