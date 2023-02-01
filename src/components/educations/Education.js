import React from 'react'
import Title from '../Title'
import edu from '../../json/education.json'
import { useEffect } from 'react'

export default function Education() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const displayEducation = () =>{
        let ar = [];
        for(let i=0; i<edu.length; i++){
            let d = edu[i];
            let course = edu[i].course_wise_result;
            let res = [];
            for(let j=0; j<course.length; j++){
                res.push(
                    <tr><td>{course[j].course}</td><td>{course[j].result}</td></tr>
                )
            }
            ar.push(
                <div className='padding20' style={{background:"#f0f0f0", margin:"15px", borderRadius:"8px"}}>
                    <h2>{d.degree}</h2>
                    <b>Institute: </b>{d.institute}<br/>
                    <b>Result: </b>{d.result}<br/>
                    <b>Duration: </b>{d.duration}<br/>
                    <b>Location: </b>{d.location}<br/><br/>
                    <b>Course Wise Result: </b><br/>
                    <div style={{background:"#fff", padding:"3px"}}>
                        <table width="100%" className='table table-striped'>
                            <thead>
                                <tr>
                                    <th>Course Name</th>
                                    <th>Result</th>
                                </tr>
                            </thead>
                            <tbody>
                                {res}
                            </tbody>
                        </table>
                    </div>
                </div>
            )
        }
        return ar;
    }

    return (
        <div className='container'>
            <Title>Academic Education</Title>
            {displayEducation()}
        </div>
    )
}
