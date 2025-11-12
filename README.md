# Xhaxha Petroleum - Company Website

A modern, responsive website for Xhaxha Petroleum (Pty) Ltd, a leading petroleum wholesale company in South Africa.

## Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Modern UI**: Clean and professional user interface with smooth animations
- **Performance Optimized**: Fast loading times and optimized assets
- **SEO Friendly**: Built with search engine optimization in mind
- **Interactive Elements**: Engaging user interactions and animations
- **Contact Form**: Functional contact form with validation
- **Product Showcase**: Detailed product and service pages

## Technologies Used

- **Frontend**: React.js, React Router
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Form Handling**: React Hook Form
- **Deployment**: Vercel/Netlify (recommended)

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm (v6 or later) or Yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/xhaxha-petroleum-web.git
   cd xhaxha-petroleum-web
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

To create a production build:

```bash
npm run build
# or
yarn build
```

The build files will be in the `dist` directory.

## Project Structure

```
src/
├── assets/           # Images and other static assets
├── components/       # Reusable UI components
├── pages/            # Page components
│   ├── About.jsx
│   ├── Contact.jsx
│   ├── Home.jsx
│   ├── Products.jsx
│   └── Services.jsx
├── App.jsx           # Main application component
└── main.jsx          # Application entry point
```

## Customization

### Environment Variables

Create a `.env` file in the root directory and add any necessary environment variables:

```env
VITE_API_URL=your_api_url_here
VITE_GOOGLE_MAPS_API_KEY=your_google_maps_api_key
```

### Styling

This project uses Tailwind CSS for styling. To customize the design:

1. Edit the `tailwind.config.js` file to modify colors, fonts, and other design tokens.
2. Add custom styles in the `src/index.css` file.

## Deployment

### Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2Fyour-username%2Fxhaxha-petroleum-web)

1. Push your code to a GitHub/GitLab/Bitbucket repository.
2. Import the project on Vercel.
3. Vercel will automatically detect it's a Vite project and set up the build and output settings.
4. Click Deploy!

### Netlify

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/your-username/xhaxha-petroleum-web)

1. Push your code to a GitHub/GitLab/Bitbucket repository.
2. Import the project on Netlify.
3. Set the build command to `npm run build` and publish directory to `dist`.
4. Click Deploy site!

## Contributing

1. Fork the repository
2. Create a new branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

- **Company Name**: Xhaxha Petroleum (Pty) Ltd
- **Email**: info@xhaxhapetroleum.co.za
- **Phone**: +27 83 309 9640
- **Address**: 9 Cedar Avenue West, Fourways, Sandton 2191, South Africa

---

<p align="center">
  Built with ❤️ by Xhaxha Petroleum
</p>