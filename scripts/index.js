readOptions().then(opt=>{
    startOptions(opt);
    printSavedOptionsInSettingsForm();
    createFocusTimer();
    createBreakTimer();
}).catch((err)=>{
    let opt = JSON.stringify( { 
        focus: {
            maxhh: 0,
            maxmm: 25,
        },
        break: {
            maxhh: 0,
            maxmm: 5,
        }
    })

    startOptions(opt);
    printSavedOptionsInSettingsForm();
    createFocusTimer();
    createBreakTimer();
});

//I get this function is a random site
function isElectron() {
    // Renderer process
    if (typeof window !== 'undefined' && typeof window.process === 'object' && window.process.type === 'renderer') {
        return true;
    }

    // Main process
    if (typeof process !== 'undefined' && typeof process.versions === 'object' && !!process.versions.electron) {
        return true;
    }

    // Detect the user agent when the `nodeIntegration` option is set to true
    if (typeof navigator === 'object' && typeof navigator.userAgent === 'string' && navigator.userAgent.indexOf('Electron') >= 0) {
        return true;
    }

    return false;
}