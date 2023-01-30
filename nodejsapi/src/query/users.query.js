const QUERY = {
  SELECT_USERS: 'SELECT id, name, email, age FROM users ORDER BY id ASC',
  SELECT_USER: 'SELECT * FROM users WHERE id = ?',
  CREATE_USER: 'INSERT INTO users(name, email, password, age) VALUES (?, ?, SHA2(?, 256), ?)',
  UPDATE_USER: 'UPDATE users SET name = ?, email = ?, password = SHA2(?, 256), age = ?  WHERE id = ?',
  DELETE_USER: 'DELETE FROM users WHERE id = ?',
};

export default QUERY;
