# Mahdi Ahmed Hasan Al-Sheikh Contracting Est Website

A professional, modern, and fully responsive website for Mahdi Ahmed Hasan Al-Sheikh Contracting Est - Manpower & Heavy Equipments Consultancy.

## Features

- 🎨 **Modern & Professional Design** - Beautiful UI with smooth animations
- 📱 **Fully Responsive** - Works perfectly on all devices (mobile, tablet, desktop)
- ⚡ **Fast Performance** - Built with React and Vite for optimal speed
- 🎯 **Comprehensive Services** - Detailed listing of all services:
  - Manpower / Skilled & Unskilled Services
  - Equipment Rental Services
  - Professional Support Services
- 📧 **Contact Form** - Easy way for clients to get in touch
- 🧭 **Smooth Navigation** - Intuitive navigation with smooth scrolling

## Technologies Used

- **React 18** - Modern React with hooks
- **Vite** - Fast build tool and dev server
- **React Icons** - Beautiful icon library
- **CSS3** - Modern styling with CSS Grid and Flexbox

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
website_2/
├── public/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Header.css
│   │   ├── Hero.jsx
│   │   ├── Hero.css
│   │   ├── About.jsx
│   │   ├── About.css
│   │   ├── Services.jsx
│   │   ├── Services.css
│   │   ├── Contact.jsx
│   │   ├── Contact.css
│   │   ├── Footer.jsx
│   │   └── Footer.css
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Customization

### Update Contact Information

Edit the contact details in `src/components/Contact.jsx` and `src/components/Footer.jsx`:
- Phone number
- Email address
- Location/Address

### Update Company Information

Edit the company details in:
- `src/components/About.jsx` - About section content
- `src/components/Hero.jsx` - Hero section title and description
- `src/components/Header.jsx` - Header logo and company name

### Change Colors

Update CSS variables in `src/index.css`:
```css
:root {
  --primary-color: #1e3a8a;
  --secondary-color: #f59e0b;
  --accent-color: #3b82f6;
  /* ... */
}
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

© 2024 Mahdi Ahmed Hasan Al-Sheikh Contracting Est. All rights reserved.

