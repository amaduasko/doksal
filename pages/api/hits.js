export default async (req, res) => {
  const { ids } = req.query
  const products = (await import('../../data/products.json')).default

  if (!ids || ids === "")
    return res.json({ error: true, message: "Не указаны параметры!" })

  const idsArray = ids.split(',').map(id => +id)

  const hits = products.filter(product => idsArray.includes(product.id))

  res.json({ error: false, hits })
}