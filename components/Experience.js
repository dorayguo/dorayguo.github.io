import Link from 'next/link'

export default function Experience({company, position, descriptions, time}) {
    return (
        <div className="box">
        <p className="box-position">{position}</p>
        <p className="box-company">{company} <span className="box-time">{time}</span></p>
        {descriptions.map((description, index) => (
           <p key={index} className="box-description">• {description}</p>
        ))}
      </div>
    )
}