// Popup script for Enduring Word Dark Mode extension

document.addEventListener('DOMContentLoaded', function() {
    const toggle = document.getElementById('darkModeToggle');
    const status = document.getElementById('status');
    
    // Get current state from storage
    browser.storage.local.get(['darkModeEnabled']).then(function(result) {
        const isEnabled = result.darkModeEnabled !== false; // Default to true
        updateUI(isEnabled);
    });
    
    // Handle toggle click
    toggle.addEventListener('click', function() {
        const isCurrentlyActive = toggle.classList.contains('active');
        const newState = !isCurrentlyActive;
        
        // Update UI immediately
        updateUI(newState);
        
        // Save state
        browser.storage.local.set({darkModeEnabled: newState});
        
        // Send message to content script
        browser.tabs.query({active: true, currentWindow: true}).then(function(tabs) {
            if (tabs[0] && tabs[0].url.includes('enduringword.com')) {
                browser.tabs.sendMessage(tabs[0].id, {
                    action: 'toggleDarkMode'
                }).then(function(response) {
                    if (response) {
                        console.log('Dark mode toggled:', response.enabled);
                    }
                }).catch(function(error) {
                    console.log('Error communicating with content script:', error);
                });
            }
        });
    });
    
    function updateUI(isEnabled) {
        if (isEnabled) {
            toggle.classList.add('active');
            status.textContent = 'Dark mode is currently enabled';
        } else {
            toggle.classList.remove('active');
            status.textContent = 'Dark mode is currently disabled';
        }
    }
    
    // Check if we're on the Enduring Word website
    browser.tabs.query({active: true, currentWindow: true}).then(function(tabs) {
        if (tabs[0] && !tabs[0].url.includes('enduringword.com')) {
            status.textContent = 'Navigate to enduringword.com to use this extension';
            toggle.style.opacity = '0.5';
            toggle.style.pointerEvents = 'none';
        }
    });
}); 