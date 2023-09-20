import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen max-h-screen flex-col items-center justify-center p-24 bg-cover bg-center bg-white" style={{ backgroundImage: `url(Coming.png)` }}>
     <div className="text-center">
      <h2 className="font-['Syne', sans-serif] text-black font-regular text-2xl">Building...</h2>
     </div>
    </main>
  )
}
