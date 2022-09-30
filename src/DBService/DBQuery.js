import DataBase from './DBService';

const DB_EXEC = DataBase.getConnection();

// CRUD
export const insert = async (param) => {
  let create = await DB_EXEC('INSERT INTO User' +
    '(name, email, password) VALUES (?,?,?);',
    [param.name, param.email, param.password]
  );
  return create.rowsAffected;
}

export const select = async () => {
  let read = await DB_EXEC('SELECT * FROM User;')
  
  return read.rows._array;
}

