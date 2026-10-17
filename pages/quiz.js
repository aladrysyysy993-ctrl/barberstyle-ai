import { useState } from 'react'
import { useRouter } from 'next/router'

const OPTIONS = {
  faceShapes: ['round','oval','square','rectangle','triangle','diamond'],
  hairTypes: ['straight','wavy','curly','coily'],
  density: ['thin','medium','thick'],
  length: ['short','medium','long'],
  styles: ['classic','modern','sporty','luxury','bold'],
  time: ['0-5','5-10','10+']
}

export default function Quiz(){
  const router = useRouter()
  const [answers,setAnswers] = useState({
    face: '', hairType:'', density:'', length:'', style:'', time:''
  })

  function setField(k,v){
    setAnswers(prev=>({...prev,[k]:v}))
  }

  function submit(){
    localStorage.setItem('bsai_quiz', JSON.stringify(answers))
    router.push('/results')
  }

  return (
    <div>
      <h1 className="text-2xl font-bold">اختبار تحديد القصة المناسبة</h1>
      <p className="text-gray-600 mt-2">أجب عن الأسئلة التالية لنقدّم لك أفضل التوصيات.</p>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field title="شكل الوجه" options={OPTIONS.faceShapes} value={answers.face} onChange={(v)=>setField('face',v)} />
        <Field title="نوع الشعر" options={OPTIONS.hairTypes} value={answers.hairType} onChange={(v)=>setField('hairType',v)} />
        <Field title="كثافة الشعر" options={OPTIONS.density} value={answers.density} onChange={(v)=>setField('density',v)} />
        <Field title="طول الشعر المفضل" options={OPTIONS.length} value={answers.length} onChange={(v)=>setField('length',v)} />
        <Field title="أسلوبك المفضل" options={OPTIONS.styles} value={answers.style} onChange={(v)=>setField('style',v)} />
        <Field title="وقت التصفيف اليومي" options={OPTIONS.time} value={answers.time} onChange={(v)=>setField('time',v)} />
      </div>

      <div className="mt-6">
        <button onClick={submit} className="btn-primary">احصل على التوصيات</button>
      </div>
    </div>
  )
}

function Field({title,options,value,onChange}){
  return (
    <div>
      <div className="font-semibold">{title}</div>
      <div className="mt-2 flex flex-wrap gap-2">
        {options.map(opt=> (
          <button key={opt} onClick={()=>onChange(opt)} className={`px-3 py-1 rounded border ${value===opt? 'bg-black text-white':'bg-white text-gray-700'}`}>{opt}</button>
        ))}
      </div>
    </div>
  )
}
