# Setup Project
Website supply chain *Rotte Bakery*, Tim 1 Capstone Kelas 2SIC.

## 🎲 Persiapan
### Git
Klik disini untuk [download git](https://git-scm.com/download/win). Install git ke device dengan mengikuti langkah" penginstalannnya. Kemudian lakukan pengecekan git dengan membuka *command prompt* lalu mengetikkan perintah berikut
```
git -v
```

### Github
Jika belum mempunyai akun github, lakukan [pendaftaran akun](https://github.com/signup?ref_cta=Sign+up&ref_loc=header+logged+out&ref_page=%2F&source=header-home).<br>

## 📌 Setup
Setelah menginstal git ke device dan memiliki akun github, kemudian lakukan clone project. Pilih lokasi untuk menyimpan project di device anda, lalu klik kanan dan pilih `git bash here`.<br>
<img src='https://github.com/hibatillah/capstone-tim1/assets/99963638/3e17dafe-81de-4392-9816-e0599762308f' alt='git bash' width='50%'/>

Pada git bash ketikkan perintah berikut untuk cloning project ini:
```
git clone https://github.com/hibatillah/capstone-tim1
```
Kemudian akan dilakukan proses clone project ke device anda. Setelah proses clone selesai, pada *git bash* ketikkan `code .` untuk membuka project pada vscode.

Pada vscode, untuk setup **frontend**, buka terminal baru dengan mengetikkan perintah berikut satu per satu:
```
cd client
npm i
```
Untuk setup **backend**, buka terminal baru lagi dengan mengetikkan perintah berikut satu per satu:
```
cd server
npm i
```

## 🎯 Code
### Frontend
Pada vscode, jalankan dengan buka terminal pada `client` lalu ketikkan perintah berikut, frontend dapat diakses melalui `localhost:3000`.
```
npm start
```

### Backend
Terlebih dahulu download extension *mongodb* pada vscode, lalu connect link berikut ke extension mongodb
```
mongodb+srv://hibatillah:habibsic@cluster0.yycq009.mongodb.net/
```
Kemudian jalankan backend dengan buka terminal pada `server` dan ketikkan perintah berikut, backend dapat diakses melalui `localhost:5000`.
```
node server
```

### Berpindah versi
Dapat dilakukan perpindahan versi code yang telah ada, dengan klik tombol pada bagian kiri bawah vscode, lalu memilih berbagai versi yang tersedia:<br>
<img src='https://github.com/hibatillah/capstone-tim1/assets/99963638/ca793cf4-dc99-489d-ba51-b6dbbf59cfb8' alt='branch' width='41%'/>
<img src='https://github.com/hibatillah/capstone-tim1/assets/99963638/71296fbc-0bf9-4f11-898b-38d3ac2ed3b6' alt='branch' width='55%'/>

Pada project ini terdapat 4 versi pengembangan:
* master → sebagai versi utama
* manufactur-user → pengembangan bagian manufaturer
* supplier-user → pengembangan bagian supplier
* customer-user → pengembangan bagian customer

Diharuskan **berpindah versi sesuai bagian yang akan dikembangkan** sebelum menyimpan versi code.

### Simpan versi code
Buka terminal dan ketikkan perintah berikut satu per satu, pada bagian `nama` dapat diubah dengan nama akun github anda dan `email@email.com` dapat diubah dengan akun email anda yang terhubung dengan github.
```
git config --global user.name nama
git config --global user.email email@email.com
```
Setelah selesai coding, simpan perubahan code dengan memilih menu source control pada sidebar vscode, lalu masukkan pesan terkait perubahan apa saja yanng dilakukan dan kemudian tekan `commit`. Maka perubahan akan dikirimkan ke github sesuai versi yang digunakan sebelumnya.<br>
<img src='https://github.com/hibatillah/capstone-tim1/assets/99963638/4f858a0b-5665-449d-805b-f838a06a7325' alt='branch' width='30%'/>
<img src='https://github.com/hibatillah/capstone-tim1/assets/99963638/6f25afbd-9826-4db2-957e-56e47d749f08' alt='branch' width='31%'/>
<br><br>

> 🎉 happy coding! hopefully avoid errors 👀💯
