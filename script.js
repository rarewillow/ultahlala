// script.js

// Ambil elemen-elemen halaman
const landingPage = document.getElementById('landing-page');
const mainPage = document.getElementById('main-page');
const enterButton = document.getElementById('enter-button');
const popup = document.getElementById('popup');
const popupSecond = document.getElementById('popup-second');
const buttonYes1 = document.getElementById('button-yes1');
const buttonYes2 = document.getElementById('button-yes2');
const buttonYes3 = document.getElementById('button-yes3');
const buttonYes4 = document.getElementById('button-yes4');

// Fungsi untuk menampilkan pop-up pertama
function showPopup() {
    popup.classList.add('visible');
}

// Fungsi untuk menyembunyikan pop-up pertama
function hidePopup() {
    popup.classList.remove('visible');
}

// Fungsi untuk menampilkan pop-up kedua
function showPopupSecond() {
    popupSecond.classList.add('visible');
}

// Fungsi untuk menyembunyikan pop-up kedua
function hidePopupSecond() {
    popupSecond.classList.remove('visible');
}

// Event listener untuk tombol masuk
enterButton.addEventListener('click', () => {
    // Sembunyikan landing page dengan transisi
    landingPage.classList.add('hidden');
    
    // Tampilkan halaman utama dengan transisi
    setTimeout(() => {
        mainPage.classList.remove('hidden');
    }, 500);  // Memberikan sedikit delay sebelum menampilkan halaman utama

    // Tampilkan pop-up pertama setelah halaman utama muncul
    setTimeout(showPopup, 1000);  // Memberikan sedikit waktu setelah halaman utama muncul
});

// Event listener untuk tombol di pop-up pertama
buttonYes1.addEventListener('click', () => {
    hidePopup();
    // Tampilkan pop-up kedua setelah pop-up pertama menghilang
    setTimeout(showPopupSecond, 300);
});

buttonYes2.addEventListener('click', () => {
    hidePopup();
    // Tampilkan pop-up kedua setelah pop-up pertama menghilang
    setTimeout(showPopupSecond, 300);
});

// Event listener untuk tombol di pop-up kedua
buttonYes3.addEventListener('click', hidePopupSecond);
buttonYes4.addEventListener('click', hidePopupSecond);
