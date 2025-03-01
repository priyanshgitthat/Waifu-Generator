async function fetchWaifu() {
    const tag = document.getElementById('tag-select').value;

    if (['ero', 'ass', 'hentai', 'milf', 'oral', 'paizuri', 'ecchi'].includes(tag)) {
        const confirmNSFW = confirm("🚨 This content is NSFW (18+). Do you want to continue?");
        if (!confirmNSFW) return;
    }

    document.getElementById('loader').style.display = "block";
    document.getElementById('imageContainer').style.display = "none";
    document.getElementById('waifuImage').classList.remove('loaded');

    try {
        const response = await fetch(`https://api.waifu.im/search?included_tags=${tag}`);
        const data = await response.json();

        if (data.images && data.images.length > 0) {
            document.getElementById('waifuImage').src = data.images[0].url;
            document.getElementById('imageContainer').style.display = "block";
            document.getElementById('waifuImage').classList.add('loaded');
        }
    } catch (error) {
        alert('Error fetching image.');
    }

    document.getElementById('loader').style.display = "none";
}

// Download Image
function downloadImage() {
    const img = document.getElementById('waifuImage');
    const link = document.createElement('a');
    link.href = img.src;
    link.download = 'waifu.png';
    link.click();
}

// Share Image
function shareImage() {
    alert("Copy and share the link: " + document.getElementById('waifuImage').src);
}


// Music Control
const audio = document.getElementById('bg-music');
let isPlaying = false;

function toggleMusic() {
    const musicBtn = document.getElementById('musicButton');
    if (isPlaying) {
        audio.pause();
        musicBtn.innerHTML = "▶️"; // Play icon
    } else {
        audio.play();
        musicBtn.innerHTML = "⏸"; // Pause icon
    }
    isPlaying = !isPlaying;
}



