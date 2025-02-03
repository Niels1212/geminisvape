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
            <div class="portfolio-item mx-auto">
                <!-- Image container (hover effect only applies here) -->
                <div class="image-container position-relative">
                    <img class="img-fluid vape-image" src="${vape.image}" alt="${vape.name}" />
                    <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                        <div class="portfolio-item-caption-content text-center text-white">
                            <i class="fas fa-plus fa-3x"></i>
                        </div>
                    </div>
                </div>

                <!-- Information container (this stays visible, outside hover effect) -->
                <div class="info-container text-center mt-2">
                    <h5>${vape.name}</h5>
                    <p class="fw-bold text-secondary">${vape.price}</p>
                    <a href="${vape.whatsappLink}" target="_blank" class="btn btn-warning buy-button">
                        Comprar por WhatsApp
                    </a>
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

