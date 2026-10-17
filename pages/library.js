import { HAIRSTYLES } from '../data/hairstyles'
import Link from 'next/link'

export default function Library(){
  return (
    <div>
      <h1 className="text-2xl font-bold">مكتبة قصات الشعر</h1>
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {HAIRSTYLES.map(h=> (
          <Link key={h.id} href={`/hairstyle/${h.slug}`} className="block border rounded overflow-hidden">
            <img src={h.images[0]} className="w-full h-40 object-cover" />
            <div className="p-3">
              <div className="font-semibold">{h.name}</div>
              <div className="text-sm text-gray-500">{h.description}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
