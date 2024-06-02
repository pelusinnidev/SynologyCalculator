document.getElementById('configurator-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const nasModelPrice = 429.99;
    const storageType = document.getElementById('storage-type').value.split('-');
    const storagePrice = parseFloat(storageType[2]);
    const diskQuantity = parseInt(document.getElementById('disk-quantity').value);
    let initialPackPrice = 0;
    let maintenancePackPrice = 0;
    let personalizationTotalPrice = 0;
    
    if (document.getElementById('initial-pack').checked) {
        initialPackPrice = parseFloat(document.getElementById('initial-pack-price').value);
    }

    if (document.getElementById('maintenance-pack').checked) {
        maintenancePackPrice = parseFloat(document.getElementById('maintenance-pack-price').value);
    }

    if (document.getElementById('personalization-pack').checked) {
        const personalizationHours = parseInt(document.getElementById('personalization-hours').value);
        const personalizationPricePerHour = 40; // Average price for personalization services
        personalizationTotalPrice = personalizationHours * personalizationPricePerHour;
    }

    const totalPrice = nasModelPrice + (storagePrice * diskQuantity) + initialPackPrice + maintenancePackPrice + personalizationTotalPrice;
    
    const summaryData = {
        nasModel: 'Synology DS224+ - 429,99€',
        storageType: storageType.join(' '),
        diskQuantity: diskQuantity,
        initialPack: initialPackPrice ? `${initialPackPrice}€` : 'No incluido',
        maintenancePack: maintenancePackPrice ? `${maintenancePackPrice}€` : 'No incluido',
        personalizationPack: personalizationTotalPrice ? `${personalizationTotalPrice}€ (${document.getElementById('personalization-hours').value} horas)` : 'No incluido',
        totalPrice: `${totalPrice.toFixed(2)}€`
    };

    localStorage.setItem('summaryData', JSON.stringify(summaryData));

    window.location.href = 'summary.html';
});