const REDIRECT_METADATA = {
    common: {
        // Metadata image/file guidelines:
        // - ogImage: 1200x630 px PNG/JPG, <5 MB (best for Facebook, LinkedIn, WhatsApp, X previews).
        // - icon: 512x512 px PNG (square). Can also be .ico for broad favicon compatibility.
        // - appleTouchIcon: 180x180 px PNG (recommended for iOS home screen icon).
        // - Keep important text/logo centered; many platforms crop edges.
        // - Use absolute URL if hosted elsewhere; relative path is fine for local repo assets.
        siteName: "Random Access Labs",
        title: "Random Access Labs | Redirect",
        description: "Open the app or install it from your app store.",
        ogType: "website",
        twitterCard: "summary_large_image",
        icon: "./assets/common/Logo_RAL_512x512.png",
        appleTouchIcon: "./assets/common/Logo_RAL_180x180.png",
        ogImage: "./assets/common/Logo_RAL_1200x630.png"
    }
};

// Add new apps to Random Access Labs here
const APP_CONFIGS = {
    "sylo-game": {
        name: "SYLO",
        pageTitle: "Open SYLO Game",
        metadata: {
            // Per-app overrides use the same specs as common metadata above.
            description: "Open SYLO instantly or install it from your app store.",
            icon: "./assets/sylo-game/sylo-icon-512.png",
            appleTouchIcon: "./assets/sylo-game/sylo-icon-180.jpg",
            ogImage: "./assets/sylo-game/sylo-icon-1200x630.jpg"
        },
        iosStore: "https://apps.apple.com/us/app/sylo/id6759213888",
        androidStore: "https://play.google.com/store/apps/details?id=com.randomaccesslabs.sylo",
        deepLink: "sylo-game://",
        webFallback: "https://random-access-labs.github.io/#current-production"
    },
    qrido: {
        name: "QRido",
        pageTitle: "Open QRido App",
        metadata: {
            title: "Open QRido App",
            description: "Open QRido instantly",
            icon: "./assets/common/Logo_RAL_512x512.png",
            appleTouchIcon: "./assets/common/Logo_RAL_180x180.png",
            ogImage: "./assets/common/Logo_RAL_1200x630.png"
        },
        iosStore: null, // Update once launched on App Store
        androidStore: null, // Update once launched on Play Store
        webFallback: "https://qrido.bharticomputer.in"
    }
};

// Export if using modules, otherwise it sits in global scope for index.html
if (typeof module !== 'undefined') { module.exports = { APP_CONFIGS, REDIRECT_METADATA }; }
