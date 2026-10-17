import { useEffect, useState } from 'react'
import { HAIRSTYLES } from '../data/hairstyles'

export default function Favorites(){
  const [list,setList] = useState([])

  useEffect(()=>{
    const ids = JSON.parse(localStorage.getItem('bsai_favs')||'[]')
    const items = HAIRSTYLES.filter(h=> ids.includes(h.id))
    setList(items)
  },[])

  if(list.length===0) return <div>لا توجد قصات محفوطة بعد.</div>

  return (
    <div>
      <h1 className="text-2xl font-bold">القصات المفضلة</h1>
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
        {list.map(h=> (
          <div key={h.id} className="border rounded p-3 flex gap-3">
            <img src={h.images[0]} className="w-24 h-24 object-cover rounded" />
            <div>
              <div className="font-semibold">{h.name}</div>
              <div className="text-sm text-gray-500">{h.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
