// JavaScript untuk interaksi di Landing Page

// Fungsi untuk menampilkan lebih banyak informasi
function showMore() {
    alert("Pelajari lebih lanjut tentang kami di bagian bawah halaman.");
}

// JavaScript untuk interaksi pada Halaman Portfolio

// Filter Portfolio berdasarkan kategori
const filterButtons = document.querySelectorAll('.filter-button');
const portfolioItems = document.querySelectorAll('.portfolio-item');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const filter = button.getAttribute('data-filter');
        portfolioItems.forEach(item => {
            if (filter === 'all' || item.getAttribute('data-category') === filter) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});

// Fungsi untuk membuka modal
function openModal(modalId) {
    document.getElementById(modalId).style.display = 'block';
}

// Fungsi untuk menutup modal
function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

// JavaScript untuk interaksi pada Halaman Admin Dashboard

document.addEventListener('DOMContentLoaded', function() {
    


    // Chart 1: Bar Chart
    const ctx1 = document.getElementById('chart1').getContext('2d');
    const data1 = [120, 190, 30, 50, 20, 30, 40];
    drawBarChart(ctx1, data1, ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu', 'Minggu']);

    // Chart 2: Line Chart
    const ctx2 = document.getElementById('chart2').getContext('2d');
    const data2 = [150, 230, 80, 100, 60, 90, 120];
    drawLineChart(ctx2, data2, ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu', 'Minggu']);

    // Chart 3: Radar Chart
    const ctx3 = document.getElementById('chart3').getContext('2d');
    const data3 = [180, 250, 130, 170, 110, 150, 190];
    drawRadarChart(ctx3, data3, ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu', 'Minggu']);
});

// Fungsi untuk menggambar Bar Chart
function drawBarChart(ctx, data, labels) {
    const barWidth = 40;
    const spacing = 20;
    const maxHeight = Math.max(...data);
    const canvasHeight = ctx.canvas.height;
    
    data.forEach((value, index) => {
        const x = (barWidth + spacing) * index;
        const y = canvasHeight - (value / maxHeight) * canvasHeight;
        const height = (value / maxHeight) * canvasHeight;
        
        ctx.fillStyle = 'rgba(54, 162, 235, 0.8)';
        ctx.fillRect(x, y, barWidth, height);
        
        ctx.fillStyle = '#000';
        ctx.fillText(labels[index], x, canvasHeight - 10);
    });
}

// Fungsi untuk menggambar Line Chart
function drawLineChart(ctx, data, labels) {
    const maxHeight = Math.max(...data);
    const canvasHeight = ctx.canvas.height;
    const canvasWidth = ctx.canvas.width;
    const pointSpacing = canvasWidth / (data.length - 1);

    ctx.beginPath();
    ctx.moveTo(0, canvasHeight - (data[0] / maxHeight) * canvasHeight);

    data.forEach((value, index) => {
        const x = pointSpacing * index;
        const y = canvasHeight - (value / maxHeight) * canvasHeight;

        ctx.lineTo(x, y);
    });

    ctx.strokeStyle = 'rgba(75, 192, 192, 1)';
    ctx.stroke();

    // Menambahkan label
    data.forEach((value, index) => {
        const x = pointSpacing * index;
        const y = canvasHeight - (value / maxHeight) * canvasHeight;

        ctx.fillStyle = '#000';
        ctx.fillText(labels[index], x, canvasHeight - 10);
    });
}

// Fungsi untuk menggambar Radar Chart
function drawRadarChart(ctx, data, labels) {
    const centerX = ctx.canvas.width / 2;
    const centerY = ctx.canvas.height / 2;
    const radius = Math.min(centerX, centerY) - 20;
    const angleStep = (2 * Math.PI) / data.length;
    const maxDataValue = Math.max(...data);

    ctx.beginPath();
    data.forEach((value, index) => {
        const angle = index * angleStep;
        const x = centerX + (value / maxDataValue) * radius * Math.cos(angle);
        const y = centerY + (value / maxDataValue) * radius * Math.sin(angle);

        if (index === 0) {
            ctx.moveTo(x, y);
        } else {
            ctx.lineTo(x, y);
        }
    });
    ctx.closePath();
    ctx.strokeStyle = 'rgba(153, 102, 255, 1)';
    ctx.stroke();

    // Mengisi area radar chart
    ctx.fillStyle = 'rgba(153, 102, 255, 0.2)';
    ctx.fill();

    // Menggambar garis grid radar
    for (let i = 1; i <= 5; i++) {
        ctx.beginPath();
        data.forEach((_, index) => {
            const angle = index * angleStep;
            const x = centerX + (i / 5) * radius * Math.cos(angle);
            const y = centerY + (i / 5) * radius * Math.sin(angle);

            if (index === 0) {
                ctx.moveTo(x, y);
            } else {
                ctx.lineTo(x, y);
            }
        });
        ctx.closePath();
        ctx.strokeStyle = '#ccc';
        ctx.stroke();
    }

    // Menambahkan label di luar grid
    labels.forEach((label, index) => {
        const angle = index * angleStep;
        const x = centerX + (radius + 10) * Math.cos(angle);
        const y = centerY + (radius + 10) * Math.sin(angle);
        ctx.fillStyle = '#000';
        ctx.fillText(label, x - 15, y + 5);
    });
}
