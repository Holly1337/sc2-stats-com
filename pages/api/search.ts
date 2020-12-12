import { NextApiRequest, NextApiResponse } from 'next'
import { search } from '../../src/util/search'

export default (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'GET') {
    res.statusCode = 404
    res.json({ status: 404 })
  }

  const { q } = req.query
  const results = search(q)

  res.statusCode = 200
  res.json({
    results,
    length: results.length
  })
}
