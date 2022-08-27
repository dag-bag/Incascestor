/** @format */

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }
  if (req.body.secret !== "vir") {
    return res.status(401).json({ message: "Invalid token" });
  }
  let body = req.body;
  if (!body) {
    return res.status(400).json({ message: "No body" });
  }
  const slugToValidate = body.slugToValidate;
  try {
    if (slugToValidate) {
      await res.revalidate(slugToValidate);

      return res.json({ revalidated: true });
    }
  } catch (err) {
    // If there was an error, Next.js will continue
    // to show the last successfully generated page
    return res.status(500).send("Error r33evalidating");
  }
}
