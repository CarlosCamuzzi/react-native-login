import * as SQLite from 'expo-sqlite';

export const DataBase = {
  getConnection: () => {

    const db = SQLite.openDatabase('myapp.db', (error) => {
      if (error) return console.log(error);  
    });

    db.transaction(tx => {
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS User' +
        '(id INTEGER PRIMARY KEY AUTOINCREMENT,' +
        'name TEXT, email TEXT, password TEXT);');
    });

    const ExecuteQuery = (sql, params = []) => {
      return new Promise((resolve, reject) => { 
        db.transaction(tx => {          
          tx.executeSql(
            sql,
            params,
            (__, results) => {              
              resolve(results);
            },
            (error) => {
              reject(error);
            }
          );    // tx.executeSql
        });   //db.transactiom
      });   // return Promise
    }    // ExecuteQuery
    return ExecuteQuery;
  }   // getConnection
}

export default DataBase;







