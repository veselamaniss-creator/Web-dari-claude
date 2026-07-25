// Interaksi tombol "Klik Aku"
document.getElementById("tombol").addEventListener("click", function() {
  document.getElementById("hasil").textContent = "Mantap, JS-nya jalan! 🎉";
});

// Fungsi ganti warna background
function gantiWarna(warna) {
  document.body.style.backgroundColor = warna;
}
