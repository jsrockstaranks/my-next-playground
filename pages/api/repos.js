import data from "../../data-assets/users.json"
export default function handler(req, res) {
  res.status(200).json(data)
}