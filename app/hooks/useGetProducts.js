export const getProducts = async () => {
  const res = await fetch(`${process.env.API_URL}/products`)
  return res.json()
}
