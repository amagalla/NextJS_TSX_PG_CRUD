import db from "../models/database";

export default async (req, res) => {
  const {
    query: { id },
    method,
  } = req;
  switch (method) {
    case "DELETE":
      try {
        const showDeleteQuery = "DELETE FROM Shows WHERE id = $1";
        db.query(showDeleteQuery, [id]);
        res.status(200).json({});
      } catch (error) {
        res.status(400).json({ err: "DELETE failed" });
      }
      break;
    case "PUT":
      try {
        let { show } = await req.body;
        let putQuery = "UPDATE Shows SET show = $1 WHERE id = $2";
        await db.query(putQuery, [show, id]);
        res.status(200).json({});
      } catch (error) {
        res.status(400).json({ err: "PUT failed" });
      }
      break;
    default:
      res.status(400).json({ err: "Failed" });
      break;
  }
};
