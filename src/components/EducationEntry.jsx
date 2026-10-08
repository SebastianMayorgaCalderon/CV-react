export default function EducationEntry({ institution, details }) {
  return (
    <div>
      <h3 className="text-[1.4rem] tracking-[0.1rem] font-bold text-black uppercase mb-4">{institution}</h3>
      <p className="text-[1.1rem] text-gray-600">{details}</p>
    </div>
  )
}
