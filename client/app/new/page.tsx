import Link from 'next/link'
import { redirect } from 'next/navigation'

async function addItem(data: FormData) {
  'use server'

  const name = data.get('name')?.valueOf() // * Get name from form data
  if (!name) {
    throw new Error('Name is required')

    redirect('/new') // * Redirect to new
  }

  const response = await fetch('http://localhost:4000/api/items', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name }),
  })

  if (!response.ok) throw new Error('Failed to add item')

  // Wait for the server to add the item to the database and then redirect
  await response.json()
  redirect('/') // * Redirect to home
}

export default function Page() {
  return (
    <main>
      <h1 className='text-3xl font-bold'>Add new item</h1>

      <form action={addItem} className='flex flex-col gap-4 mt-4 max-w-xs'>
        <input
          type='text'
          placeholder='New item'
          className='rounded p-2 text-black'
          name='name' // * name
        />
        <div
          className='
          flex
          gap-2
          mt-4
          justify-end
        '
        >
          <button type='submit' className='border text-white rounded p-2'>
            Add
          </button>
          <Link href='..' className='border text-white rounded p-2'>
            Cancel
          </Link>
        </div>
      </form>
    </main>
  )
}
