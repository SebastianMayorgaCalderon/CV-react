import './App.css'

export default function App() {
  return (
    <div className="flex min-h-screen">
      <header className="w-1/5 bg-black flex flex-col items-center justify-between text-white pt-[8rem] pb-[4rem]">
        <div className="developer-Name-wrapper rotate-270 whitespace-nowrap text-right mt-36">
          <h1 className="text-[3.8rem] leading-[3.5rem] tracking-[0.5rem] font-bold">SEBASTIAN<br />MAYORGA</h1>
          <h3 className="text-[1.5rem] text-gray-300 tracking-[0.2rem] uppercase">Fullstack Developer<br />Frontend Specialist</h3>
        </div>
        <div className="contact-wrapper whitespace-nowrap text-left">
          <h1 className="text-[2rem] tracking-[0.3rem] font-bold text-white uppercase mb-4">Contact</h1>
          <p>+506 8761 5728</p>
          <p>sebasmayorga7@gmail.com</p>
          <p>sebasmayorga708@gmail.com</p>
          <h1 className="text-[2rem] tracking-[0.3rem] font-bold text-white uppercase mt-8 mb-4">Referrals</h1>
          <p>mauricio.poveda@gmail.com</p>
          <p>ljpearly@gmail.com</p>
          <p>brandonburtner@gmail.com</p>
          <p>erica.durso@gmail.com</p>
          <p>hecgonzalez1@gmail.com</p>
        </div>
      </header>
      <main className="w-4/5 pt-[10rem]">
        <h1>Hello World</h1>
      </main>
    </div>
  )
}
