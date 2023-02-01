import React from 'react'
import skills from '../../json/skills.json'
import { useState } from 'react';

export default function Skills(props) {
    let size = props.size;
    const viewSkill = () =>{
		let ar = [];
        skills.sort((a, b)=>(a.label>b.label)?-1:1);

		for(let i=0; i<Math.min(skills.length, size); i++){
			ar.push(
				<div className='col-6' style={{float:"left"}}>
					<div style={{padding:"15px"}}>
						<h4>{skills[i].name}</h4>
						<div className="progress">
							<div className="progress-bar" role="progressbar" aria-valuemin="0" aria-valuemax="100" style={{width:skills[i].label}}>
							{skills[i].label}
							</div>
						</div>
					</div>
				</div>
			)
		}
        
		return ar;
	}

    return (
        <div>
            {viewSkill()}
            <div style={{clear:"both"}}></div>
        </div>
    )
}
