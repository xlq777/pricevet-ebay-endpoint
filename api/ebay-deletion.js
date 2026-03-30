const crypto = require('crypto');

const VERIFICATION_TOKEN = 'pricevet2026ebaymarketplacedeletiontoken';

module.exports = (req, res) => {
      if (req.method === 'GET') {
              const challengeCode = req.query.challenge_code;
              if (!challengeCode) {
                        return res.status(400).json({ error: 'Missing challenge_code' });
              }
              const hash = crypto.createHash('sha256');
              hash.update(challengeCode);
              hash.update(VERIFICATION_TOKEN);
              hash.update('https://pricevet-ebay-endpoint.vercel.app/ebay-deletion');
              const responseHash = hash.digest('hex');
              return res.status(200).json({ challengeResponse: responseHash });
      }

      if (req.method === 'POST') {
              console.log('eBay deletion notification received:', JSON.stringify(req.body));
              return res.status(200).send('OK');
      }

      res.status(405).send('Method Not Allowed');
};
