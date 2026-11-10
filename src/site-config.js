/* BrandXploda configuration. Paste your three Vercel URLs below. */
const heroPreviewStyles = document.createElement('style');
heroPreviewStyles.textContent = '.hero-visual{display:none!important}.hero-grid{grid-template-columns:1fr!important}';
document.head.append(heroPreviewStyles);

window.BRANDXPLODA_CONFIG = {
  portfolio: [
    { title: 'Website Project 01', category: 'Live website showcase', url: '' },
    { title: 'Website Project 02', category: 'Live website showcase', url: '' },
    { title: 'Website Project 03', category: 'Live website showcase', url: '' }
  ],
  contactEmail: '', // Set your real business email to enable the email enquiry action.
  whatsappNumber: '' // Optional: international digits only, e.g. 27XXXXXXXXX.
};
