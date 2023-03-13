import React from 'react'
import project from '../../json/projects.json'
import Project_card from './Project_card';

export default function Projects(props) {
    function getProject(){
        const cnt = Math.min(props.cnt, project.length);
        let a = [];
        for(let i=0; i<cnt; i++){
            a.push(<Project_card 
                title = {project[i].title}
                description = {project[i].description}
                logo = {project[i].logo}
                duration = {project[i].duration}
                technology_used = {project[i].technology_used}
                github_link = {project[i].github_link}
                live_link = {project[i].live_link}
            />);
        }
        return a;
    }
    return (
        <div>
            {getProject()}
        </div>
    )
}
