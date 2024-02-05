import React from 'react'
import skills from "../../data/skills.json"
import history from "../../data/history.json"
import { getImageUrl } from '../../utils'

const Experience = () => {
  return (
    <>
      <section id="experience" className='expcontainer'>
        <h2 className='exptitle'>Experience</h2>
        <div className='expcontent'>
          <div className='expskills'>{
            skills.map((skill, id)=>{
              return (
                <div key={id} className='expskill'>
                <div className='expskillimgcontainer'>
                   <img src={getImageUrl(skill.imageSrc)} alt={skill.title}/>
                </div>
                <p>{skill.title}</p>
              </div>
              )
            })
          }</div>
          <ul className='exphistory'>
            {
              history.map((historyItem, id)=>{
                return (
                  <li key={id} className='exphistoryitem'>
                    <img src={getImageUrl(historyItem.imageSrc)} 
                    alt={`${historyItem.organisation} Logo`}/>
                    <div className='exphistoryitemdet'>
                      <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                      <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                      <ul>
                      {historyItem.experiences.map((experience, id) => {
                      return <li key={id}>{experience}</li>;
                      })}
                  </ul>
                    </div>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </section>
    </>
  )
}

export default Experience