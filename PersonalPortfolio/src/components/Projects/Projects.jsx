import React from 'react'
import projects from "../../data/projects.json"
import { ProjectCard } from './ProjectCard';

const Projects = () => {
  return (
    <>
      <section className='projectcontainer' id="projects">
        <h2 className='projecttitle'>Projects</h2>
        <div className='projectprojects'>
        {projects.map((project, id) => {
          return <ProjectCard key={id} project={project} />;
        })}
        </div>
      </section>
    </>
  )
}

export default Projects