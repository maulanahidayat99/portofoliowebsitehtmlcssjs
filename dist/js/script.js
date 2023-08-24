const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('is-active');
    // Cara bacanya ketika menu Hamburger diklik maka muncul class baru dengan nama menu-active
    menu.classList.toggle("menu-active");
});
// Mengatasi hamburger tertutup otomastis ketika di scroll pada ukuran mobile
window.addEventListener('scroll', () => {
    hamburger.classList.remove("is-active");
    menu.classList.remove("menu-active");
});
// Membuat animasi Pre Loader = Animasi loading sebelum masuk ke website
const loader = document.querySelector(".loader");

function loaderActive() {
    // Mengarah ke file css class .loader .loader-active line 573
    loader.classList.add("loader-active");
}
// Berikan waktu 3 detik sebelum halaman website muncul
function loaderActiveTime() {
    // 2000 artinya 2 detik
    setInterval(loaderActive, 2000);
}
window.onload = loaderActiveTime();
