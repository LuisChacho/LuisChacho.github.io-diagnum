# Simulador Interactivo de Razonamiento Numérico

Simulador de evaluación diagnóstica en arquitectura modular web (HTML, CSS, JS y Markdown). Diseñado para evaluar agilidad mental, lógica matemática y aptitud cuantitativa.

## 🚀 Características Principales

- **Estructura Modular**: Código dividido en archivos independientes (`índice.html`, `index.css`, `index.js`, `LÉAME.md`).
- **Renderizado Matemático KaTeX**: Renderizado nativo ultrarrápido de ecuaciones y potencias LaTeX sin dependencias pesadas.
- **Persistencia por URL Hash**: Identificación de sesión unívoca en el Hash de la URL (`#session-raznum-xxxx`) que mantiene el progreso activo tras recargas de página.
- **Algoritmo Fisher-Yates**: Mezcla aleatoria interna de opciones en cada reactivo para evitar respuestas fijas o memorizadas.
- **Feedback Oscuro de Alto Contraste**: Explicaciones detalladas paso a paso en formato LaTeX activadas inmediatamente al responder.

## 📦 Estructura del Repositorio

```text
.
├── índice.html       # Estructura principal y marcado de la aplicación
├── index.css         # Estilos visuales personalizados
├── index.js          # Lógica de negocio, reactivos y estado de sesión
└── LÉAME.md          # Documentación técnica en español