export default function ContactBlock({ title, lines, className = '' }) {
  return (
    <div className={className}>
      <h1 className="text-[2rem] tracking-[0.3rem] font-bold text-white uppercase mb-4">{title}</h1>
      {lines.map((line) => (
        <p key={line}>{line}</p>
      ))}
    </div>
  )
}
