// JavaScript for Tab Switching
const tabs = document.querySelectorAll('.tab-button');
const contents = document.querySelectorAll('.tab-content');

// Function to activate the selected tab and content
tabs.forEach(tab => {
    tab.addEventListener('click', function () {
        // Remove active class from all buttons and content
        tabs.forEach(t => t.classList.remove('active'));
        contents.forEach(c => c.classList.remove('active'));

        // Add active class to the clicked button and corresponding content
        tab.classList.add('active');
        const target = document.getElementById(tab.dataset.target);
        document.getElementById(tab.dataset.target).classList.add('active');

        // Re-initialize the popup functionality for the newly activated content
        initializePopup();
    });
});

// Function to handle the popup for the images
function initializePopup() {
    const images = document.querySelectorAll('.single-image'); // Select all .single-image elements
    const previewImages = document.querySelectorAll('.app-preview-image'); // Select all .app-preview-image elements
    const popupContainers = {
        'Zoomer': document.getElementById('popup-container-zoomer'),
        'AI': document.getElementById('popup-container-ai'),
        'ARVR': document.getElementById('popup-container-arvr'),
    };

    // Handle the popup for each specific image
    [...images, ...previewImages].forEach(image => {
        image.addEventListener('click', () => {
            let popupContainer;

            // Set the correct popup container for the image clicked
            if (image.alt.includes('Zoomer')) {
                popupContainer = popupContainers.Zoomer;
            } else if (image.alt.includes('AI Application')) {
                popupContainer = popupContainers.AI;
            } else if (image.alt.includes('AR/VR')) {
                popupContainer = popupContainers.ARVR;
            }

            if (popupContainer) {
                popupContainer.style.display = 'flex'; // Show the relevant popup
            }
        });
    });

    // Handle the close button for each popup
    document.querySelectorAll('.close-popup').forEach(button => {
        button.addEventListener('click', (event) => {
            const popupContainer = event.target.closest('.popup-container');
            popupContainer.style.display = 'none'; // Hide the relevant popup
        });
    });

    // Optional: Close the popup when clicking outside the image
    document.querySelectorAll('.popup-container').forEach(container => {
        container.addEventListener('click', (event) => {
            if (event.target === container) {
                container.style.display = 'none';
            }
        });
    });
}

// Initialize the popup functionality for the currently active content
initializePopup();
