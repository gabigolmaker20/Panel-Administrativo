🛡️ AdminPanel — Panel Administrativo Web con React JS
Proyecto desarrollado como taller práctico para la asignatura de Ingeniería de Sistemas e Informática, I Semestre 2025.
📋 Descripción
Aplicación web tipo Single Page Application (SPA) que simula un panel administrativo moderno con navegación lateral, gestión de clientes, proveedores y usuarios del sistema.
🛠️ Tecnologías Utilizadas
Tecnología	Versión	Uso
React	19.x	Biblioteca de UI
Vite	8.x	Bundler y servidor de desarrollo
React Router DOM	7.x	Navegación SPA (BrowserRouter, Routes, Route, NavLink)
Tailwind CSS	3.x	Framework de estilos utility-first
Lucide React	Latest	Iconografía moderna
Google Fonts	—	Tipografías Syne + DM Sans
📁 Estructura del Proyecto
```
admin-panel/
├── public/
├── src/
│   ├── components/
│   │   ├── Sidebar.jsx       # Barra lateral de navegación
│   │   └── Topbar.jsx        # Encabezado superior
│   ├── pages/
│   │   ├── Dashboard.jsx     # Vista principal con estadísticas
│   │   ├── Clientes.jsx      # Gestión de clientes
│   │   ├── Proveedores.jsx   # Gestión de proveedores
│   │   ├── Usuarios.jsx      # Gestión de usuarios
│   │   └── Logout.jsx        # Confirmación de cierre de sesión
│   ├── data/
│   │   └── mockData.js       # Datos simulados (clientes, proveedores, usuarios)
│   ├── App.jsx               # Componente raíz con rutas
│   ├── main.jsx              # Punto de entrada
│   └── index.css             # Estilos globales + Tailwind
├── tailwind.config.js
├── vite.config.js
└── README.md
```
🚀 Pasos para Ejecutar
1. Clonar el repositorio
```bash
git clone https://github.com/tu-usuario/admin-panel.git
cd admin-panel
```
2. Instalar dependencias
```bash
npm install
```
3. Iniciar servidor de desarrollo
```bash
npm run dev
```
La aplicación estará disponible en `http://localhost:5173`
4. Construir para producción
```bash
npm run build
```
📌 Rutas Disponibles
Ruta	Componente	Descripción
`/`	Dashboard	Vista principal con métricas y actividad reciente
`/clientes`	Clientes	Listado y búsqueda de clientes
`/proveedores`	Proveedores	Tarjetas de proveedores con calificación
`/usuarios`	Usuarios	Tabla de usuarios con estado en tiempo real
`/logout`	Logout	Confirmación de cierre de sesión
🎨 Framework de Estilos: Tailwind CSS
Se eligió Tailwind CSS v3 por su enfoque utility-first, que permite crear interfaces personalizadas y responsivas sin escribir CSS adicional. Se complementó con:
Glassmorphism para tarjetas y paneles
CSS Variables para colores consistentes
Animaciones CSS (`animate-fade-in`, `animate-slide-up`) para transiciones suaves
Fuentes Google distintivas (Syne para títulos, DM Sans para cuerpo)
✅ Características Implementadas
[x] Barra lateral (Sidebar) con logo, navegación y perfil de usuario
[x] Barra superior (Topbar) con título dinámico, búsqueda y notificaciones
[x] Navegación SPA con `<BrowserRouter>`, `<Routes>`, `<Route>` y `<NavLink>`
[x] Dashboard con tarjetas de estadísticas, actividad reciente y top clientes
[x] Vista de Clientes con tabla filtrable por búsqueda
[x] Vista de Proveedores con tarjetas y calificaciones por estrellas
[x] Vista de Usuarios con indicadores de estado en tiempo real
[x] Vista de Logout con confirmación
[x] Diseño responsivo y dark theme profesional
[x] Datos simulados para demostración
👨‍💻 Autor
Desarrollado para: Profesor Carlos Adolfo Beltrán Castro  
Escuela de Ingeniería de Sistemas e Informática — I Semestre 2025
