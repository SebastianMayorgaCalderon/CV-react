import './App.css'
import ExpSubsection from './components/ExpSubsection'
import SectionTitle from './components/SectionTitle'
import EducationEntry from './components/EducationEntry'
import SkillCategory from './components/SkillCategory'
import ContactBlock from './components/ContactBlock'
import experience from './experience.json'
import education from './education.json'
import skills from './skills.json'

export default function App() {
  return (
    <div className="flex min-h-screen">
      <header className="w-1/5 bg-black flex flex-col items-center justify-between text-white pt-[8rem] pb-[4rem] sticky top-0 h-screen">
        <div className="developer-Name-wrapper rotate-270 whitespace-nowrap text-right mt-36">
          <h1 className="text-[3.8rem] leading-[3.5rem] tracking-[0.5rem] font-bold">SEBASTIAN<br />MAYORGA</h1>
          <h3 className="text-[1.5rem] text-gray-300 tracking-[0.2rem] uppercase">Fullstack Developer<br />Frontend Specialist</h3>
        </div>
        <div className="contact-wrapper whitespace-nowrap text-left">
          <ContactBlock
            title="Contact"
            lines={['+506 8761 5728', 'sebasmayorga7@gmail.com', 'sebasmayorga708@gmail.com']}
          />
          <ContactBlock
            title="Referrals"
            className="mt-8"
            lines={[
              'mauricio.poveda@gmail.com',
              'ljpearly@gmail.com',
              'brandonburtner@gmail.com',
              'erica.durso@gmail.com',
              'hecgonzalez1@gmail.com',
            ]}
          />
        </div>
      </header>
      <main className="w-4/5 pt-[10rem] ">
        <article className="w-3/5 mx-auto">
          <SectionTitle>About Me</SectionTitle>
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
          <SectionTitle>Education</SectionTitle>
          {education.map((edu, index) => (
            <div key={edu.institution}>
              {index > 0 && <br />}
              <EducationEntry institution={edu.institution} details={edu.details} />
            </div>
          ))}
        </article>
        <br />
        <article className="w-3/5 mx-auto">
          <SectionTitle>Experience</SectionTitle>
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
        <br />
        <article className="w-3/5 mx-auto">
          <SectionTitle>Skills</SectionTitle>
          {skills.map((skill, index) => (
            <div key={skill.category}>
              {index > 0 && <br />}
              <SkillCategory category={skill.category} items={skill.items} />
            </div>
          ))}
        </article>
      </main>
    </div>
  )
}
