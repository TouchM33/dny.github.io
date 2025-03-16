document.addEventListener("DOMContentLoaded", function () {
    // Kutipan Motivasi Random
    const kutipanMotivasi = [
        "Kesuksesan adalah hasil dari kerja keras dan doa. 💪",
        "Setiap hari adalah kesempatan baru untuk belajar. 📖",
        "Tetap semangat, jangan menyerah! 🚀",
        "Jangan takut gagal, karena gagal adalah awal dari kesuksesan. 🌟"
    ];
    function tampilkanKutipan() {
        const randomIndex = Math.floor(Math.random() * kutipanMotivasi.length);
        document.getElementById("kutipan-motivasi").innerHTML = `<blockquote>${kutipanMotivasi[randomIndex]}</blockquote>`;
    }
    tampilkanKutipan();

    // Filter Artikel
    function filterArtikel() {
        let kategori = document.getElementById("kategori").value;
        let artikel = document.querySelectorAll(".artikel-item");
        
        artikel.forEach(item => {
            if (kategori === "semua" || item.classList.contains(kategori)) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }
        });
    }
    document.getElementById("kategori").addEventListener("change", filterArtikel);

    // Pencarian Artikel
    function cariArtikel() {
        let keyword = document.getElementById("searchArtikel").value.toLowerCase();
        let artikel = document.querySelectorAll(".artikel-item h3");
        
        artikel.forEach(title => {
            let item = title.parentElement;
            if (title.innerText.toLowerCase().includes(keyword)) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }
        });
    }
    document.getElementById("searchArtikel").addEventListener("keyup", cariArtikel);

    // Navigasi Galeri Foto
    function tampilkanKategori(kategori) {
        let foto = document.querySelectorAll(".foto-item");
        
        foto.forEach(item => {
            if (kategori === "semua" || item.classList.contains(kategori)) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }
        });
    }
    window.tampilkanKategori = tampilkanKategori;
});
