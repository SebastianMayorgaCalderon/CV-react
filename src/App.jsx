import './App.css'
import ExpSubsection from './ExpSubsection'
import experience from './experience.json'

export default function App() {
  return (
    <div className="flex min-h-screen">
      <header className="w-1/5 bg-black flex flex-col items-center justify-between text-white pt-[8rem] pb-[4rem] sticky top-0 h-screen">
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
      <main className="w-4/5 pt-[10rem] ">
        <article className="w-3/5 mx-auto">
          <h1 className="text-[2rem] tracking-[0.2rem] font-bold text-black uppercase mb-4">About Me</h1>
          <p className="text-[1.2rem] text-gray-700 leading-relaxed">
            Full-stack developer with 5+ years of experience building and maintaining web and mobile applications across the JavaScript/TypeScript and
            C#/.NET ecosystems. Strong hands-on background in Node.js, Express.js, React, Next.js, and C#/.NET Core (Entity Framework, APIs,
            microservices), with working knowledge of Java/Spring Boot and Angular (MVC/MVVM, RxJS, NgRx). Experienced with Docker for
            containerized development environments and GitHub Actions CI/CD pipelines. Comfortable working across the full development lifecycle:
            architecture, REST API design, code review, unit testing, and mentoring.
          </p>
        </article>
        <br />
        <article className="w-3/5 mx-auto">
          <h1 className="text-[2rem] tracking-[0.2rem] font-bold text-black uppercase mb-4">EDUCATION</h1>
          <div>
            <h3 className="text-[1rem] tracking-[0.1rem] font-bold text-black uppercase mb-4">Cenfotec University</h3>
            <p className="text-[1.1rem] text-gray-600">2016 - 2025 | BS Computer Engineering Grad 2026</p>
          </div>
          <br />
          <div>
            <h3 className="text-[1rem] tracking-[0.1rem] font-bold text-black uppercase mb-4">BRAIN STATION PROGRAM</h3>
            <p className="text-[1.1rem] text-gray-600">2019-2019 | Certificate Course in web development, worked with technologies such as ReactJS, Java, Springboot and  mongoDB, Node JS, Express js, Deno.</p>
          </div>
        </article>
        <br />
        <article className="w-3/5 mx-auto">
          <h1 className="text-[2rem] tracking-[0.2rem] font-bold text-black uppercase mb-4">Experience</h1>
          {experience.map((exp) => (
            <ExpSubsection
              key={`${exp.company}-${exp.year}`}
              year={exp.year}
              company={exp.company}
              position={exp.position}
              techStack={exp.techStack}
              tasks={exp.tasks}
            />
          ))}
        </article>
      </main>
    </div>
  )
}
