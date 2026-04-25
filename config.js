const ByteLabConfig = {
    formLink: "https://docs.google.com/forms/d/e/1FAIpQLScBeJDDbKZSMNAfLUS1O2w4-ab-2PL9eP0MhZyIdF50zRyDhg/viewform?usp=dialog",
    email: "spawnpointreviews@gmail.com",

    services: {
        builds: {
            active: true,
            price: "$50 Flat + 5% Parts",
            features: ["Part Selection", "Assembly", "Cable Management"]
        },
        tuneup: {
            active: true,
            price: "$30 - $50",
            features: ["Thermal Paste", "Deep Dusting", "Fan Curves"]
        },
        laptop: {
            active: true,
            price: "$50 + Parts",
            features: ["Screens", "Keyboards", "Battery Swaps"]
        },
        console: {
            active: true, 
            price: "$40 + Parts",
            features: ["Deep Cleaning", "SSD Upgrades", "HDMI Port (Soon)"]
        },
        peripherals: {
            active: true,
            price: "Varies",
            features: ["Keycap Swaps", "Switch Lubing", "Hall Effect (Soon)"]
        }
    }
};

document.addEventListener("DOMContentLoaded", () => {
    const actionButtons = document.querySelectorAll(".cta-link");
    actionButtons.forEach(btn => btn.href = ByteLabConfig.formLink);
    
    const emailLinks = document.querySelectorAll(".email-link");
    emailLinks.forEach(link => link.href = `mailto:${ByteLabConfig.email}`);
});const ByteLabConfig = {
    // Links
    formLink: "https://docs.google.com/forms/d/e/1FAIpQLScBeJDDbKZSMNAfLUS1O2w4-ab-2PL9eP0MhZyIdF50zRyDhg/viewform?usp=dialog",
    email: "spawnpointreviews@gmail.com",

    // Service Availability (Set to true to show, false to show "Coming Soon")
    services: {
        customBuilds: {
            available: true,
            price: "$50 Flat + 5% Part Cost"
        },
        tuneUp: {
            available: true,
            price: "$30 - $50"
        },
        laptopRepair: {
            available: true,
            price: "$50 + Parts"
        },
        consoleRepair: {
            available: false, // Soldering required
            price: "TBD"
        },
        peripheralModding: {
            available: false, // Soldering required
            price: "TBD"
        }
    }
};

// Apply links to buttons automatically
document.addEventListener("DOMContentLoaded", () => {
    const actionButtons = document.querySelectorAll(".cta-link");
    actionButtons.forEach(btn => btn.href = ByteLabConfig.formLink);
    
    const emailLink = document.querySelector(".email-link");
    if(emailLink) emailLink.href = `mailto:${ByteLabConfig.email}`;
});
