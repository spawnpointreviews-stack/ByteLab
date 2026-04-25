/**
 * BYTE LAB | CENTRAL CONFIGURATION
 * Manage all business links, emails, and service details here.
 */

const ByteLabConfig = {
    // --- GLOBAL SETTINGS ---
    formLink: "https://docs.google.com/forms/d/e/1FAIpQLScBeJDDbKZSMNAfLUS1O2w4-ab-2PL9eP0MhZyIdF50zRyDhg/viewform?usp=dialog",
    donationLink: "https://square.link/u/qLlTrWKn", // PayPal, CashApp, etc.
    email: "spawnpointreviews@gmail.com",

    // --- SERVICE DATA ---
    // These values can be used to dynamically update the site later
    services: {
        builds: {
            active: true,
            price: "$50 Flat + 5% Parts",
            diagnosticIncluded: true
        },
        tuneup: {
            active: true,
            price: "$30 - $50",
            diagnosticIncluded: true
        },
        laptop: {
            active: true,
            price: "$50 + Parts",
            diagnosticIncluded: true
        },
        console: {
            active: true,
            price: "Starting at $40",
            diagnosticIncluded: true
        },
        peripherals: {
            active: true,
            price: "Varies",
            diagnosticIncluded: true
        }
    }
};

/**
 * CORE LOGIC 
 * Automatically applies the settings above to your HTML elements.
 */
document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Apply Intake Form Links
    const actionButtons = document.querySelectorAll(".cta-link");
    actionButtons.forEach(btn => {
        btn.href = ByteLabConfig.formLink;
    });
    
    // 2. Apply Donation Links
    const donateButtons = document.querySelectorAll(".donate-link");
    donateButtons.forEach(btn => {
        btn.href = ByteLabConfig.donationLink;
    });

    // 3. Apply Contact Email
    const emailLinks = document.querySelectorAll(".email-link");
    emailLinks.forEach(link => {
        link.href = `mailto:${ByteLabConfig.email}`;
    });

    console.log("Byte Lab Config Loaded Successfully.");
});
