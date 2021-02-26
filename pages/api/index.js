import db from "../models/database";

export default async (req, res) => {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const showGetQuery = "SELECT * FROM Shows";
        const data = await db.query(showGetQuery);
        res.status(200).json(data.rows);
      } catch (error) {
        res.status(400).json({ err: "GET failed" });
      }
      break;
    case "POST":
      try {
        const { show } = await req.body;
        const showPostQuery = "INSERT INTO Shows (show) VALUES ($1)";
        await db.query(showPostQuery, [show]);
        res.status(200).json({});
      } catch (error) {
        res.status(400).json({ err: "Post failed" });
      }
      break;
    default:
      res.status(400).json({ err: "Failed" });
      break;
  }
};
