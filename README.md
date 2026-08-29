# Simulador de Evaluación: Razonamiento Numérico (raznum)

Simulador interactivo modularizado con sistema de seguridad en pantalla completa y cuenta regresiva global estricta.

## 🚀 Características
- **Cuenta Regresiva Global**: Temporizador visible de 26 minutos y 40 segundos (1 min 20 s por pregunta) persistente a recargas.
- **Modo Kiosk / Bloqueo de Pantalla**: Exige Pantalla Completa obligatoria para rendir la prueba.
- **Seguridad Anti-Fuga**: Detecta cuando el alumno intenta salir de la pantalla o cambiar de pestaña.
- **Protección Visual**: Bloqueo de `PrintScreen`, menú contextual, `F12` y marcas de agua dinámicas.
- **Renderizado Matemático**: Soporte completo de KaTeX para ecuaciones.

## 📁 Estructura del Proyecto
- `index.html`: Estructura semántica del simulador.
- `index.css`: Estilos de interfaz y capas de desenfoque de seguridad.
- `index.js`: Lógica del examen, temporizador global y bloqueo de pantalla.
- `LÉAME.md`: Documentación del proyecto.