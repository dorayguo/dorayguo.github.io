import Link from 'next/link'

export default function Project({title, description, time}) {
    return (
        <div className="project">
          <div className="project-header">
              <div className="project-header-title">{title}</div>
          </div>
          <div className="project-description">
            <p className="project-description-text">{description}</p>
            <p className='project-description-time'>{time}</p>
          </div>
        </div>
    )
}