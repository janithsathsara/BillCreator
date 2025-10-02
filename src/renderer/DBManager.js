const Database = require('better-sqlite3')
const path = require('path')

function setupDatabase() {
  const db = new Database(path.resolve(__dirname, 'your_database.db'))

  db.exec(`
    CREATE TABLE IF NOT EXISTS items (
      id INTEGER PRIMARY KEY,
      item TEXT,
      price INTEGER,
      imgSrc TEXT
    );
  `)

  // const data = [
  //   {
  //     id: 1,
  //     item: 'item1',
  //     price: 20,
  //     imgSrc: './assets/image1.jpg'
  //   },
  //   {
  //     id: 2,
  //     item: 'item2',
  //     price: 20,
  //     imgSrc: './assets/image2.jpg'
  //   },
  //   // Add other items here...
  // ];
  //
  // const insertStmt = db.prepare('INSERT INTO items (id, item, price, imgSrc) VALUES (?, ?, ?, ?)');
  // data.forEach(item => {
  //   insertStmt.run(item.id, item.item, item.price, item.imgSrc);
  // });

  db.close()
}

module.exports = setupDatabase
