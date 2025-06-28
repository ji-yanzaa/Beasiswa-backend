require('dotenv').config(); // load .env 
const express = require('express');
const cors = require('cors');

const authRoutes = require('./routes/authRoutes');
const scholarshipRoutes = require('./routes/scholarshipRoutes');
const bookmarkRoutes = require('./routes/bookmarkRoutes');

const app = express();
const PORT = process.env.PORT || 3100;
require('./swagger')(app);

// Middleware dasar
app.use(cors());
app.use(express.json());

// Routing utama
app.use('/api/auth', authRoutes);
app.use('/api/scholarships', scholarshipRoutes);
app.use('/api/bookmarks', bookmarkRoutes);

// Route default
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to ScholarMatch API!' });
});


// Jalankan server
app.listen(PORT, () => {
  console.log(`server ScholarMatch berjalan di http://localhost:${PORT}`);
});