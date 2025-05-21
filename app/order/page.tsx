'use client'
import { useRouter } from "next/navigation";

export default function Order () {

       const router = useRouter();
      const handleClick = () => {
            console.log('order submitted');
            // router.replace('/')
            router.push('/')

      }
      return (
            <>
            <button onClick={handleClick}>order</button>
            </>
      )
}
