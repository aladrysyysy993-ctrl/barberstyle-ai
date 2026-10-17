import { useRouter } from 'next/router'
import { HAIRSTYLES } from '../../data/hairstyles'
import { useState } from 'react'

export default function Detail(){
  const router = useRouter()
  const { slug } = router.query
  const h = HAIRSTYLES.find(x=> x.slug === slug)
  const [fav,setFav] = useState(false)

  if(!h) return <div>جارٍ التحميل...</div>

  function toggleFav(){
    const list = JSON.parse(localStorage.getItem('bsai_favs')||'[]')
    if(list.includes(h.id)){
      const next = list.filter(i=>i!==h.id)
      localStorage.setItem('bsai_favs', JSON.stringify(next))
      setFav(false)
    } else {
      list.push(h.id)
      localStorage.setItem('bsai_favs', JSON.stringify(list))
      setFav(true)
    }
  }

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <img src={h.images[0]} className="w-full h-64 object-cover rounded" />
        </div>
        <div className="sm:col-span-2">
          <h1 className="text-2xl font-bold">{h.name}</h1>
          <p className="mt-2 text-gray-600">{h.description}</p>
          <div className="mt-4">
            <div><strong>مناسب لشمائل الوجه:</strong> {h.suitable_face_shapes.join(', ')}</div>
            <div><strong>نوع الشعر:</strong> {h.hair_types.join(', ')}</div>
            <div><strong>صعوبة العناية:</strong> {h.care_level}</div>
            <div className="mt-4 flex gap-2">
              <button onClick={toggleFav} className="btn-primary">{fav? 'محذوف من المفضلة':'احفظ للمفضلة'}</button>
              <a href={`/preview?style=${h.slug}`} className="btn-ghost">جربها على صورتي</a>
            </div>
            <div className="mt-4">
              <button onClick={()=>window.print()} className="text-sm text-gray-600 underline">أرني هذه القصة للحلاق</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
