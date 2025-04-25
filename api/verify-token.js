export default async function handler(req, res) {
    const accessToken = req.headers.authorization;
  
    try {
      const response = await fetch("http://34.10.166.233/auth/verify-token", {
        method: "GET",
        headers: {
          Authorization: accessToken,
        },
      });
  
      const data = await response.json();
      res.status(response.status).json(data);
    } catch (error) {
      res.status(500).json({ error: "Failed to verify token" });
    }
  }
  