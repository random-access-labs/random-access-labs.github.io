// Add new apps to Random Access Labs here
const APP_CONFIGS = {
    "sylo-game": {
        name: "SYLO",
        iosStore: "https://apps.apple.com/us/app/sylo/id6759213888",
        androidStore: "https://play.google.com/store/apps/details?id=com.randomaccesslabs.sylo",
        deepLink: "sylo-game://",
        webFallback: "https://random-access-labs.github.io/#current-production"
    },
    "spatial-counter": {
        name: "Spatial Counter",
        iosStore: "https://apps.apple.com/us/app/spacial-counter/id6772210890",
        androidStore: "https://play.google.com/store/apps/details?id=com.therandomaccesslabs.counterapp", // Coming soon
        deepLink: "spatial-counter://",
        webFallback: "https://random-access-labs.github.io/#current-production"
    },
    qrido: {
        name: "QRido",
        iosStore: null, // Update once launched on App Store
        androidStore: null, // Update once launched on Play Store
        deepLink: "qrido://",
        webFallback: "https://qrido.bharticomputer.in"
    }
};

// Export if using modules, otherwise it sits in global scope for index.html
if (typeof module !== 'undefined') { module.exports = APP_CONFIGS; }
