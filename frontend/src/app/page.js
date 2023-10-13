import Image from 'next/image'
import SignIn from './auth/signin/signin'

export default function Home() {
  return (
    <main >
      <SignIn />
    </main>
  )
}
