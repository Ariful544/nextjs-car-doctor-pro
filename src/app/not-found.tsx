import Link from 'next/link'
import { Button } from './components/ui/button'
import Image from 'next/image'
 
export default function NotFound() {
  return (
    <div className='flex flex-col justify-center items-center py-8'>
      <Link href="/"><Button>Return Home</Button></Link>
      <Image src={"/assets/404.png"} width={800} height={600} alt="not-found"/>
    </div>
  )
}