export default function ExpSubsection({ year, company, position, techStack, tasks }) {
  const [startYear, endYear] = year.split('-')
  const textStyle = 'text-[1.4rem] tracking-[0.1rem] font-bold text-black uppercase'
  const taskTextStyle = 'text-[1.4rem] font-normal text-gray-700'

  return (
    <div className="grid grid-cols-[20%_80%]">
      <span className={textStyle}>{startYear}-</span>
      <span className={textStyle}>{company}</span>
      <span className={textStyle}>{endYear}</span>
      <span className={textStyle}>{position}</span>
      <span></span>
      <span className={`${textStyle}`}>{techStack}</span>
      <span></span>
      <ul className="list-disc pl-4">
        {tasks.map((task) => (
          <li key={task} className={taskTextStyle}>
            {task}
          </li>
        ))}
      </ul>
    </div>
  )
}
