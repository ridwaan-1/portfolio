import React from 'react';
import OtherProjectCard from '../ProjectCard/OtherProjectCard';
import ProjectCard from '../ProjectCard/ProjectCard';
import Separator from '../Separator/Separator';
import './Projects.css';

import featuredProjects from '../../constants/featured';
import otherProjects from '../../constants/other';
const Projects = () => {
    return ( 
        <div>
            <h1 className='color-text'>Featured Projects</h1>
            {featuredProjects.map((p, i) => (
                <ProjectCard 
                    key={i}
                    name={p.name}
                    img_url={p.img_url}
                    demo_url={p.demo_url}
                    code_url={p.code_url}
                    stacks={p.stacks}
                    description={p.description}
                />
            ))} 

            <Separator />
            <h1 className='color-text'>Other Projects</h1>
            <div className='otherprojects_container'>
                {otherProjects.map((o,i) => (
                <OtherProjectCard 
                    key={i}
                    name={o.name}
                    demo_url={o.demo_url}
                    code_url={o.code_url}
                    stacks={o.stacks}
                    description={o.description}
                />
            ))} 
            </div>
        </div>
    );
}
 
export default Projects;