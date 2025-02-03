const phoneNumber = "5492646277698"; // Reemplaza con tu número real

const vapes = [
    { 
        name: "Ignite 150V", 
        image: "assets/img/portfolio/ignite150.png", 
        price: "$25000 🇦🇷", 
        whatsappLink: `https://wa.me/${phoneNumber}?text=Estoy%20interesado%20en%20Ignite%20150V`
    },

    { 
        name: "Ignite 250V", 
        image: "assets/img/portfolio/ignite250.png", 
        price: "$35000 🇦🇷", 
        whatsappLink: `https://wa.me/${phoneNumber}?text=Estoy%20interesado%20en%20Ignite%20250V` 
    },

    { 
        name: "RabBeats 10K", 
        image: "assets/img/portfolio/rabbeats10000.png", 
        price: "$17000 🇦🇷", 
        whatsappLink: `https://wa.me/${phoneNumber}?text=Estoy%20interesado%20en%20RabBeats%2010K` 
    },

    { 
        name: "ElfBar 40K", 
        image: "assets/img/portfolio/ElfBar40k.png", 
        price: "$35000 🇦🇷", 
        whatsappLink: `https://wa.me/${phoneNumber}?text=Estoy%20interesado%20en%20ElfBar%2040K` 
    }
];

console.log("✅ vapes.js Loaded: ", vapes);

export { vapes };
