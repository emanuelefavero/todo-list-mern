const Item = require('../models/item')

// Get all items
exports.getItems = async (req, res) => {
  try {
    const items = await Item.find()

    res.json(items)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}
