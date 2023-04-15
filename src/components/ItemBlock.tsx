import { ReactNode } from 'react'

type props = {
  icon: ReactNode
  title: string
  desciption: string
};

const ItemBlock = ({}: props) => {
    return (
      <div className='flex flex-col justify-start items-center gap-10px w-325px'>
			  123
      </div>
    )
}

export default ItemBlock
