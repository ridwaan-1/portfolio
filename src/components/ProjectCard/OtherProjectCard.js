import React from 'react';
import './ProjectCard.css';
const OtherProjectCard = ({name, demo_url, code_url, stacks, description}) => {
    return ( 
        <div className='otherproject_card'>
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
                {demo_url!="" && 
                <a className='live_demo' href={demo_url} target="_blank">Live Demo</a>
                }
                <a className='codes color-text' href={code_url} target="_blank">Codes</a>
            </div>
        </div>
    );
}
 
export default OtherProjectCard;