import Head from 'next/head'
import Experience from '../components/Experience'
import Project from '../components/Project'

const experiences = [
  {
    company: "Microsoft",
    positions: [
      // { 
      //   position: "Software Engineer",
      //   descriptions: [
      //     "Incoming Software Engineer on the Developer Division (DevDiv) team.",
      //   ],
      //   time: "Starting July 2023",
      // },
      { 
        position: "Software Engineering Intern",
        descriptions: [
          "Created a one-click solution for developers to automatically create and provision a VM to an existing IoT device representation.",
        ],
        time: "Summer 2022",
      },
      { 
        position: "Software Engineering Intern",
        descriptions: [
          "Developed creation wizard & post-creation page for orgs to review decentralized identity credentials.",
          "Hosted sweepstakes using decentralized raffles."
        ],
        time: "Summer 2021",
      },
      { 
        position: "Explore Intern",
        descriptions: [
          "Made a C# API for developers to test their SaaS apps for SCIM standards.",
          "Shortened time from 6 months to 2 weeks, found 6 existing app issues, and conducted 10+ cognitive walkthroughs."
        ],
        time: "Summer 2020",
      }
    ]
  },
  {
    company: "The Michigan Daily",
    positions: [
      { 
        position: "Software Engineer",
        descriptions: [
          "Developed a scrollytelling for the UM vs OSU rivalry through history.",
          "Contributed to the new mobile app (homepage, section, article page) and a digital collage on kinship",
        ],
        time: "Summer 2021 - Present",
      },
      { 
        position: "Managing Online Editor",
        descriptions: [
          "Co-Managed 50+ people in product design, engineering, and data teams.",
          "Managed projects, established specs & processes, and provided mentorship.",
          "Hosted meetings and regular 1:1s.",
        ],
        time: "2022, Summer 2021",
      },
    ]
  },
  {
    company: "Tech for Social Good",
    positions: [
      {
        position: "Project Chair",
        descriptions: [
          "Reviewed 80+ applications and created web dev and design workshops.",
          "Onboarded, hosted weekly syncs, and provided assistance for the PMs of 3 socially-impactful projects.",
        ],
        time: "Apr 2021 - Apr 2022",
      },
      {
        position: "Technical Lead",
        descriptions: [
          "Wrote specs, hosted team meetings, and updated HCD reference document.",
          "Developed profile, update profile, events, and event creation page using Django and PostgreSQL.",
        ],
        time: "Oct 2020 - Apr 2021",
      }
    ]
  }
]

const projects = [
  {
    year: "2022",
    items: [
      {
        title: "Rivalry Timeline",
        description: "Made a scrollytelling that narrated the UM vs OSU rivalry through history using Scrollama.",
        time: "Dec 2022"
      },
      {
        title: "Personal website",
        description: "Made this website using Next.js.",
        time: "Dec 2022"
      }
    ]
  },
  {
    year: "2021",
    items: [
      {
        title: "Sentiment analysis",
        description: "Trained & tested model for binary sentiment using NLTK and Twitter API.",
        time: "Jan 2021"
      },
      {
        title: "To-do list app",
        description: "Made a minimalistic to-do list app using React Native.",
        time: "Jan 2021"
      },
      {
        title: "The Miseducation Project",
        description: "Created galleries and modal popups using React.",
        time: "May 2021"
      }
    ]
  },
  {
    year: "2020",
    items: [
      {
        title: "Skill-sharing platform",
        description: "Made dynamic explore page, profile page, and homepage for MHacks project.",
        time: "Aug 2020"
      },
      {
        title: "Previous blog",
        description: "Made a blog using Jekyll.",
        time: "Aug - Dec 2020"
      },
      {
        title: "Webscraping scripts",
        description: "Scraped course availability & recent articles using Beautiful Soup and Selenium.",
        time: "Dec 2020"
      }
    ]
  }
]

export default function Home() {
  return (
    <div>
      <Head>
        <title>Dora Guo</title>
        <meta name="description" content="The personal website of Dora Guo." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icon.ico" />
      </Head>
      <div className="blurb-container">
        <div>
          <img id="dora" src="dora.jpg" alt="Picture of woman with black hair in a rose garden and under blue skies"></img>
          <p className="caption">
            Photo taken at the International Rose Test Garden in Portland, OR.
          </p>
        </div>
        <div className="blurb">
          <p>Hi, nice to meet you :)</p>
          <p>I'm Dora (she / her) and I study Computer Science at the University of Michigan, Ann Arbor.</p>
          <p>I like dancing, reading, and writing! Thinking about tech \ race \ power.</p>
          {/* <ul className="heart-list">
            <li>dance</li>
            <li>read</li>
            <li>and write (<Link href='/blog'>my blog</Link>)</li>
          </ul> */}
          <p>Contact me:</p>
          <p className='contact'>📧: doraguo at umich dot edu</p>
          <p className='contact'>🐤: <a href="https://twitter.com/dorayguo">@dorayguo</a></p>
          <p className='contact'>💼: <a href="https://www.linkedin.com/in/dora-guo/">dora-guo</a></p>
        </div>
      </div>
      <hr></hr>
      <div className="experiences">
        <div className="heading">
          <span className="red">E</span>
          <span className="yellow">x</span>
          <span className="green">p</span>
          <span className="blue">e</span>
          <span className="red">r</span>
          <span className="yellow">i</span>
          <span className="green">e</span>
          <span className="blue">n</span>
          <span className="red">c</span>
          <span className="yellow">e</span>
          <span className="green">s</span>
        </div>     
        {experiences.map((experience, index) => (
          <>
            <h3>{experience.company}</h3>
            <div key={index} className='box-container'>
              {experience.positions.map(({company, position, descriptions, time}: any, index) => (
                <Experience company={company} position={position} descriptions={descriptions} time={time} key={index}/>
              ))}
            </div>
          </>
        ))}
      </div>
      <hr></hr>
      <div className="projects">
        <div className="heading">
          <span className="red">P</span>
          <span className="yellow">r</span>
          <span className="green">o</span>
          <span className="blue">j</span>
          <span className="red">e</span>
          <span className="yellow">c</span>
          <span className="green">t</span>
          <span className="blue">s</span>
        </div>
        {projects.map((project) => (
          <>
            <h3>{project.year}</h3>
            <div className="project-container">
              {project.items.map(({title, description, time}, index) => (
                <Project key={index} title={title} description={description} time={time} />
              ))}
            </div>
          </>
        ))}
      </div>
    </div>
  )
}
