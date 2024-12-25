// Tombol untuk beralih ke halaman List Lala
document.getElementById('list-lala-button').addEventListener('click', () => {
    alert('Beralih ke halaman List Lala!');
    window.location.href = 'list-lala.html'; // Ganti dengan URL halaman List Lala
});

// Tombol untuk menampilkan pop-up Kue dan Bunga
document.getElementById('cake-flowers-button').addEventListener('click', () => {
    document.getElementById('popup-modal').classList.remove('hidden');
});

// Tombol dalam pop-up
document.getElementById('yes-button').addEventListener('click', () => {
    alert('Terima kasih! Semoga kamu suka 🎂🌸 ketik 123 di chat yaa');
    document.getElementById('popup-modal').classList.add('hidden');
});

document.getElementById('later-button').addEventListener('click', () => {
    alert('Baik, nanti saja 🌟');
    document.getElementById('popup-modal').classList.add('hidden');
});

document.getElementById('no-button').addEventListener('click', () => {
    alert('Tidak apa-apa, aku tetap sayang kamu ❤️');
    document.getElementById('popup-modal').classList.add('hidden');
});

// Tombol untuk masuk ke halaman utama
document.getElementById('enter-button').addEventListener('click', () => {
    document.getElementById('landing-page').classList.add('hidden');
    document.getElementById('main-page').classList.remove('hidden');
});
