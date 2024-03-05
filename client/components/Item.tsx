import { ItemType } from '@/types'

interface Props extends ItemType {}

export default function Item({ _id, name }: Props) {
  return (
    <>
      <li>
        <input type='checkbox' id={_id} className='cursor-pointer peer' />
        <label htmlFor={_id} className='peer-checked:line-through'>
          {name}
        </label>
      </li>
    </>
  )
}
