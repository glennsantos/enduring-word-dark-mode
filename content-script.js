// Enduring Word Dark Mode Content Script

(function() {
    'use strict';

    // Check if dark mode is enabled (default to true for this extension)
    let darkModeEnabled = true;

    // Function to aggressively apply dark mode to all elements
    function applyDarkModeToNewElements() {
        // Target any new elements that might have been added dynamically
        const allElements = document.querySelectorAll('*');
        
        allElements.forEach(element => {
            // Skip if already processed
            if (element.getAttribute('data-dark-mode-processed')) return;
            
            element.setAttribute('data-dark-mode-processed', 'true');
            
            // Force dark backgrounds on all elements
            const computedStyle = window.getComputedStyle(element);
            const bgColor = computedStyle.backgroundColor;
            const textColor = computedStyle.color;
            
            // Override light backgrounds
            if (bgColor === 'rgb(255, 255, 255)' || 
                bgColor === 'white' || 
                bgColor === '#fff' || 
                bgColor === '#ffffff' ||
                element.style.backgroundColor === 'white' || 
                element.style.backgroundColor === '#fff' || 
                element.style.backgroundColor === '#ffffff') {
                element.style.setProperty('background-color', '#1a1a1a', 'important');
            }
            
            // Override dark text colors
            if (textColor === 'rgb(0, 0, 0)' || 
                textColor === 'black' || 
                textColor === '#000' || 
                textColor === '#000000' ||
                element.style.color === 'black' || 
                element.style.color === '#000' || 
                element.style.color === '#000000') {
                element.style.setProperty('color', '#e0e0e0', 'important');
            }
            
            // Handle blue text specifically
            if (textColor === 'rgb(0, 0, 255)' || 
                textColor === 'blue' || 
                textColor === '#0000ff' || 
                textColor === '#00f' ||
                element.style.color === 'blue' || 
                element.style.color === '#0000ff' || 
                element.style.color === '#00f') {
                element.style.setProperty('color', '#87ceeb', 'important');
            }
            
            // Force specific element types
            const tagName = element.tagName.toLowerCase();
            switch(tagName) {
                case 'body':
                case 'html':
                    element.style.setProperty('background-color', '#1a1a1a', 'important');
                    element.style.setProperty('color', '#e0e0e0', 'important');
                    break;
                case 'header':
                case 'nav':
                case 'footer':
                    element.style.setProperty('background-color', '#2d2d2d', 'important');
                    element.style.setProperty('color', '#e0e0e0', 'important');
                    break;
                case 'div':
                case 'section':
                case 'article':
                case 'main':
                    if (!element.style.backgroundColor || element.style.backgroundColor === 'transparent') {
                        element.style.setProperty('background-color', '#1a1a1a', 'important');
                    }
                    element.style.setProperty('color', '#e0e0e0', 'important');
                    break;
                case 'a':
                    element.style.setProperty('color', '#87ceeb', 'important');
                    break;
                case 'h1':
                case 'h2':
                case 'h3':
                case 'h4':
                case 'h5':
                case 'h6':
                case 'p':
                case 'span':
                case 'li':
                    element.style.setProperty('color', '#e0e0e0', 'important');
                    element.style.setProperty('background-color', 'transparent', 'important');
                    break;
            }
        });
    }

    // Function to handle specific Enduring Word elements
    function handleSpecificElements() {
        // Handle header area
        const headers = document.querySelectorAll('header, .header, #header, .site-header, .main-header');
        headers.forEach(header => {
            header.style.setProperty('background-color', '#2d2d2d', 'important');
            header.style.setProperty('color', '#e0e0e0', 'important');
        });

        // Handle sidebar
        const sidebars = document.querySelectorAll('.sidebar, #sidebar, .secondary, #secondary, .widget-area');
        sidebars.forEach(sidebar => {
            sidebar.style.setProperty('background-color', '#2d2d2d', 'important');
            sidebar.style.setProperty('color', '#e0e0e0', 'important');
        });

        // Handle navigation
        const navs = document.querySelectorAll('nav, .nav, .navigation, .menu, .navbar');
        navs.forEach(nav => {
            nav.style.setProperty('background-color', '#2d2d2d', 'important');
            nav.style.setProperty('color', '#e0e0e0', 'important');
        });

        // Handle all links
        const links = document.querySelectorAll('a');
        links.forEach(link => {
            link.style.setProperty('color', '#87ceeb', 'important');
        });

        // Handle all text elements
        const textElements = document.querySelectorAll('p, span, div, h1, h2, h3, h4, h5, h6, li');
        textElements.forEach(el => {
            if (el.style.color === 'blue' || el.style.color === '#0000ff' || el.style.color === '#00f') {
                el.style.setProperty('color', '#87ceeb', 'important');
            } else if (!el.style.color || el.style.color === 'black' || el.style.color === '#000') {
                el.style.setProperty('color', '#e0e0e0', 'important');
            }
        });
    }

    // Function to handle images that might need dark mode treatment
    function handleImages() {
        const images = document.querySelectorAll('img');
        images.forEach(img => {
            // Add a subtle filter to make images less bright in dark mode
            if (!img.style.filter) {
                img.style.setProperty('filter', 'brightness(0.8) contrast(1.1)', 'important');
            }
        });
    }

    // Function to handle any embedded content or iframes
    function handleEmbeddedContent() {
        const iframes = document.querySelectorAll('iframe');
        iframes.forEach(iframe => {
            // Try to apply dark mode to iframe content if same-origin
            try {
                if (iframe.contentDocument) {
                    const iframeBody = iframe.contentDocument.body;
                    if (iframeBody) {
                        iframeBody.style.setProperty('background-color', '#1a1a1a', 'important');
                        iframeBody.style.setProperty('color', '#e0e0e0', 'important');
                    }
                }
            } catch (e) {
                // Cross-origin iframe, can't modify
                console.log('Cannot modify cross-origin iframe');
            }
        });
    }

    // Function to handle the cookie notice specifically
    function handleCookieNotice() {
        const cookieNotice = document.querySelector('.cookie-notice, [class*="cookie"], [id*="cookie"]');
        if (cookieNotice) {
            cookieNotice.style.setProperty('background-color', '#2d2d2d', 'important');
            cookieNotice.style.setProperty('color', '#e0e0e0', 'important');
            cookieNotice.style.setProperty('border', '1px solid #404040', 'important');
        }
    }

    // Function to handle any popup modals
    function handleModals() {
        const modals = document.querySelectorAll('.modal, .popup, [role="dialog"]');
        modals.forEach(modal => {
            modal.style.setProperty('background-color', '#2d2d2d', 'important');
            modal.style.setProperty('color', '#e0e0e0', 'important');
            modal.style.setProperty('border', '1px solid #404040', 'important');
        });
    }

    // Function to handle borders specifically - ensure all borders are dark
    function handleBorders() {
        const allElements = document.querySelectorAll('*');
        allElements.forEach(element => {
            const computedStyle = window.getComputedStyle(element);
            
            // Check for any white or light borders
            const borderColors = [
                computedStyle.borderTopColor,
                computedStyle.borderRightColor,
                computedStyle.borderBottomColor,
                computedStyle.borderLeftColor,
                computedStyle.borderColor
            ];
            
            // Check if any border color is white or light
            borderColors.forEach(color => {
                if (color === 'rgb(255, 255, 255)' || 
                    color === 'white' || 
                    color === '#fff' || 
                    color === '#ffffff' ||
                    color === 'rgb(240, 240, 240)' ||
                    color === '#f0f0f0' ||
                    color === 'rgb(221, 221, 221)' ||
                    color === '#ddd' ||
                    color === '#dddddd') {
                    element.style.setProperty('border-color', '#000', 'important');
                }
            });
            
            // Also check inline styles for white borders
            if (element.style.borderColor === 'white' || 
                element.style.borderColor === '#fff' || 
                element.style.borderColor === '#ffffff' ||
                element.style.border && element.style.border.includes('white') ||
                element.style.border && element.style.border.includes('#fff') ||
                element.style.border && element.style.border.includes('#ffffff')) {
                element.style.setProperty('border-color', '#000', 'important');
            }
        });
    }

    // Function to force dark mode on the entire page
    function forceDarkMode() {
        // Set body and html
        document.body.style.setProperty('background-color', '#1a1a1a', 'important');
        document.body.style.setProperty('color', '#e0e0e0', 'important');
        document.documentElement.style.setProperty('background-color', '#1a1a1a', 'important');
        document.documentElement.style.setProperty('color', '#e0e0e0', 'important');

        // Apply to all elements
        applyDarkModeToNewElements();
        handleSpecificElements();
        handleImages();
        handleEmbeddedContent();
        handleCookieNotice();
        handleModals();
        handleBorders();
    }

    // Observer to watch for dynamically added content
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
                // New nodes were added, apply dark mode to them
                setTimeout(() => {
                    forceDarkMode();
                }, 50);
            }
        });
    });

    // Start observing
    if (document.body) {
        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    }

    // Initial application when the script loads
    function initialize() {
        forceDarkMode();
        
        // Add a class to the body to indicate dark mode is active
        document.body.classList.add('enduring-word-dark-mode');
        
        // Run again after a short delay to catch any late-loading content
        setTimeout(forceDarkMode, 500);
        setTimeout(forceDarkMode, 1000);
        setTimeout(forceDarkMode, 2000);
    }

    // Run initialization when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initialize);
    } else {
        initialize();
    }

    // Listen for messages from popup to toggle dark mode
    chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
        if (request.action === 'toggleDarkMode') {
            darkModeEnabled = !darkModeEnabled;
            
            if (darkModeEnabled) {
                document.body.classList.add('enduring-word-dark-mode');
                initialize();
            } else {
                document.body.classList.remove('enduring-word-dark-mode');
                // Remove dark mode styles
                location.reload(); // Simplest way to restore original styles
            }
            
            sendResponse({status: 'toggled', enabled: darkModeEnabled});
        }
    });

})(); 