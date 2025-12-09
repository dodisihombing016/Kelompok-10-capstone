// ===============================
// ANIMASI FADE SAAT DI-SCROLL
// ===============================

// Membuat "pengamat" untuk melihat apakah suatu elemen muncul di layar
const observer = new IntersectionObserver(entries => {

    // Mengecek setiap elemen yang sedang dipantau
    entries.forEach(e => {

        // Jika elemen sudah mulai terlihat di layar (minimal 20%)
        if (e.isIntersecting)

            // Tambahkan class "show" supaya animasinya aktif
            e.target.classList.add('show');
    });

}, {
    // Elemen akan dianggap muncul jika 20% bagian sudah terlihat
    threshold: .2
});

// Memilih semua elemen yang punya class "fade"
// (class ini dipakai untuk elemen yang ingin diberi animasi)
document.querySelectorAll('.fade').forEach(s =>

    // Mulai memantau elemen tersebut
    observer.observe(s)
);
// === Saat halaman dibuka cek localStorage ===
document.addEventListener("DOMContentLoaded", () => {

    const toggleBtn = document.getElementById("themeToggle");

    if (!toggleBtn) {
        console.warn("Element #themeToggle tidak ditemukan!");
        return;
    }

    // Cek tema saat halaman pertama dibuka
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark");
        toggleBtn.innerText = "☀";
    }

    // === Event tombol diklik ===
    toggleBtn.addEventListener("click", function () {
        document.body.classList.toggle("dark");

        if (document.body.classList.contains("dark")) {
            localStorage.setItem("theme", "dark");
            this.innerText = "☀"; // ikon saat dark mode aktif
        } else {
            localStorage.setItem("theme", "light");
            this.innerText = "🌙";
        }
    });

});
