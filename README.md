# 💼 Portfolio Profesional — José Doménech Alemany

¡Bienvenido al repositorio de mi portfolio profesional! Este proyecto es una Single Page Application (SPA) responsiva y moderna, construida con **Angular v20** e integrada con componentes de **Ionic**. Está diseñado para presentar mi perfil como desarrollador web y administrador de sistemas, exponiendo de forma visual y accesible mis estudios, experiencia profesional, habilidades técnicas y proyectos destacados.

---

## 🚀 Tecnologías Principales

Para el desarrollo de este proyecto se han empleado tecnologías modernas de desarrollo frontend:

*   **Framework principal:** ![Angular](https://img.shields.io/badge/Angular-DD0031?style=flat-square&logo=angular&logoColor=white) v20.3
*   **Lenguajes:** ![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat-square&logo=typescript&logoColor=white) | ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white) | ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
*   **Estilos y Maquetación:** ![Sass](https://img.shields.io/badge/Sass-CC6699?style=flat-square&logo=sass&logoColor=white) (SCSS modular)
*   **Componentes e Iconos:** ![Ionic](https://img.shields.io/badge/Ionic-3880FF?style=flat-square&logo=ionic&logoColor=white) v8 (Ionicons)
*   **Gestión de Estado Reactiva:** ![RxJS](https://img.shields.io/badge/RxJS-B71C1C?style=flat-square&logo=reactivex&logoColor=white) (BehaviorSubject para la sincronización global)

---

## ✨ Características Destacadas

*   🌓 **Modo Oscuro / Claro Dinámico:** Implementación reactiva a través del servicio reactivo `GlobalData` usando RxJS `BehaviorSubject`. Cambia de tema de forma fluida aplicando clases globales en el body (`.activo` y `.inactivo`).
*   📱 **Diseño 100% Responsivo:** Maquetación moderna utilizando CSS Flexbox y Grid, garantizando una visualización óptima en móviles, tablets y ordenadores de escritorio.
*   ⏳ **Línea de Tiempo Interactiva:** Visualización ordenada y animada en la sección "Sobre mí" que detalla estudios de CFGS (ASIR & DAW) y experiencias preprofesionales y laborales.
*   ✉️ **Formulario de Contacto Interactivo:** Formulario de envío con control de caracteres dinámico (máximo 300 caracteres), validaciones del lado del cliente y alertas personalizadas de éxito/error animadas.
*   📊 **Sección de Proyectos Detallada:** Cards de proyectos profesionales vinculando directamente el código fuente en GitHub, las demos de producción y los vídeos demostrativos.

---

## 🛠️ Estructura del Proyecto

El proyecto sigue una estructura limpia y orientada a componentes característicos de la arquitectura modular de Angular:

```text
src/
├── app/
│   ├── components/            # Componentes reutilizables e independientes
│   │   ├── about/             # Historial académico y profesional (Timeline)
│   │   ├── contact/           # Formulario interactivo de contacto
│   │   ├── footer/            # Pie de página con enlaces y créditos
│   │   ├── header/            # Barra de navegación con selector de tema
│   │   ├── home/              # Introducción principal y redes sociales
│   │   ├── projects/          # Galería de proyectos destacados
│   │   └── skills/            # Panel visual de habilidades técnicas (Frontend/Backend/Herramientas)
│   ├── services/              # Lógica de negocio y estados reactivos globales
│   │   └── global-data.ts     # Manejo del estado global de Dark/Light mode
│   ├── app.config.ts          # Configuraciones principales de la aplicación Angular
│   ├── app.routes.ts          # Configuración de rutas e inyecciones
│   ├── app.ts                 # Componente raíz (Boilerplate y control superior)
│   └── app.html               # Plantilla principal
├── assets/                    # Archivos estáticos, logos, capturas y CV (PDF)
└── styles.scss                # Estilos globales, variables de colores HSL y temas CSS
```

---

## 📂 Proyectos Integrados en el Portfolio

En la sección de proyectos se destacan las siguientes aplicaciones desarrolladas:

1.  **Administrador de Tareas**
    *   *Descripción:* Aplicación interactiva que te permite organizar tus tareas de una manera cómoda y visual.
    *   *Tecnologías:* Angular, TypeScript, HTML5, CSS3.
    *   *Enlaces:* [Ver Código](https://github.com/pepedoa/Administrador-de-tareas.git) | [Probar Web](https://pepedoa.github.io/Administrador-de-tareas/)
2.  **Gestor Financiero**
    *   *Descripción:* Dashboard financiero completo con visualización de datos dinámica, integrando una API robusta en PHP y autenticación protegida para una gestión de finanzas profesional.
    *   *Tecnologías:* Angular, TypeScript, PHP, MySQL, CSS3.
    *   *Enlaces:* [Ver Código](https://github.com/pepedoa/Gestor-financiero) | [Ver Demo en Loom](https://www.loom.com/share/9c540f176f8145ed9fc3a9e22c383bc7)

---

## ⚡ Guía de Instalación y Ejecución Local

Sigue estos pasos para levantar el proyecto localmente en tu máquina:

### Requisitos Previos

*   Haber instalado [Node.js](https://nodejs.org/) (se recomienda versión LTS).
*   Instalar de forma global el Angular CLI:
    ```bash
    npm install -g @angular/cli
    ```

### Pasos para Ejecutar

1.  **Clonar el repositorio:**
    ```bash
    git clone https://github.com/pepedoa/Portfolio-.git
    cd Portfolio-
    ```
2.  **Instalar dependencias:**
    ```bash
    npm install
    ```
3.  **Ejecutar servidor de desarrollo:**
    ```bash
    npm start
    # O bien
    ng serve
    ```
4.  **Ver el proyecto:**
    Abre tu navegador en `http://localhost:4200/`. El sitio web se recargará automáticamente al guardar cambios en el código.

### Construir para Producción

Para compilar el proyecto y generar los archivos optimizados listos para su despliegue en producción:
```bash
ng build
```
Los artefactos compilados se almacenarán en la carpeta `dist/`.

---

## 📨 Contacto e Información Profesional

Si deseas ponerte en contacto conmigo o conocer más sobre mi trayectoria, puedes hacerlo a través de los siguientes canales:

*   👤 **Nombre:** José Doménech Alemany
*   📍 **Ubicación:** Pego, Alicante (España)
*   📧 **Correo electrónico:** [pepepego96@gmail.com](mailto:pepepego96@gmail.com)
*   📱 **Teléfono / WhatsApp:** [+34 682 799 670](tel:+34682799670)
*   💼 **LinkedIn:** [José Doménech Alemany](https://www.linkedin.com/in/pepe-domenech-b07394218/)
*   📄 **Currículum Vitae:** Disponible directamente en la ruta de recursos del proyecto: [`src/assets/CV/Curriculum_José_Doménech_Alemany.pdf`](file:///c:/Users/pepep/Documents/portfolio/src/assets/CV/Curriculum_José_Doménech_Alemany.pdf) (o descárgalo desde la web).

