// eBay Marketplace Account Deletion notification endpoint
// Returns 200 OK for all requests — PriceVet does not store any eBay user data
export default function handler(req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json({ status: 'ok' });
}
