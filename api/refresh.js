export default async function handler(req, res) {
    if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });
  
    try {
      const backendResponse = await fetch("http://34.10.166.233/auth/refresh", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(req.body),
      });
  
      const data = await backendResponse.json();
      res.status(backendResponse.status).json(data);
    } catch (error) {
      res.status(500).json({ error: "Failed to refresh token" });
    }
  }
  