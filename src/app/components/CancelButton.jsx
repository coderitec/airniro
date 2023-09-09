import {MdCancel} from 'react-icons/md'
import {VscClose} from 'react-icons/vsc'

export default function CancelButton() {
  return (


    <div className='h-[44px] w-[44px] shadow-lg absolute -top-[4%] -right-[4%] rounded-full border-none outline-none cursor-pointer flex items-center justify-center bg-[white]'>
      <VscClose size={24}/>
    </div>
  )
}
