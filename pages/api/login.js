// pages/api/login.js
import { query } from '../../utils/db';

export default async function handler(req, res) {
  const { email, password } = req.body;
  const result = await query(
    `SELECT * FROM users WHERE email = ? AND password = ?`,
    [email, password]
  );
  if (result.length > 0) {
    res.status(200).json(result[0]);
  } else {
    res.status(401).json({ error: 'Invalid credentials' });
  }
}
