const ByteLabConfig = {
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
