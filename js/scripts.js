import { vapes } from "./vapes.js";

window.addEventListener("DOMContentLoaded", () => {
    console.log("✅ JavaScript Loaded - DOM is ready!");
    console.log("🛒 Available vapes:", vapes);

    // Select vape container
    const vapeContainer = document.querySelector("#vape-container");

    if (!vapeContainer) {
        console.error("❌ vape-container element not found in HTML!");
        return;
    }

    console.log("✅ vape-container found! Injecting vapes...");

    // Dynamically generate vape products
    vapes.forEach((vape) => {
        console.log(`🔹 Adding vape: ${vape.name}, Price: ${vape.price || "No price available"}`);

        const vapeItem = document.createElement("div");
        vapeItem.classList.add("col-md-6", "col-lg-4", "mb-5");

        vapeItem.innerHTML = `
            <div class="portfolio-item mx-auto p-3 border rounded shadow-sm">
                <div class="text-center">
                    <img class="img-fluid" src="${vape.image}" alt="${vape.name}" />
                </div>
                <div class="d-flex justify-content-between align-items-center mt-3">
                    <a href="${vape.whatsappLink}" target="_blank" class="btn btn-warning btn-sm">Comprar por WhatsApp</a>
                    <span class="fw-bold text-secondary">${vape.price ? vape.price : "No price"}</span>
                </div>
            </div>
        `;

        vapeContainer.appendChild(vapeItem);
    });

    console.log("✅ All vapes have been added!");

       // Attach click event to WhatsApp buy buttons
       setTimeout(() => {
        const buyButtons = document.querySelectorAll(".buy-button");

        if (buyButtons.length === 0) {
            console.error("❌ No buy buttons found! Check your HTML.");
            return;
        }

        buyButtons.forEach(button => {
            button.addEventListener("click", function () {
                console.log("🛒 Buy button clicked!");

                // Get WhatsApp link
                const whatsappUrl = this.getAttribute("data-whatsapp");

                if (!whatsappUrl) {
                    console.error("❌ WhatsApp link is missing!");
                    return;
                }

                console.log("🔗 Opening WhatsApp:", whatsappUrl);
                window.open(whatsappUrl, "_blank");
            });
        });

        console.log("✅ WhatsApp buy buttons are now functional!");
    }, 500);
});

