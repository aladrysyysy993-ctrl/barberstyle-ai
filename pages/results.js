import { useEffect, useState } from 'react'
import { HAIRSTYLES } from '../data/hairstyles'
import score from '../lib/recommendation'

export default function Results(){
  const [answers,setAnswers] = useState(null)
  const [results,setResults] = useState([])

  useEffect(()=>{
    const raw = localStorage.getItem('bsai_quiz')
    if(!raw) return
    const a = JSON.parse(raw)
    setAnswers(a)
    const scored = HAIRSTYLES.map(h=> ({...h, score: score(h,a)}))
      .sort((a,b)=>b.score-a.score)
      .slice(0,5)
    setResults(scored)
  },[])

  if(!answers) return <div className="text-gray-500">لم يتم العثور على إجابات الاختبار. ابدأ الاختبار أولًا.</div>

  return (
    <div>
      <h1 className="text-2xl font-bold">نتائج الاختبار</h1>
      <p className="text-gray-600 mt-2">أفضل القصات الخمسة لك بناءً على إجاباتك:</p>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
        {results.map(r=> (
          <div key={r.id} className="border rounded p-4">
            <img src={r.images[0]} className="w-full h-40 object-cover rounded" />
            <div className="mt-2 flex items-center justify-between">
              <div>
                <div className="font-semibold">{r.name}</div>
                <div className="text-sm text-gray-500">لماذا: {explain(r,answers)}</div>
              </div>
              <div>
                <a href={`/hairstyle/${r.slug}`} className="text-sm text-blue-600">تفاصيل</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function explain(h,a){
  const reasons = []
  if(h.suitable_face_shapes.includes(a.face)) reasons.push('يناسب شكل وجهك')
  if(h.hair_types.includes(a.hairType)) reasons.push('يناسب نوع شعرك')
  if(h.style_tags.includes(a.style)) reasons.push('يتوافق مع ذوقك')
  return reasons.join('، ') || 'مقترح عام'
}
