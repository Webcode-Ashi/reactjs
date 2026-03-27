
import {ArrowRight} from 'lucide-react'
const rightcardcontent = (props) => {
  return (
    <div className='absolute top-0 left-0 h-full w-full p-10 flex flex-col justify-between'>
            <h2 className='bg-white h-10 w-10 flex items-center justify-center rounded-full text-2xl font-semibold'>{props.id+1}</h2>
            <div>
                <p className='text-shadow-2xs text-lg leading-relaxed text-white mb-14 font-semibold'>{props.intro}</p>
                <div className='flex items-center ' ><button className={`${props.color} font-medium text-white px-8 py-2 rounded-full text-lg`}>{props.tag}</button>
                <button className='bg-blue-600 font-medium text-white px-3 py-2 rounded-full text-lg'><ArrowRight /></button></div>
            </div>
        </div>
  )
}

export default rightcardcontent