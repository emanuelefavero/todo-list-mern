async function getItems() {
  const response = await fetch('http://localhost:4000/api/items')
  if (!response.ok) throw new Error('Failed to fetch items')

  return response.json()
}

interface Item {
  _id: string
  name: string
}

export default async function Home() {
  const items = await getItems()

  console.log(items)

  return (
    <main>
      <h1 className='text-3xl font-bold mb-4'>Todo List</h1>
      {items.map((item: Item) => (
        <div key={item._id}>{item.name}</div>
      ))}
    </main>
  )
}
