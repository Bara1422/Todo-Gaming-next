export const getCategories = async () => {
  const res = await fetch(`${process.env.API_URL}/category`)
  return res.json()
}
