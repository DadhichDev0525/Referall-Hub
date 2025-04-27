// api/get-all-campaigns.js

import axios from "axios";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const bearerToken = req.headers.authorization;
      const access_token = bearerToken?.split(" ")[1]; // access_token passed in the request header

      const response = await axios.get(
        "http://34.10.166.233/campaigns/get-all-campaigns",
        {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        }
      );

      if (response.status === 200) {
        return res.status(200).json(response.data);
      }

      res.status(response.status).json(response.data);
    } catch (err) {
      if (err.response?.status === 404) {
        return res.status(404).json({
          message:
            err.response?.data?.message || "Business Owner not created !!",
        });
      } else if (err.status === 401) {
        return res.status(401).json({
          message: "Token Expired",
        });
      }
      res.status(500).json({
        error: "Something went wrong",
      });
    }
  } else {
    // Handle unsupported HTTP methods
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
