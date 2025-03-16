document.addEventListener("DOMContentLoaded", function() {
    let slides = document.querySelectorAll(".article-slide");
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove("active");
            if (i === index) {
                slide.classList.add("active");
            }
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    setInterval(nextSlide, 2000);

    // Mode Malam & Siang
    const modeToggle = document.getElementById("mode-toggle");
    modeToggle.addEventListener("click", function() {
        document.body.classList.toggle("dark-mode");
        if (document.body.classList.contains("dark-mode")) {
            modeToggle.textContent = "Mode Siang";
        } else {
            modeToggle.textContent = "Mode Malam";
        }
    });

    // Navigasi Menu Utama ke Halaman Pilihan
    document.querySelectorAll(".nav-link").forEach(nav => {
        nav.addEventListener("click", function(event) {
            let targetPage = this.getAttribute("data-target");
            if (targetPage) {
                window.location.href = targetPage;
            }
        });
    });

    // Sub-kategori Galeri
    document.querySelectorAll(".gallery-link").forEach(link => {
        link.addEventListener("click", function(event) {
            let subGallery = this.getAttribute("data-gallery");
            if (subGallery) {
                window.location.href = subGallery;
            }
        });
    });

    // Header Gambar Dinamis untuk Artikel
    document.querySelectorAll(".article-item").forEach(article => {
        let category = article.getAttribute("data-category");
        if (category) {
            article.style.backgroundImage = `url('images/${category}.jpg')`;
            article.style.backgroundSize = "cover";
            article.style.backgroundPosition = "center";
            article.style.opacity = "0.8";
        }
    });

    // Menyesuaikan Ukuran Gambar agar Tidak Melebar
    document.querySelectorAll("img").forEach(img => {
        img.style.maxWidth = "100%";
        img.style.height = "auto";
    });
});
