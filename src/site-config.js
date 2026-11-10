/* BrandXploda configuration. Update the three project URLs and names below. */
const heroImage = document.querySelector('.hero-visual img, .hero-visual picture img');
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

const previewStyles = document.createElement('style');
previewStyles.textContent = `
  #portfolioGrid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    justify-content: center;
    width: 100%;
  }
  #portfolioGrid > .portfolio-card {
    width: 100%;
    min-width: 0;
  }
  #portfolioGrid .preview {
    width: 100%;
    overflow: hidden !important;
    scrollbar-width: none !important;
    -ms-overflow-style: none !important;
  }
  #portfolioGrid .preview iframe {
    left: 50%;
    transform: translateX(-50%) scale(.25);
    transform-origin: top center;
    overflow: hidden !important;
    border: 0;
  }
  #portfolioGrid .preview::-webkit-scrollbar,
  #portfolioGrid .preview iframe::-webkit-scrollbar {
    width: 0 !important;
    height: 0 !important;
    display: none !important;
  }
  @media (max-width: 760px) {
    #portfolioGrid { grid-template-columns: 1fr; }
  }
`;
document.head.appendChild(previewStyles);

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('#portfolioGrid a[href^="https://"]').forEach(link => {
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
  });

  document.querySelectorAll('#portfolioGrid iframe').forEach(frame => {
    frame.setAttribute('scrolling', 'no');
    frame.style.overflow = 'hidden';
    frame.style.border = '0';
  });

  document.querySelectorAll('#process .section-heading p').forEach(paragraph => {
    if (paragraph.textContent.trim() === 'A clear five-step process that keeps you involved from the first payment through final delivery.') {
      paragraph.remove();
    }
  });

  // Keep the services heading, intro, featured cards, catalogue controls, and icons in one aligned column.
  const services = document.getElementById('services');
  const servicesShell = services?.querySelector(':scope > .shell');
  const servicesHeading = servicesShell?.querySelector('.section-heading');
  const intro = servicesShell?.querySelector(':scope > p');
  const featured = document.getElementById('featuredServices');
  const catalogHeader = servicesShell?.querySelector('.catalog-header');
  const capabilities = servicesShell?.querySelector('#capabilityGrid');
  const catalogFooter = servicesShell?.querySelector('.catalog-footer');
  if (services && servicesShell && servicesHeading && intro && featured && catalogHeader && capabilities && catalogFooter) {
    services.append(servicesShell);
    servicesShell.append(servicesHeading, intro, featured, catalogHeader, capabilities, catalogFooter);
  }
});
