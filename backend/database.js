import sqlite3 from sqlite3

const db = new sqlite3.Database("./database.sqlite3");

const initDb = async() =>{
    await dbRun("DROP TABLE IF EXISTS plants");
    await dbRun(`CREATE TABLE IF NOT EXISTS plants(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        perennial INTEGER,
        category TEXT,
        price REAL,
        )`);

    const plants = [
        {
            name: "rózsa",
            perennial: 1,
            category: "virág",
            price: 12.99,
        }
    ];

    for(const plant in plants){
        await dbRun("INSERT INTO plants (name,perennial,category,price) VALUES(?,?,?,?)",[plant.name,plant.perennial,plant.category,plant.price]);
    }
}

export {db, initDb}