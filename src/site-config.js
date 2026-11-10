/* BrandXploda configuration. Update the three project URLs and names below. */
const heroImage = document.querySelector('.hero-visual img');
if (heroImage) {
  heroImage.src = 'assets/growing-business-hero-logo.gif';
  heroImage.alt = 'BrandXploda growing business logo';
}

window.BRANDXPLODA_CONFIG = {
  portfolio: [
    {
      title: 'Bunnybread Kota',
      category: 'Live website showcase',
      url: 'https://bunnybread-kota-business.vercel.app'
    },
    {
      title: 'Butchery E-commerce',
      category: 'Live website showcase',
      url: 'https://butchery-ecommerce.vercel.app'
    },
    {
      title: 'Ice Cream Business',
      category: 'Live website showcase',
      url: 'https://icecream-business.vercel.app'
    }
  ],
  contactEmail: 'brandxploda.hello@gmail.com',
  whatsappNumber: ''
};

// Open projects separately and suppress embedded-page scrollbars in the gallery.
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('#portfolioGrid a[href^="https://"]').forEach(link => {
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
  });

  document.querySelectorAll('#portfolioGrid iframe').forEach(frame => {
    frame.setAttribute('scrolling', 'no');
    frame.style.overflow = 'hidden';
  });
});
