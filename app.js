const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();

// Import route
const authRoutes = require('./routes/authRoutes');
const scholarshipRoutes = require('./routes/scholarshipRoutes');

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// routing
app.use('/api/auth', authRoutes); // untuk register dan login
app.use('/api/scholarships', scholarshipRoutes); // untuk beasiswa CRUD

// jalankan server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});