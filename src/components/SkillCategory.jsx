export default function SkillCategory({ category, items }) {
  return (
    <div>
      <ul className="list-disc pl-4 mb-4">
        <li>
          <h3 className="text-[1.4rem] tracking-[0.1rem] font-bold text-black uppercase">{category}</h3>
        </li>
      </ul>
      <p className="text-[1.1rem] text-gray-600">{items.join(', ')}</p>
    </div>
  )
}
