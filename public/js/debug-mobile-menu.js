// Debug script for mobile menu - Add this temporarily to troubleshoot
(function() {
  console.log('=== Mobile Menu Debug Script Loaded ===');
  
  window.addEventListener('load', function() {
    console.log('Page loaded, checking elements...');
    
    const toggleMenu = document.querySelector('.toggle-menu') || document.getElementById('toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    console.log('Toggle menu element:', toggleMenu);
    console.log('Mobile menu element:', mobileMenu);
    
    if (toggleMenu) {
      console.log('Toggle menu computed style:', window.getComputedStyle(toggleMenu));
      console.log('Toggle menu z-index:', window.getComputedStyle(toggleMenu).zIndex);
      console.log('Toggle menu pointer-events:', window.getComputedStyle(toggleMenu).pointerEvents);
      
      // Add a test click handler
      toggleMenu.addEventListener('click', function(e) {
        console.log('DIRECT CLICK DETECTED on toggle menu!', e);
      }, true);
      
      // Check all child elements
      const children = toggleMenu.querySelectorAll('*');
      console.log('Toggle menu children:', children);
      children.forEach((child, index) => {
        console.log(`Child ${index}:`, child, 'pointer-events:', window.getComputedStyle(child).pointerEvents);
      });
    } else {
      console.error('Toggle menu element NOT FOUND!');
    }
    
    if (mobileMenu) {
      console.log('Mobile menu display:', window.getComputedStyle(mobileMenu).display);
    } else {
      console.error('Mobile menu element NOT FOUND!');
    }
    
    // Check if jQuery is loaded
    console.log('jQuery loaded:', typeof jQuery !== 'undefined');
    if (typeof jQuery !== 'undefined') {
      console.log('jQuery version:', jQuery.fn.jquery);
    }
    
    // Listen for all clicks on the document
    document.addEventListener('click', function(e) {
      console.log('Click detected on:', e.target);
      console.log('Click coordinates:', e.clientX, e.clientY);
    }, true);
  });
})();
