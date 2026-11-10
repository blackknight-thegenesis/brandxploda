/* BrandXploda configuration. Paste your three Vercel URLs below. */
const heroPreview = document.querySelector('.hero-visual img');
if (heroPreview) {
  heroPreview.src = 'assets/growing-business-hero-logo.gif';
  heroPreview.alt = 'BrandXploda growing business logo';
}

window.BRANDXPLODA_CONFIG = {
 
portfolio: [
  {
    title: "Bunnybread Kota Websites",
    category: "Live website showcase",
    url: "bunnybread-kota-business.vercel.app"
  },
  {
    title: "Butchery Websites",
    category: "Live website showcase",
    url: "butchery-ecommerce.vercel.app"
  },
  {
    title: "Ice Cream Business Websites",
    category: "Live website showcase",
    url: "icecream-business.vercel.app"
  }
]
,
  contactEmail: 'brandxploda.hello@gmail.com', // Set your real business email to enable the email enquiry action.
  whatsappNumber: '' // Optional: international digits only, e.g. 27XXXXXXXXX.
};
