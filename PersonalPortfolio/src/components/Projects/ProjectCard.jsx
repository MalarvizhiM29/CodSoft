import React from "react";
import { getImageUrl } from "../../utils";

export const ProjectCard = ({
  project: { title, imageSrc, description, skills, demo, source },
}) => {
  return (
    <div className="pcardcontainer">
      <img
        src={getImageUrl(imageSrc)}
        alt={`Image of ${title}`}
        className="pcardimg"
      />
      <h3 className="pcardtitle">{title}</h3>
      <p className="pcarddescription">{description}</p>
      <ul className="pcardskills">
        {skills.map((skill, id) => {
          return (
            <li key={id} className="pcardskill">
              {skill}
            </li>
          );
        })}
      </ul>
      <div className="pcardlinks">
        <a href={demo} className="pcardlink">
          Demo
        </a>
        <a href={source} className="pcardlink">
          Source
        </a>
      </div>
    </div>
  );
};