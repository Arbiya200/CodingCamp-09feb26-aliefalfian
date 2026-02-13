// Ini adalah file JavaScript eksternal untuk logika website

// FUNGSI 1: Auto-Replace Nama Pengunjung (Instruksi No. 4)
// Dijalankan otomatis saat halaman selesai dimuat
function replaceName() {
    let name = prompt("Halo, siapakah nama Anda?", "");
    // Validasi sederhana: jika user tidak isi nama, set default "Guest"
    if (name) {
        document.getElementById("user-name").innerText = name;
    } else {
        document.getElementById("user-name").innerText = "Guest";
    }
}

// Event Listener: Menjalankan replaceName saat window diload
window.addEventListener('load', replaceName);


// FUNGSI 2: Validasi Form & Menampilkan Output (Instruksi No. 5)
// Dipanggil oleh onsubmit="return validateForm()" di HTML
function validateForm() {
    // 1. Tangkap elemen form berdasarkan atribut 'name' di HTML
    const form = document.forms["messageForm"];
    
    // 2. Ambil nilai dari masing-masing input
    const nama = form["nama"].value;
    const tanggal = form["tanggal"].value;
    const gender = form["gender"].value;
    const pesan = form["pesan"].value;

    // 3. Validasi: Cek apakah ada field yang kosong
    if (nama == "" || tanggal == "" || gender == "" || pesan == "") {
        alert("Data tidak boleh ada yang kosong");
        return false; // Mencegah pengiriman form
    }

    // 4. Ambil waktu saat ini (Current Time)
    const now = new Date();
    // Format waktu agar mudah dibaca (Fri Jun 17 2022...)
    const timeString = now.toString(); 

    // 5. Tampilkan hasil input ke elemen di sebelah kanan (Manipulasi DOM)
    const resultDiv = document.getElementById("result-display");
    
    resultDiv.innerHTML = `
        <div class="result-line"><strong>Current time :</strong> ${timeString}</div>
        <br>
        <div class="result-line"><strong>Nama :</strong> ${nama}</div>
        <div class="result-line"><strong>Tanggal Lahir :</strong> ${tanggal}</div>
        <div class="result-line"><strong>Jenis Kelamin :</strong> ${gender}</div>
        <div class="result-line"><strong>Pesan :</strong> ${pesan}</div>
    `;

    // 6. Return false agar halaman TIDAK refresh (karena kita hanya main di front-end)
    return false;
}