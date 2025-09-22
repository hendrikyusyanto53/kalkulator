function hitung(operator) {
  // 1. Ambil elemen dari HTML
  const inputAngka1 = document.getElementById("angka1");
  const inputAngka2 = document.getElementById("angka2");
  const hasilElemen = document.getElementById("hasil");

  // 2. Ambil nilai dan konversi ke tipe data Angka (float)
  const angka1 = parseFloat(inputAngka1.value);
  const angka2 = parseFloat(inputAngka2.value);

  // 3. Validasi Input Pengguna
  // Periksa apakah input kosong atau bukan angka
  if (isNaN(angka1) || isNaN(angka2)) {
    tampilkanError("Input tidak valid. Harap masukkan angka yang benar.");
    return; // Hentikan eksekusi fungsi
  }

  let hasil;

  // 4. Implementasikan Logika Program dengan switch-case
  switch (operator) {
    case "+":
      hasil = angka1 + angka2;
      break;
    case "-":
      hasil = angka1 - angka2;
      break;
    case "*":
      hasil = angka1 * angka2;
      break;
    case "/":
      // Penanganan khusus untuk pembagian dengan nol
      if (angka2 === 0) {
        tampilkanError("Tidak bisa melakukan pembagian dengan nol.");
        return; // Hentikan eksekusi fungsi
      }
      hasil = angka1 / angka2;
      break;
    default:
      tampilkanError("Operasi tidak dikenal.");
      return;
  }

  // 5. Tampilkan Hasil
  tampilkanHasil(hasil);
}

// Fungsi untuk menampilkan hasil yang berhasil
function tampilkanHasil(nilai) {
  const hasilElemen = document.getElementById("hasil");
  // Membulatkan hasil jika berupa desimal panjang
  hasilElemen.textContent = parseFloat(nilai.toFixed(10));
  hasilElemen.classList.remove("error"); // Hapus kelas error jika ada
}

// Fungsi untuk menampilkan pesan kesalahan
function tampilkanError(pesan) {
  const hasilElemen = document.getElementById("hasil");
  hasilElemen.textContent = pesan;
  hasilElemen.classList.add("error"); // Tambahkan kelas error untuk styling
}
