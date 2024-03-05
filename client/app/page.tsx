import Item from '@/components/Item'
import { ItemType } from '@/types'
import { cookies } from 'next/headers'
import Link from 'next/link'

// * GET Items from server
async function getItems() {
  'use server'

  // ? disable cache to get the latest items
  const _cookies = cookies()

  const response = await fetch('http://localhost:4000/api/items')
  if (!response.ok) throw new Error('Failed to fetch items')

  return response.json()
}

// * Home component
export default async function Home() {
  const items = await getItems()

  return (
    <main>
      <h1 className='text-3xl font-bold mb-4'>Todo List</h1>

      <Link href='/new'>New Item</Link>

      {/* Items List */}
      <ul>
        {items.map((item: ItemType) => (
          <Item key={item._id} {...item} />
        ))}
      </ul>
    </main>
  )
}
