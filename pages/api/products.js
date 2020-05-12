export default async (req, res) => {
  const { id, start, limit, category } = req.query
  const products = (await import('../../data/products.json')).default

  let count = products.length
  let filteredProducts = products

  if (id) {
    filteredProducts = products.filter(p => p.id === +id)
    return res.json({ product: filteredProducts.length ? filteredProducts[0] : null })
  }

  if (category) {
    filteredProducts = products.filter(p => p.category.includes(category))
    count = filteredProducts.length
  }

  const startA = start ? +start : 0
  const endA = limit ? startA + +limit : filteredProducts.length

  filteredProducts = filteredProducts.slice(startA, endA)

  res.json({ products: filteredProducts, count })
}