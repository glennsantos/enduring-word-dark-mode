// Enduring Word Dark Mode Content Script

(function() {
    'use strict';

    // Check if dark mode is enabled (default to true for this extension)
    let darkModeEnabled = true;

    // Function to apply dark mode to dynamically loaded content
    function applyDarkModeToNewElements() {
        // Target any new elements that might have been added dynamically
        const newElements = document.querySelectorAll('*:not([data-dark-mode-processed])');
        
        newElements.forEach(element => {
            element.setAttribute('data-dark-mode-processed', 'true');
            
            // Check for inline styles that might override our CSS
            if (element.style.backgroundColor === 'white' || 
                element.style.backgroundColor === '#fff' || 
                element.style.backgroundColor === '#ffffff') {
                element.style.backgroundColor = '#1a1a1a';
            }
            
            if (element.style.color === 'black' || 
                element.style.color === '#000' || 
                element.style.color === '#000000') {
                element.style.color = '#e0e0e0';
            }
        });
    }

    // Function to handle images that might need dark mode treatment
    function handleImages() {
        const images = document.querySelectorAll('img');
        images.forEach(img => {
            // Add a subtle filter to make images less bright in dark mode
            if (!img.style.filter) {
                img.style.filter = 'brightness(0.9) contrast(1.1)';
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
                        iframeBody.style.backgroundColor = '#1a1a1a';
                        iframeBody.style.color = '#e0e0e0';
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
            cookieNotice.style.backgroundColor = '#2d2d2d';
            cookieNotice.style.color = '#e0e0e0';
            cookieNotice.style.border = '1px solid #404040';
        }
    }

    // Function to handle any popup modals
    function handleModals() {
        const modals = document.querySelectorAll('.modal, .popup, [role="dialog"]');
        modals.forEach(modal => {
            modal.style.backgroundColor = '#2d2d2d';
            modal.style.color = '#e0e0e0';
            modal.style.border = '1px solid #404040';
        });
    }

    // Observer to watch for dynamically added content
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
                // New nodes were added, apply dark mode to them
                setTimeout(() => {
                    applyDarkModeToNewElements();
                    handleImages();
                    handleEmbeddedContent();
                    handleCookieNotice();
                    handleModals();
                }, 100);
            }
        });
    });

    // Start observing
    observer.observe(document.body, {
        childList: true,
        subtree: true
    });

    // Initial application when the script loads
    function initialize() {
        applyDarkModeToNewElements();
        handleImages();
        handleEmbeddedContent();
        handleCookieNotice();
        handleModals();
        
        // Add a class to the body to indicate dark mode is active
        document.body.classList.add('enduring-word-dark-mode');
    }

    // Run initialization when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initialize);
    } else {
        initialize();
    }

    // Also run after a short delay to catch any late-loading content
    setTimeout(initialize, 1000);

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
                const styleSheets = document.styleSheets;
                for (let i = 0; i < styleSheets.length; i++) {
                    if (styleSheets[i].href && styleSheets[i].href.includes('dark-mode.css')) {
                        styleSheets[i].disabled = true;
                    }
                }
            }
            
            sendResponse({status: 'toggled', enabled: darkModeEnabled});
        }
    });

})(); 