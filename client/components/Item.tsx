import { ItemType } from '@/types'

interface Props extends ItemType {}

export default function Item({ _id, name }: Props) {
  return (
    <>
      <li>
        <input type='checkbox' id={_id} className='cursor-pointer peer' />
        <label
          htmlFor={_id}
          className='cursor-pointer peer-checked:line-through peer-checked:text-slate-500'
        >
          {name}
        </label>
      </li>
    </>
  )
}
