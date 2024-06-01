// pages/api/profile.js
import { query } from '../../utils/db';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const result = await query(`SELECT * FROM users WHERE id = ?`, [1]); // Assuming user with id 1 is logged in
    res.status(200).json(result[0]);
  } else if (req.method === 'PUT') {
    const { firstname, lastname, email, bio } = req.body;
    const result = await query(
      `UPDATE users SET firstname = ?, lastname = ?, email = ?, bio = ? WHERE id = ?`,
      [firstname, lastname, email, bio, 1]
    );
    res.status(200).json(result);
  }
}
