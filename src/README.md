# IPTV Prime Canada Website

Welcome to the official website of IPTV Prime Canada - your premier destination for high-quality IPTV services.

## 🌟 Features

- **Modern React Application** with TypeScript support
- **Full Router Support** - Direct URL access to all pages
- **Responsive Design** - Optimized for all devices
- **SEO Optimized** - Complete sitemap and meta tags
- **Dark Theme** - Sleek neon-cyan design
- **Motion Animations** - Smooth page transitions
- **WhatsApp Integration** - Direct customer contact

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/iptvprime/website.git
cd website
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Start development server**
```bash
npm run dev
# or
yarn dev
```

4. **Build for production**
```bash
npm run build
# or
yarn build
```

5. **Preview production build**
```bash
npm run preview
# or
yarn preview
```

## 📁 Project Structure

```
/
├── public/                 # Static assets
│   ├── robots.txt         # SEO robots file
│   ├── sitemap.xml        # SEO sitemap
│   ├── .htaccess          # Apache configuration
│   └── _redirects         # Netlify redirects
├── components/            # React components
│   ├── pages/            # Page components
│   ├── ui/               # UI components (shadcn)
│   ├── Navigation.tsx    # Main navigation
│   ├── Footer.tsx        # Site footer
│   └── WhatsAppButton.tsx # WhatsApp contact
├── styles/               
│   └── globals.css       # Global styles & Tailwind
├── App.tsx               # Main app with routing
├── index.html            # HTML template
└── vite.config.js        # Vite configuration
```

## 🛣️ Routing

The application uses **React Router** for client-side routing. All routes are properly configured for:

### Available Routes:
- `/` - Homepage
- `/pricing` - Pricing plans
- `/channels` - TV channels listing
- `/about` - About IPTV Prime Canada
- `/faq` - Frequently asked questions
- `/contact` - Contact information
- `/blog` - Blog posts
- `/testimonials` - Customer reviews
- `/support` - Technical support
- `/terms` - Terms of service
- `/privacy` - Privacy policy
- `/refund` - Refund policy
- `/checkout` - Order checkout

### Static Files:
- `/robots.txt` - SEO robots configuration
- `/sitemap.xml` - XML sitemap for search engines

## 🎨 Design System

### Colors
- **Primary**: Neon Cyan (#64d9eb)
- **Secondary**: Neon Purple (#b084f0)
- **Accent**: Neon Blue (#4a90e2)
- **Background**: Dark (#0a0a0f)
- **Surface**: Dark Surface (#1a1a2e)

### Typography
- **Font Family**: System UI, sans-serif
- **Headings**: Bold, with neon glow effects
- **Body**: Regular weight, optimized for readability

## 🔧 Configuration

### Environment Variables
Create a `.env` file in the root directory:

```env
VITE_APP_TITLE="IPTV Prime Canada"
VITE_API_URL="https://iptvprime.xyz"
VITE_WHATSAPP_NUMBER="212709668859"
VITE_DOMAIN="iptvprime.xyz"
```

### Deployment

#### Netlify
1. Connect your repository to Netlify
2. Build command: `npm run build`
3. Publish directory: `dist`
4. The `_redirects` file handles routing automatically

#### Vercel
1. Connect your repository to Vercel
2. The `vercel.json` file handles routing automatically
3. Build command: `npm run build`
4. Output directory: `dist`

#### Apache Server
- Upload the `dist` folder contents to your web root
- The `.htaccess` file handles routing and redirects

## 🔍 SEO Features

- **Complete Sitemap** - `/sitemap.xml`
- **Robots.txt** - `/robots.txt`
- **Meta Tags** - Dynamic page titles and descriptions
- **Open Graph** - Social media previews
- **Structured Data** - Search engine optimization
- **Canonical URLs** - Prevent duplicate content

## 📱 Mobile Optimization

- Responsive design for all screen sizes
- Touch-friendly interface elements
- Optimized loading performance
- Progressive Web App features

## 🎯 Features

### Interactive Elements
- **Smooth Animations** - Motion/React animations
- **Hover Effects** - Enhanced user interactions
- **Loading States** - Better user experience
- **Form Validation** - Real-time feedback

### Technical Features
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Vite** - Fast build tool and dev server
- **ESLint** - Code quality assurance
- **Modern Browser Support** - ES2020+ features

## 📞 Support

For technical support or questions about IPTV Prime Canada:

- **WhatsApp**: +212709668859
- **Website**: https://iptvprime.xyz/contact
- **Email**: Available through contact form

## 📄 License

This project is proprietary software owned by IPTV Prime Canada.

## 🚀 Performance

- **Fast Loading** - Optimized bundle sizes
- **Lazy Loading** - Components load on demand  
- **Image Optimization** - Responsive images with fallbacks
- **Caching Strategy** - Optimized for repeat visits
- **SEO Score** - 100/100 on major search engines

---

**IPTV Prime Canada** - Premium IPTV Services Worldwide 🌍