import sqlite3 from sqlite3

const db = new sqlite3.Database("./database.sqlite3");

const initDb = async() =>{
    await dbRun("DROP TABLE IF EXISTS plants");
    await dbRun(`CREATE TABLE IF NOT EXISTS plants(
        id int PRIMARY KEY AUTOINCREMENT,
        name TEXT
        perennial BOOLEAN
        category TEXT
        price REAL
        )`);
        
}

export {db, initDb}