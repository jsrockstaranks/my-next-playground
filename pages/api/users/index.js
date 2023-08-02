
export default async function handler(req, res) {
  const data  = await import("../../../data-assets/users.json");
  // console.log('I am called index.js from API path ', data);
  res.status(200).json(data)
}