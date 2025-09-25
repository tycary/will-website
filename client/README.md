# Will Cary - Portfolio Website

A modern, responsive portfolio website built with React, Vite, and Material-UI showcasing mechanical engineering projects and skills.

## 🚀 Features

- **Modern Design**: Clean, professional UI with dark theme and gradient accents
- **Responsive**: Mobile-first design that works on all devices
- **Fast**: Built with Vite for lightning-fast development and builds
- **Animated**: Smooth transitions and micro-interactions throughout
- **SEO Optimized**: Meta tags and structured data for better search visibility
- **Accessible**: WCAG compliant with keyboard navigation and screen reader support

## 🛠️ Tech Stack

- **Frontend**: React 19, Material-UI 7, React Router 7
- **Build Tool**: Vite 7
- **Styling**: Emotion (CSS-in-JS), Material-UI theming
- **Icons**: Material-UI Icons
- **Fonts**: Inter (Google Fonts)

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/will-website.git
cd will-website/client
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Building for Production

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## 🚀 Deployment

### GitHub Pages

1. Install gh-pages:
```bash
npm install -g gh-pages
```

2. Deploy:
```bash
npm run deploy:github
```

### Netlify

1. Install Netlify CLI:
```bash
npm install -g netlify-cli
```

2. Login and deploy:
```bash
netlify login
npm run deploy:netlify
```

### Vercel

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
npm run deploy:vercel
```

### Manual Deployment

1. Build the project:
```bash
npm run build
```

2. Upload the `dist/` folder to any static hosting service:
   - **Netlify**: Drag and drop the `dist` folder to [netlify.com/drop](https://app.netlify.com/drop)
   - **Vercel**: Use the Vercel dashboard or CLI
   - **GitHub Pages**: Use the gh-pages branch
   - **Firebase Hosting**: Use Firebase CLI
   - **Surge.sh**: Use `surge dist/`

## 📁 Project Structure

```
client/
├── public/           # Static assets
├── src/
│   ├── App.jsx      # Main application component
│   ├── main.jsx     # Application entry point
│   ├── theme.js     # Material-UI theme configuration
│   └── index.css    # Global styles and animations
├── index.html       # HTML template
├── package.json     # Dependencies and scripts
└── vite.config.js   # Vite configuration
```

## 🎨 Customization

### Updating Content

1. **Personal Information**: Edit the content in `App.jsx` components (Home, About, Contact)
2. **Projects**: Update the `projectList` array in the Projects component
3. **Skills**: Modify the `skills` array in the About component
4. **Social Links**: Update links in the Footer and Contact components

### Styling

1. **Theme**: Modify colors and typography in `src/theme.js`
2. **Global Styles**: Update `src/index.css` for global styles and animations
3. **Component Styles**: Material-UI's `sx` prop is used throughout for component-specific styling

### SEO & Meta Tags

Update the meta tags in `index.html`:
- Title and description
- Open Graph tags for social media
- Twitter card information
- Favicon and theme colors

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

### Code Style

The project uses ESLint for code linting. The configuration is in `eslint.config.js`.

## 📱 Browser Support

- Chrome/Chromium 88+
- Firefox 85+
- Safari 14+
- Edge 88+

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙋‍♂️ Contact

Will Cary - [will.cary@example.com](mailto:will.cary@example.com)

Project Link: [https://github.com/yourusername/will-website](https://github.com/yourusername/will-website)

---

Built with ❤️ using React, Vite, and Material-UI+ Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
