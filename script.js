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
