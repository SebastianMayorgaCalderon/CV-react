export default function ContactBlock({ title, lines, className = '', onEmailClick }) {
  return (
    <div className={className}>
      <h1 className="text-[2em] tracking-[0.15em] font-bold text-white uppercase mb-[0.5em]">{title}</h1>
      {lines.map((line) => {
        const isEmail = line.includes('@')
        const isLink = line.includes('github.com')

        if (isLink) {
          return (
            <a
              key={line}
              href={`https://${line}`}
              target="_blank"
              rel="noopener noreferrer"
              className="underline-from-center cursor-pointer block"
            >
              GitHub: SebastianMayorgaCalderon
            </a>
          )
        }

        return (
          <p
            key={line}
            className={isEmail ? 'underline-from-center cursor-pointer' : ''}
            onClick={isEmail && onEmailClick ? () => onEmailClick(line) : undefined}
          >
            {line}
          </p>
        )
      })}
    </div>
  )
}
