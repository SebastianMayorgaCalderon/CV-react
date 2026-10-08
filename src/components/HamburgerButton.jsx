export default function HamburgerButton({ open, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="Toggle menu"
      className="fixed top-4 left-4 z-[60] flex h-10 w-10 flex-col items-center justify-center gap-1.5 bg-black md:hidden"
    >
      <span
        className={`block h-0.5 w-6 bg-white transition-transform duration-300 ${
          open ? 'translate-y-2 rotate-45' : ''
        }`}
      />
      <span
        className={`block h-0.5 w-6 bg-white transition-opacity duration-300 ${
          open ? 'opacity-0' : ''
        }`}
      />
      <span
        className={`block h-0.5 w-6 bg-white transition-transform duration-300 ${
          open ? '-translate-y-2 -rotate-45' : ''
        }`}
      />
    </button>
  )
}
