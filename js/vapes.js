const phoneNumber = "5492646277698"; // Reemplaza con tu número real

const vapes = [
    { 
        name: "Ignite 150V", 
        image: "assets/img/portfolio/ignite150.png", 
        price: "$20", 
        whatsappLink: `https://wa.me/${phoneNumber}?text=Hola!%20Estoy%20interesado%20en%20el%20Ignite%20150V.%20¿Me%20puedes%20dar%20más%20información?`
    },

    { 
        name: "Ignite 250V", 
        image: "assets/img/portfolio/ignite250.png", 
        price: "$25", 
        whatsappLink: `https://wa.me/${phoneNumber}?text=Hola!%20Estoy%20interesado%20en%20el%20Ignite%20250V.%20¿Me%20puedes%20dar%20más%20información?`
    },

    { 
        name: "RabBeats 10K", 
        image: "assets/img/portfolio/rabbeats10000.png", 
        price: "$30", 
        whatsappLink: `https://wa.me/${phoneNumber}?text=Hola!%20Estoy%20interesado%20en%20el%20RabBeats%2010K.%20¿Me%20puedes%20dar%20más%20información?`
    },

    { 
        name: "ElfBar 40K", 
        image: "assets/img/portfolio/ElfBar40k.png", 
        price: "$35", 
        whatsappLink: `https://wa.me/${phoneNumber}?text=Hola!%20Estoy%20interesado%20en%20el%20ElfBar%2040K.%20¿Me%20puedes%20dar%20más%20información?`
    }
];

console.log("✅ vapes.js Loaded: ", vapes);

export { vapes };
