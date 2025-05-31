const imgeDiv = document.querySelector('.Image-Container');

const arrayURLImges = [
    "https://picsum.photos/200/300?random=1",
    "https://picsum.photos/200/300?random=2",
    "https://picsum.photos/200/300?random=3",
    "https://picsum.photos/200/300?random=6",
    "https://picsum.photos/200/300?random=5"
];

// Async function for loading and appending images
async function handleYourImges() {
    try {
        // Wait for all images to load
        let loadedImages = await Promise.all(arrayURLImges.map(loadedImage)); 
        // Append each loaded image to the container
        loadedImages.forEach(img => {
            imgeDiv.appendChild(img);
        });
    } catch (error) {
        console.log("Error Caught: ", error.message); // Log the actual error message
    }
}

// Helper function for loading an image
function loadedImage(src) { //
    return new Promise((res, rej) => {
        let img = new Image(300, 300); // Create a new image
        img.onload = function () {
            res(img); // Resolve the promise with the loaded image
        };
        img.onerror = function () {
            rej(new Error("Failed to load " + src)); // Reject the promise with an error
        };
        img.src = src; // Set the image source
    });
}

// Call the async function
handleYourImges();
