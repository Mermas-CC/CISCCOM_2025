# Conference Landing Page 🚀

Una landing page moderna para conferencias con animaciones 3D impresionantes creada con Next.js, Three.js y Framer Motion.

## ✨ Características

- **Animaciones 3D**: Esfera animada con efectos de distorsión usando Three.js y React Three Fiber
- **Animaciones fluidas**: Transiciones y efectos con Framer Motion
- **Diseño responsivo**: Optimizado para todos los dispositivos
- **Secciones completas**:
  - Hero con animación 3D de fondo
  - Acerca del evento
  - Ponentes destacados
  - Agenda interactiva (3 días)
  - Registro con precios
  - Footer con información de contacto
- **Tema oscuro**: Diseño moderno con gradientes purple/blue
- **Scroll suave**: Navegación fluida entre secciones

## 🛠️ Tecnologías

- **Next.js 16** - Framework React con App Router
- **TypeScript** - Tipado estático
- **Tailwind CSS 4** - Estilos utility-first
- **Three.js** - Gráficos 3D
- **React Three Fiber** - Three.js en React
- **React Three Drei** - Helpers para R3F
- **Framer Motion** - Librería de animaciones

## 🚀 Inicio Rápido

### Instalación

```bash
# Instalar dependencias
pnpm install
```

### Desarrollo

```bash
# Iniciar servidor de desarrollo
pnpm dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

### Producción

```bash
# Build para producción
pnpm build

# Iniciar servidor de producción
pnpm start
```

## 📁 Estructura del Proyecto

```
conference-landing/
├── app/
│   ├── page.tsx          # Página principal
│   ├── layout.tsx        # Layout principal
│   └── globals.css       # Estilos globales
├── components/
│   ├── Navbar.tsx        # Barra de navegación
│   ├── Hero.tsx          # Sección hero con 3D
│   ├── Scene3D.tsx       # Escena 3D con Three.js
│   ├── About.tsx         # Sección acerca
│   ├── Speakers.tsx      # Ponentes
│   ├── Schedule.tsx      # Agenda del evento
│   ├── Registration.tsx  # Registro y precios
│   └── Footer.tsx        # Pie de página
└── public/               # Archivos estáticos
```

## 🎨 Personalización

### Colores

Los colores principales están definidos en los componentes usando Tailwind:

- Purple: `purple-400`, `purple-600`
- Blue: `blue-400`, `blue-600`

### Contenido

Edita los archivos de componentes para cambiar:

- Fechas y ubicación del evento
- Información de ponentes
- Agenda y horarios
- Precios de tickets

### Animación 3D

Modifica `components/Scene3D.tsx` para personalizar:

- Forma del objeto 3D
- Colores y materiales
- Velocidad de animación
- Partículas flotantes

## 📱 Responsive Design

La landing está optimizada para:

- Mobile (< 768px)
- Tablet (768px - 1024px)
- Desktop (> 1024px)

## 🌐 Deploy

### Vercel (Recomendado)

```bash
# Conecta tu repositorio a Vercel
vercel
```

### Otros Servicios

El proyecto es compatible con cualquier servicio que soporte Next.js:

- Netlify
- Railway
- AWS Amplify
- Google Cloud Run

---

Creado con ❤️ usando Next.js y Three.js
