// Add class to body if this is the about/homepage
(function() {
  function addAboutPageClass() {
    // Check if we're on the homepage/about page
    if (window.location.pathname === '/' || 
        window.location.pathname === '/index.html' || 
        window.location.pathname.endsWith('/about/') ||
        window.location.pathname.endsWith('/about.html')) {
      document.body.classList.add('page--about');
    }
    
    // Also check by content as fallback
    const welcomeText = document.querySelector('.page__content p:first-of-type');
    if (welcomeText && welcomeText.textContent.includes('Welcome to My Homepage')) {
      document.body.classList.add('page--about');
    }
  }
  
  // Run immediately if DOM is already loaded, otherwise wait
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', addAboutPageClass);
  } else {
    addAboutPageClass();
  }
})();

