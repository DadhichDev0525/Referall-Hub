// api/create-campaigns.js

import axios from 'axios';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const access_token  = req.headers.authorization; // access_token passed in the request header

      const response = await axios.post('http://34.10.166.233/create-campaign',req.body, {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      });

      if (response.status === 201) {
        return res.status(201).json(response.data);
      }

      res.status(response.status).json(response.data);
    } catch (err) {
      if (err.response?.status === 400) {
        return res.status(400).json({
          message: err.response?.data?.message || 'Business Owner not created !!',
        });
      }else if (err.status === 401){
        return res.status(401).json({
          message : err.response?.data?.messages[0].message ||"Token expire, Please refresh!"
        })
      }
      res.status(500).json({
        error: 'Something went wrong',
      });
    }
  } else {
    // Handle unsupported HTTP methods
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
