import React from 'react'
interface StepCardProps{
    count: string,
    title: string,
    para: string,
}
export default function StepCard({count,title,para}:StepCardProps) {
  return (
    <div className='rounded-lg border-t-2 p-6 text-center border-gray-300 flex flex-col gap-4 justify-center items-center'>
      <div className='w-20 h-20 rounded-full bg-[#FF3811]/20 flex justify-center items-center'>
        <div className='w-14 h-14 bg-[#FF3811] rounded-full flex justify-center items-center text-xl font-bold text-white'>
            {count}
        </div>
      </div>
      <p className='text-xl font-bold text-[#151515] uppercase'>{title}</p>
      <p className='text-[#737373]' dangerouslySetInnerHTML={{ __html: para }} />
    </div>
  )
}
