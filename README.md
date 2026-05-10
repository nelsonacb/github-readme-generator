# ✨ GitHub Profile README Generator

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-18.3-61DAFB?logo=react&logoColor=white)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.0-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Ant Design](https://img.shields.io/badge/Ant%20Design-5.22-0170FE?logo=antdesign&logoColor=white)](https://ant.design/)

> Un generador visual para crear un README.md increíble para tu perfil de GitHub. Crea un perfil impactante en minutos, sin escribir una sola línea de Markdown.

![Demo del Generador](/public/demo.gif) <!-- Puedes añadir una captura de pantalla mostrando la interfaz -->

---

## 🌟 Demo en Vivo

Puedes probar el generador aquí: **[Enlace a tu demo en vivo]** <!-- Añade el enlace cuando lo tengas -->

---

## ✨ Características

- **📝 Formulario Multi-Paso:** Utiliza `Ant Design Steps` para guiar al usuario en la creación de su perfil.
  - **Información Básica:** Nombre, subtítulo, trabajo actual, "fun fact", y más.
  - **Enlaces:** Portafolio, blog y currículum.
  - **Perfiles Sociales:** Usernames para GitHub, LinkedIn, Twitter, etc. El generador construye las URLs completas automáticamente.
  - **Skills y Tecnologías:** Selecciona tus tecnologías de una lista con más de XX iconos, organizados por categorías. Con buscador integrado.
  - **Estadísticas de GitHub:** Integra fácilmente badges de visitas, tarjetas de estadísticas y trofeos.
- **🎨 Soporte de Modo Oscuro/Claro:** Elige tu tema favorito. La configuración se guarda en tu navegador.
- **📱 Diseño 100% Responsive:** La interfaz se adapta perfectamente a cualquier dispositivo, desde móviles hasta pantallas de escritorio.
- **👁️ Vista Previa en Tiempo Real:** Mientras rellenas los datos, puedes ver cómo quedará el README final al instante.
- **💾 Copiar o Descargar:** Con un solo clic, copia el contenido al portapapeles o descarga el archivo `README.md`.

---

## 🛠️ Stack Tecnológico

Este proyecto ha sido construido con las siguientes tecnologías:

- **[React 18](https://reactjs.org/):** Librería principal para la interfaz de usuario.
- **[TypeScript](https://www.typescriptlang.org/):** Para un código más robusto y tipado.
- **[Vite](https://vitejs.dev/):** Herramienta de desarrollo ultrarrápida.
- **[Ant Design](https://ant.design/):** Proporciona los componentes de UI (Steps, Layout, Cards, etc.) y el sistema de temas.
- **[Zustand](https://zustand-demo.pmnd.rs/):** Manejador de estado global. Persiste los datos entre pasos y guarda la preferencia del tema.
- **[React Markdown](https://remarkjs.github.io/react-markdown/):** Para renderizar la vista previa del README.
- **[Axios](https://axios-http.com/):** Para consumir la API de GitHub

---

## 🚀 Instalación y Uso Local

Si quieres ejecutar el generador en tu máquina local o contribuir al proyecto, sigue estos pasos:

1.  **Clona el repositorio:**
    ```bash
    git clone https://github.com/TU-USUARIO/github-readme-generator.git
    cd github-readme-generator
    ```
