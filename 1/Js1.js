const imgeDiv = document.querySelector('.Image-Container');

const arrayURLImges = [
    "https://picsum.photos/200/300?random=1",
    "https://picsum.photos/200/300?random=2",
    "https://picsum.photos/200/300?random=3",
    "https://picsum.photos/200/300?random=6",
    "https:picsum.photos/200/300?random=5"  // Broken URL
];

Promise.all(arrayURLImges.map(HandlePromise))
.then((images) => {
    images.forEach(img => imgeDiv.appendChild(img));
})
.catch((e) => {
    imgeDiv.innerHTML = `<p style="color:red; padding:20px;">
        ❌ ${e.message}
    </p>`;
    console.error("Error:", e);
});

function HandlePromise(src) {
    return new Promise((res, rej) => {
        // ✅ Reject immediately if URL format is wrong
        if (!src.match(/^https?:\/\//)) {
            rej(new Error(`Invalid URL format (missing //): ${src}`));
            return;
        }

        let img = new Image(300, 400);
        
        img.onload = () => {
            if (img.naturalWidth === 0) {
                rej(new Error(`Invalid image data: ${src}`));
            } else {
                res(img);
            }
        };
        
        img.onerror = () => rej(new Error(`Failed to load: ${src}`));
        img.src = src;
    });
}