/* BrandXploda configuration. Paste your three Vercel URLs below. */
const heroPreview = document.querySelector('.hero-visual img');
if (heroPreview) {
  heroPreview.src = 'assets/growing-business-hero-logo.gif';
  heroPreview.alt = 'BrandXploda growing business logo';
}

window.BRANDXPLODA_CONFIG = {
  portfolio: [
    { title: 'Website Project 01', category: 'Live website showcase', url: '' },
    { title: 'Website Project 02', category: 'Live website showcase', url: '' },
    { title: 'Website Project 03', category: 'Live website showcase', url: '' }
  ],
  contactEmail: '', // Set your real business email to enable the email enquiry action.
  whatsappNumber: '' // Optional: international digits only, e.g. 27XXXXXXXXX.
};
