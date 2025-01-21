const serviceData = {
    trockenbau: {
        title: "Trockenbau",
        description: "Wir bieten professionelle Trockenbaulösungen für alle Ihre Bauprojekte. Mit jahrelanger Erfahrung und modernster Technik garantieren wir hochwertige Ergebnisse.",
        features: [
            "Wand- und Deckensysteme",
            "Akustiklösungen",
            "Brandschutzverkleidungen",
            "Schallschutzlösungen",
            "Dachgeschossausbau",
            "Raumgestaltung und Raumtrennung"
        ]
    },
    // Fügen Sie hier weitere Service-Daten hinzu...
};

document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('serviceModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    const modalFeatures = document.getElementById('modalFeatures');
    const closeBtn = document.querySelector('.close-modal');
    const serviceItems = document.querySelectorAll('.service-item');

    function openModal(serviceType) {
        const data = serviceData[serviceType];
        if (!data) return;

        modalTitle.textContent = data.title;
        modalDescription.textContent = data.description;
        modalFeatures.innerHTML = data.features
            .map(feature => `<li>${feature}</li>`)
            .join('');

        modal.classList.add('show');
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        modal.classList.remove('show');
        document.body.style.overflow = '';
    }

    serviceItems.forEach(item => {
        item.addEventListener('click', () => {
            const serviceType = item.dataset.service;
            openModal(serviceType);
        });
    });

    closeBtn.addEventListener('click', closeModal);

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Schließen mit Escape-Taste
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('show')) {
            closeModal();
        }
    });
}); 