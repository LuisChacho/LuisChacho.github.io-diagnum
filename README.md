# Simulador de Evaluación: Razonamiento Numérico (raznum)

Simulador interactivo modularizado de diagnóstico con control de tiempo persistente y medidas anti-copia.

## 🚀 Características
- **Control Estricto de Tiempo**: Temporizador individual de 1 minuto 20 segundos por reactivo con persistencia ante recargas de página.
- **Seguridad Anti-Capturas**: Bloqueo de inspección (`F12`), clic derecho, atajos de teclado y desenfoque automático al cambiar de pestaña.
- **Renderizado Matemático**: Soporte completo de KaTeX para ecuaciones y fracciones.
- **Navegación Dinámica**: Matriz interactiva de 20 reactivos con estado en tiempo real.
- **Persistencia de Sesión**: Autoguardado en caliente mediante URL Hash y LocalStorage.

## 📁 Estructura del Proyecto
- `index.html`: Estructura semántica del simulador.
- `index.css`: Estilos personalizados y capas de seguridad visual.
- `index.js`: Lógica del examen, temporizador estricto y banco de datos.
- `LÉAME.md`: Documentación del proyecto.