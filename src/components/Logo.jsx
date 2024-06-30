import Image from 'next/image'
import logoLaravel from '@/images/logos/gstc.png'

export function Logo(props) {
  return <Image src={logoLaravel} height={70} alt="Picture of the author" />
}
