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

Pada git bash ketikkan perintah berikut:
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
Pada vscode, jalankan dengan buka terminal pada `client` lalu ketikkan perintah berikut
```
npm start
```
Frontend dapat diakses melalui `localhost:3000`

### Backend
Terlebih dahulu download extension *mongodb* pada vscode, lalu connect link berikut ke extension mongodb
```
mongodb+srv://hibatillah:habibsic@cluster0.yycq009.mongodb.net/
```
Kemudian jalankan dengan buka terminal pada `server` dan ketikkan perintah berikut
```
node server
```
Backend dapat diakses melalui `localhost:5000

### Berpindah versi
Dapat dilakukan perpindahan versi code yang telah ada, dengan klik tombol pada bagian kiri bawah vscode seperti berikut:<br>
<img src='https://github.com/hibatillah/capstone-tim1/assets/99963638/ca793cf4-dc99-489d-ba51-b6dbbf59cfb8' alt='branch' width='70%'/>
<br>Lalu memilih berbagai versi yang tersedia:<br>
<img src='https://github.com/hibatillah/capstone-tim1/assets/99963638/71296fbc-0bf9-4f11-898b-38d3ac2ed3b6' alt='branch' width='70%'/>
