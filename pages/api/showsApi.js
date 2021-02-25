import db from "../models/database";

export default async (req, res) => {
  const { method } = req;

  switch (method) {
    case "POST":
      try {
        const { show } = await req.body;
        const showPostQuery = "INSERT INTO Shows (show) VALUES ($1)";
        db.query(showPostQuery, [show]);
        res.status(200).json({});
      } catch (error) {
        res.status(400).json({ err: "Post failed" });
      }
  }
};
