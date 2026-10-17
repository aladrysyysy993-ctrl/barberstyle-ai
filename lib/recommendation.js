export default function score(hairstyle, answers){
  if(!answers) return 0
  let s = 0
  // weights
  const w = {face:40, hairType:25, density:15, length:10, style:10}
  if(hairstyle.suitable_face_shapes.includes(answers.face)) s += w.face
  if(hairstyle.hair_types.includes(answers.hairType)) s += w.hairType
  // density and length simple heuristics
  if(answers.density === 'thick' && hairstyle.style_tags.includes('bold')) s += w.density
  if(answers.length === 'short' && hairstyle.care_level.includes('easy')) s += w.length
  if(hairstyle.style_tags.includes(answers.style)) s += w.style
  return s
}
