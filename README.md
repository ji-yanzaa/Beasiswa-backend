# projek-capstone

#  ScholarMatch – Backend API

*ScholarMatch* adalah platform berbasis web yang menyediakan informasi terkini mengenai program beasiswa. Repositori ini berisi source code backend dari ScholarMatch yang dikembangkan menggunakan Node.js, Express.js, dan Sequelize ORM.

##  Deskripsi

ScholarMatch membantu mahasiswa dan pelajar di Indonesia menemukan beasiswa yang sesuai dengan minat, jurusan, dan latar belakang mereka. Backend API ini menyediakan endpoint untuk autentikasi pengguna, serta CRUD untuk data beasiswa.


##  Teknologi yang Digunakan

- *Node.js* – JavaScript runtime
- *Express.js* – Web framework
- *MySQL* – Relational database
- *Sequelize* – ORM untuk Node.js
- *JWT* – Autentikasi token
- *Swagger UI* – Dokumentasi API
- *Postman* – API Testing


##  Fitur Backend

###  Autentikasi & Otorisasi
- Register akun
- Login (dengan token JWT)
- Role-based access (user & admin)

###  CRUD Beasiswa
- Lihat semua beasiswa (public)
- Lihat detail beasiswa by ID (public)
- Tambah, ubah, hapus beasiswa (admin only)
- tambah, dan hapus bookmark beasiswa

---