import axios from "axios";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    const { full_name, email, password, role, phone } = req.body;

    const response = await axios.post("http://34.10.166.233/auth/register", {
      full_name,
      email,
      password,
      role,
      phone,
    });

    return res.status(response.status).json(response.data);
  } catch (error) {
    if (error.response) {
      return res
        .status(error.response.status)
        .json({ error: error.response.data || "Request failed" });
    }

    return res.status(500).json({ error: "Internal Server Error" });
  }
}
