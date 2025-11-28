// Resize Image
function resizeImage() {
    const input = document.getElementById('resizeInput');
    const width = document.getElementById('resizeWidth').value;
    const height = document.getElementById('resizeHeight').value;
    const downloadLink = document.getElementById('resizeDownload');

    if (!input.files[0]) { alert("Please select a file"); return; }

    const file = input.files[0];
    const reader = new FileReader();
    reader.onload = function(e) {
        const img = new Image();
        img.src = e.target.result;
        img.onload = function() {
            const canvas = document.createElement('canvas');
            canvas.width = width || img.width;
            canvas.height = height || img.height;
            const ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
            downloadLink.href = canvas.toDataURL('image/png');
            downloadLink.download = 'resized_image.png';
            downloadLink.style.display = 'inline';
            downloadLink.textContent = "Download Resized Image";
        }
    }
    reader.readAsDataURL(file);
}

// Remove Background (simple white fill for demo)
function removeBG() {
    const input = document.getElementById('bgInput');
    const downloadLink = document.getElementById('bgDownload');

    if (!input.files[0]) { alert("Please select a file"); return; }

    const file = input.files[0];
    const reader = new FileReader();
    reader.onload = function(e) {
        const img = new Image();
        img.src = e.target.result;
        img.onload = function() {
            const canvas = document.createElement('canvas');
            canvas.width = img.width;
            canvas.height = img.height;
            const ctx = canvas.getContext('2d');
            ctx.fillStyle = 'white'; // background
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(img, 0, 0);
            downloadLink.href = canvas.toDataURL('image/png');
            downloadLink.download = 'no_bg_image.png';
            downloadLink.style.display = 'inline';
            downloadLink.textContent = "Download Image with BG Removed";
        }
    }
    reader.readAsDataURL(file);
}

// Compress Image
function compressImage() {
    const input = document.getElementById('compressInput');
    const quality = document.getElementById('compressQuality').value / 100;
    const downloadLink = document.getElementById('compressDownload');

    if (!input.files[0]) { alert("Please select a file"); return; }

    const file = input.files[0];
    const reader = new FileReader();
    reader.onload = function(e) {
        const img = new Image();
        img.src = e.target.result;
        img.onload = function() {
            const canvas = document.createElement('canvas');
            canvas.width = img.width;
            canvas.height = img.height;
            const ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0);
            downloadLink.href = canvas.toDataURL('image/jpeg', quality);
            downloadLink.download = 'compressed_image.jpg';
            downloadLink.style.display = 'inline';
            downloadLink.textContent = "Download Compressed Image";
        }
    }
    reader.readAsDataURL(file);
}
