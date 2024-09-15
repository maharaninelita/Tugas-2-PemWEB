document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('#studentForm');
    const output = document.querySelector('#output');
    const submitButton = form.querySelector('button[type="submit"]');
    const resetButton = form.querySelector('button[type="reset"]');
  
    // Event handler untuk form submit
    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Mencegah form mengirim data ke server
  
      // Mengambil data dari form
      const nama = form.querySelector('input[name="nama_lengkap"]').value;
      const nim = form.querySelector('input[name="nim"]').value;
      const kelas = form.querySelector('input[name="kelas"]').value;
      const alamat = form.querySelector('textarea[name="alamat"]').value;
  
      // Simpan data ke localStorage
      let data = JSON.parse(localStorage.getItem('data')) || [];
      data.push({ nama, nim, kelas, alamat });
      localStorage.setItem('data', JSON.stringify(data));
  
      // Arahkan ke halaman baru
      window.location.href = 'data-display.html';
    });
  
    // Event handler untuk reset button
    form.querySelector('button[type="reset"]').addEventListener('click', function() {
      output.innerHTML = ''; // Menghapus output data jika form direset
    });
  
    // Event handler untuk tombol submit: click event
    submitButton.addEventListener('click', function() {
      console.log('Tombol Submit diklik');
      submitButton.style.backgroundColor = '#218838'; // Mengubah warna background saat diklik
    });
  
    // Event handler untuk tombol submit: mouseenter event
    submitButton.addEventListener('mouseenter', function() {
      submitButton.style.backgroundColor = '#1e7e34'; // Mengubah warna background saat mouse berada di atasnya
      submitButton.style.cursor = 'pointer'; // Mengubah kursor saat mouse berada di atasnya
    });
  
    // Event handler untuk tombol submit: mouseleave event
    submitButton.addEventListener('mouseleave', function() {
      submitButton.style.backgroundColor = '#28a745'; // Mengembalikan warna background saat mouse meninggalkan tombol
    });
  
    // Event handler untuk tombol reset: click event
    resetButton.addEventListener('click', function() {
      console.log('Tombol Reset diklik');
      resetButton.style.backgroundColor = '#e0a800'; // Mengubah warna background saat diklik
    });
  
    // Event handler untuk tombol reset: mouseenter event
    resetButton.addEventListener('mouseenter', function() {
      resetButton.style.backgroundColor = '#d39e00'; // Mengubah warna background saat mouse berada di atasnya
      resetButton.style.cursor = 'pointer'; // Mengubah kursor saat mouse berada di atasnya
    });
  
    // Event handler untuk tombol reset: mouseleave event
    resetButton.addEventListener('mouseleave', function() {
      resetButton.style.backgroundColor = '#ffc107'; // Mengembalikan warna background saat mouse meninggalkan tombol
    });
  
    // Event handler untuk input nama lengkap
    document.getElementById('namaLengkap').addEventListener('click', function() {
      console.log('Nama Lengkap input diklik');
    });
  
    // Event handler untuk mouseover pada textarea alamat
    document.getElementById('alamat').addEventListener('mouseover', function() {
      output.innerHTML = 'Anda sedang berada di textarea Alamat';
    });
  
    // Event handler untuk mouseout pada textarea alamat
    document.getElementById('alamat').addEventListener('mouseout', function() {
      output.innerHTML = '';
    });
  
    // Event handler untuk focus pada input kelas
    document.getElementById('kelas').addEventListener('focus', function() {
      console.log('Fokus pada input Kelas');
    });
  
    // Event handler untuk blur pada input NIM
    document.getElementById('nim').addEventListener('blur', function() {
      console.log('Blur pada input NIM');
    });
  
    // Event handler untuk input nama lengkap: keydown event
    document.getElementById('namaLengkap').addEventListener('keydown', function(event) {
      console.log('Tombol ditekan pada input Nama Lengkap: ', event.key);
    });
  
    // Event handler untuk input NIM: input event
    document.getElementById('nim').addEventListener('input', function() {
      console.log('NIM saat ini: ', this.value);
    });
  
    // Event handler untuk input kelas: change event
    document.getElementById('kelas').addEventListener('change', function() {
      console.log('Kelas diubah menjadi: ', this.value);
    });
  
    // Event handler untuk textarea alamat: cut event
    document.getElementById('alamat').addEventListener('cut', function() {
      console.log('Teks dipotong dari textarea Alamat');
    });
  
    // Event handler untuk textarea alamat: paste event
    document.getElementById('alamat').addEventListener('paste', function() {
      console.log('Teks dipaste ke textarea Alamat');
    });
  
  });
  