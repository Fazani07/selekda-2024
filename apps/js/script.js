// script.js

document.addEventListener('DOMContentLoaded', () => {
    // Fading out welcome screen after 1 second
    setTimeout(() => {
        document.getElementById('welcome-screen').style.display = 'none';
        document.getElementById('workspace').style.display = 'grid';
    }, 1000);

    // Menangani zoom in dan zoom out
    const zoomLevel = document.getElementById('zoom-level');
    let zoomValue = 100;

    document.getElementById('zoom-in').addEventListener('click', () => {
        if (zoomValue < 200) {
            zoomValue += 10;
            zoomLevel.textContent = `${zoomValue}%`;
            document.getElementById('work-area').style.transform = `scale(${zoomValue / 100})`;
        }
    });

    document.getElementById('zoom-out').addEventListener('click', () => {
        if (zoomValue > 50) {
            zoomValue -= 10;
            zoomLevel.textContent = `${zoomValue}%`;
            document.getElementById('work-area').style.transform = `scale(${zoomValue / 100})`;
        }
    });

    // Fungsionalitas lain seperti undo/redo, toolbar, layer, dll. bisa ditambahkan sesuai dengan kebutuhan.
});
