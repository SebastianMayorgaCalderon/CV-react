export default function Toast({ message }) {
  return (
    <div
      className={`fixed bottom-8 left-1/2 -translate-x-1/2 bg-black text-white px-6 py-3 text-[1rem] tracking-[0.05rem] uppercase shadow-lg transition-all duration-300 ${
        message ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'
      }`}
    >
      {message}
    </div>
  )
}
