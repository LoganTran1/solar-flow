// Auto-rotation script
(function() {
    let autoRotateInterval = null;
    let selectionMade = false;
    const viewList = ['social', 'thankyou', 'disqualify'];
    let currentViewIndex = 0;
    const ROTATION_INTERVAL = 3500; // 3.5 seconds
    
    // Function to rotate to the next view
    function rotateToNextView() {
        if (selectionMade) return;
        
        // Advance to next view
        currentViewIndex = (currentViewIndex + 1) % viewList.length;
        const nextView = viewList[currentViewIndex];
        
        console.log('Auto-rotating to:', nextView);
        
        // Call appropriate show function
        if (nextView === 'social') {
            window.showSocial();
        } else if (nextView === 'thankyou') {
            window.showThankYou();
        } else if (nextView === 'disqualify') {
            window.showDisqualify();
        }
    }
    
    // Start auto-rotation
    function startAutoRotation() {
        stopAutoRotation(); // Clear any existing interval
        autoRotateInterval = setInterval(rotateToNextView, ROTATION_INTERVAL);
        console.log('Auto-rotation started');
    }
    
    // Stop auto-rotation
    function stopAutoRotation() {
        if (autoRotateInterval) {
            clearInterval(autoRotateInterval);
            autoRotateInterval = null;
            console.log('Auto-rotation stopped');
        }
    }
    
    // Override the existing showSocial, showThankYou, and showDisqualify functions
    const originalShowSocial = window.showSocial;
    const originalShowThankYou = window.showThankYou;
    const originalShowDisqualify = window.showDisqualify;
    
    window.showSocial = function() {
        stopAutoRotation();
        selectionMade = true; // Mark that a selection was made
        originalShowSocial();
        currentViewIndex = 0; // Update current index
        console.log('Social selected - auto-rotation disabled');
    };
    
    window.showThankYou = function() {
        stopAutoRotation();
        selectionMade = true; // Mark that a selection was made
        originalShowThankYou();
        currentViewIndex = 1; // Update current index
        console.log('Thank You selected - auto-rotation disabled');
    };
    
    window.showDisqualify = function() {
        stopAutoRotation();
        selectionMade = true; // Mark that a selection was made
        originalShowDisqualify();
        currentViewIndex = 2; // Update current index
        console.log('Disqualify selected - auto-rotation disabled');
    };
    
    // Start auto-rotation on page load, but only if no selection has been made
    if (!selectionMade) {
        console.log('Starting initial auto-rotation');
        startAutoRotation();
    }
})();