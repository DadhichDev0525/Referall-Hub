// api/create-business-owner.js

import axios from 'axios';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { access_token, form } = req.body; // assuming you send both 'access_token' and 'form' in the request body
      const response = await axios.post('http://34.10.166.233/auth/create-business-owner', form, {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      });

      if (response.status === 201) {
        return res.status(201).json({
          message: response.data?.message || 'BusinessOwner created!',
        });
      }

      res.status(response.status).json(response.data);
    } catch (err) {
      if (err.response?.status === 400) {
        return res.status(400).json({
          user: err.response?.data.user[0] || 'Something went wrong',
        });
      }
      res.status(500).json({
        error: err.response?.data?.messages[0]?.message || 'Something went wrong',
      });
    }
  } else {
    // Handle unsupported HTTP methods
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
