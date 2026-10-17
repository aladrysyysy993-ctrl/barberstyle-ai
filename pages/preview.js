import { useRouter } from 'next/router'
import { HAIRSTYLES } from '../data/hairstyles'
import { useState, useEffect, useRef } from 'react'

export default function Preview(){
  const router = useRouter()
  const { style } = router.query
  const styleObj = HAIRSTYLES.find(h=>h.slug===style) || HAIRSTYLES[0]
  const [img, setImg] = useState(null)
  const [pos, setPos] = useState({x:50,y:20,scale:1})
  const ref = useRef()

  function onFile(e){
    const f = e.target.files?.[0]
    if(!f) return
    const url = URL.createObjectURL(f)
    setImg(url)
  }

  return (
    <div>
      <h1 className="text-2xl font-bold">جرب القصة على صورتك (معاينة تجريبية)</h1>
      <p className="text-gray-600 mt-2">هذه معاينة تجريبية — ليست معالجة متقدمة بالذكاء الاصطناعي.</p>

      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <input type="file" accept="image/*" onChange={onFile} />
          <div className="mt-4 border h-96 relative overflow-hidden" ref={ref}>
            {img ? (
              <img src={img} className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-gray-400">ارفع صورتك هنا</div>
            )}

            {/* overlay hairstyle */}
            <img src={styleObj.images[0]} style={{position:'absolute', left:`${pos.x}%`, top:`${pos.y}%`, transform:`translate(-50%,-50%) scale(${pos.scale})`, opacity:0.9, width:200}} />
          </div>
        </div>
        <div>
          <h3 className="font-semibold">ضبط المعاينة</h3>
          <div className="mt-2">
            <label className="block text-sm">الموقع الأفقي</label>
            <input type="range" min="0" max="100" value={pos.x} onChange={(e)=>setPos(p=>({...p,x:e.target.value}))} />
            <label className="block text-sm">الموقع العمودي</label>
            <input type="range" min="0" max="100" value={pos.y} onChange={(e)=>setPos(p=>({...p,y:e.target.value}))} />
            <label className="block text-sm">مقياس</label>
            <input type="range" min="0.5" max="3" step="0.01" value={pos.scale} onChange={(e)=>setPos(p=>({...p,scale:e.target.value}))} />

            <div className="mt-4">
              <button className="btn-primary" onClick={()=>alert('تم حفظ المعاينة محليًا (نسخة تجريبية)')}>حفظ المعاينة</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
