const { Scholarship } = require('../models');

// GET semua beasiswa
exports.getAll = async (req, res) => {
  try {
    const scholarships = await Scholarship.findAll();
    res.json(scholarships);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET beasiswa berdasarkan ID
exports.getOne = async (req, res) => {
  try {
    const { id } = req.params;
    const scholarship = await Scholarship.findByPk(id);

    if (!scholarship) {
      return res.status(404).json({ message: 'Beasiswa tidak ditemukan' });
    }

    res.status(200).json(scholarship);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// POST tambah beasiswa (admin only)
exports.create = async (req, res) => {
  try {
    const { name, provider, deadline, link } = req.body;
    const newScholarship = await Scholarship.create({ name, provider, deadline, link });
    res.status(201).json(newScholarship);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// PUT update beasiswa (admin only)
exports.update = async (req, res) => {
  try {
    const { name, provider, deadline, link } = req.body;
    const scholarship = await Scholarship.findByPk(req.params.id);

    if (!scholarship) {
      return res.status(404).json({ message: 'Beasiswa tidak ditemukan' });
    }

    await scholarship.update({ name, provider, deadline, link });
    res.json(scholarship);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// DELETE beasiswa (admin only)
exports.delete = async (req, res) => {
  try {
    const scholarship = await Scholarship.findByPk(req.params.id);

    if (!scholarship) {
      return res.status(404).json({ message: 'Beasiswa tidak ditemukan' });
    }

    await scholarship.destroy();
    res.json({ message: 'Beasiswa berhasil dihapus' });
  } catch (err) {
    res.status(500).json({ error: err.message});
    }
};