/* BrandXploda configuration. Update project URLs and names below. */
const heroImage = document.querySelector('.hero-visual img, .hero-visual picture img');
if (heroImage) {
  heroImage.src = 'assets/growing-business-hero-logo.gif';
  heroImage.alt = 'BrandXploda growing business logo';
}

window.BRANDXPLODA_CONFIG = {
  portfolio: [
    { title: 'Bunnybread Kota', category: 'Live website showcase', url: 'https://bunnybread-kota-business.vercel.app' },
    { title: 'Butchery E-commerce', category: 'Live website showcase', url: 'https://butchery-ecommerce.vercel.app' },
    { title: 'Ice Cream Business', category: 'Live website showcase', url: 'https://icecream-business.vercel.app' }
  ],
  contactEmail: 'brandxploda.hello@gmail.com',
  whatsappNumber: ''
};

const layoutStyles = document.createElement('style');
layoutStyles.textContent = `
  #services .shell > .section-heading,
  #services .shell > p,
  #services .shell > #featuredServices,
  #services .shell > .catalog-header,
  #services .shell > #capabilityGrid,
  #services .shell > .catalog-footer {
    width: 100%;
    max-width: 100%;
  }
  #services .shell > p { margin: 0 0 32px; }
  #services #featuredServices,
  #services #capabilityGrid { margin-inline: auto; }
  #services #featuredServices > *,
  #services #capabilityGrid > * { min-width: 0; height: 100%; }
  #services .catalog-header {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 18px;
    margin: 40px 0 32px;
  }
  #services .catalog-header .filters {
    display: flex;
    width: 100%;
    justify-content: flex-start;
    flex-wrap: wrap;
    gap: 10px;
    margin: 0 0 16px;
    padding: 16px 0 8px;
    border-top: 1px solid var(--line);
  }
  #portfolioGrid { grid-template-columns: repeat(3, minmax(0, 1fr)); justify-content: center; width: 100%; }
  #portfolioGrid > .portfolio-card { width: 100%; min-width: 0; }
  #portfolioGrid .preview { width: 100%; overflow: hidden !important; scrollbar-width: none !important; -ms-overflow-style: none !important; }
  #portfolioGrid .preview iframe { left: 50%; transform: translateX(-50%) scale(.25); transform-origin: top center; overflow: hidden !important; border: 0; }
  #portfolioGrid .preview::-webkit-scrollbar,
  #portfolioGrid .preview iframe::-webkit-scrollbar { display: none !important; width: 0 !important; height: 0 !important; }
  @media (max-width: 760px) {
    #portfolioGrid { grid-template-columns: 1fr; }
    #services .catalog-header .filters { gap: 8px; margin-bottom: 20px; }
  }
`;
document.head.appendChild(layoutStyles);

const accentStyles = document.createElement('style');
accentStyles.textContent = `
  .brand-icon {
    color: var(--text);
    display: inline-block;
  }
  .brand-icon > span,
  .brand-icon .star,
  .brand-icon span:last-child {
    display: none !important;
  }
  .brand strong .brand-wordmark-accent,
  .hero-copy h1 .brand-tagline-accent,
  .hero-copy h1 > span:not(.period),
  .brand small .brand-tagline-accent {
    color: var(--orange);
    background: var(--gradient);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .brand strong .brand-wordmark-accent {
    display: inline-block;
    margin-inline: 0.02em;
  }
  .hero-copy h1 .brand-tagline-accent,
  .brand small .brand-tagline-accent {
    font-weight: 700;
  }
`;
document.head.appendChild(accentStyles);

document.addEventListener('DOMContentLoaded', () => {
  const services = document.getElementById('services');
  const shell = services?.querySelector('.shell');
  const heading = services?.querySelector('.section-heading');
  const intro = Array.from(services?.querySelectorAll('p') || []).find(p =>
    p.textContent.trim().startsWith('From your first website to the systems')
  );
  const featured = document.getElementById('featuredServices');
  const catalogHeader = services?.querySelector('.catalog-header');
  const capabilities = document.getElementById('capabilityGrid');
  const catalogFooter = services?.querySelector('.catalog-footer');

  if (shell && heading && intro && featured && catalogHeader && capabilities && catalogFooter) {
    shell.append(heading, intro, featured, catalogHeader, capabilities, catalogFooter);
  }

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

  document.querySelectorAll('.brand-icon').forEach(icon => {
    icon.innerHTML = 'X';
  });

  document.querySelectorAll('.brand strong').forEach(strong => {
    const text = strong.textContent.replace(/\s+/g, '');
    if (text.includes('BRANDXPLODA')) {
      strong.innerHTML = 'BRAND<span class="brand-wordmark-accent">X</span>PLODA';
    }
  });

  const heroHeading = document.querySelector('.hero-copy h1');
  if (heroHeading) {
    heroHeading.innerHTML = '<span class="brand-tagline-accent">EXPLODE</span> YOUR <span>BUSINESS</span> ONLINE<span class="period">.</span>';
  }

  document.querySelectorAll('.brand small').forEach(small => {
    const text = small.textContent.trim();
    if (/^(GROW|EXPLODE)/i.test(text)) {
      small.innerHTML = '<span class="brand-tagline-accent">EXPLODE</span> YOUR BUSINESS ONLINE.';
    }
  });
});
