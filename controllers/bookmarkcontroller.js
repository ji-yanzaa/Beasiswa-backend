const { Bookmark, Scholarship } = require('../models');

exports.addBookmark = async (req, res) => {
  try {
    const { scholarshipId } = req.body;
    const userId = req.user.id;

    const bookmark = await Bookmark.create({ userId, scholarshipId });
    res.status(201).json({ message: 'Beasiswa ditambahkan ke bookmark', bookmark });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getBookmarks = async (req, res) => {
  try {
    const userId = req.user.id;
    const bookmarks = await Bookmark.findAll({
      where: { userId },
      include: [Scholarship]
    });
    res.json(bookmarks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.removeBookmark = async (req, res) => {
  try {
    const userId = req.user.id;
    const { id } = req.params;

    const bookmark = await Bookmark.findOne({ where: { id, userId } });
    if (!bookmark) {
      return res.status(404).json({ message: 'Bookmark tidak ditemukan' });
    }

    await bookmark.destroy();
    res.json({ message: 'Bookmark berhasil dihapus' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};