import React from 'react';
import './ProjectCard.css';
const ProjectCard = ({name, img_url, demo_url, code_url, stacks, description}) => {
    return (  
        <div className='project_card'>
            <img className='project_card-img' src={img_url} />
            <div>
                <p className='project_card-title color-subtext'>
                    {name}
                </p>
                <p className='project_card-description color-text'>
                    {description}
                </p>
                <div className='project_card-techstacks'>
                    <p className='color-subtext'>Stack: </p>
                    <div className='project_card-stacklists color-text'>
                        {stacks.map((s,i) => (
                            <p key={i}>{s}</p>
                        ))}
                    </div>
                </div>
                <div className='project_card-buttons'>
                    <a className='live_demo' href={demo_url} target="_blank">Live Demo</a>
                    <a className='codes color-text' href={code_url} target="_blank">Codes</a>
                </div>
            </div>
        </div>
    );
}
 
export default ProjectCard;