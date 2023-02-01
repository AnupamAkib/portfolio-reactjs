import React from 'react'
import edu from '../../json/education.json'

export default function Education_card(props) {
    let showResult = props.showResult;
    const getResult = () =>{
        let ar = [];
        for(let i=0; i<edu.length; i++){
            let data = edu[i];
            ar.push(
                <div className='col-6 subdiv' style={{float:"left"}}>
                    <table>
                        <tr>
                            <td style={{verticalAlign:"top"}}>
                                <img src={data.institute_logo} width='65px' style={{marginRight:"7px", marginTop:"10px"}}/>
                            </td>
                            <td>
                                <font style={{fontSize:"21px"}}><b>{data.degree}</b></font><br/>
                                <font style={{fontSize:"19px", fontWeight:""}}><i className='fa fa-graduation-cap' style={{marginRight:"7px"}}></i>{data.institute}</font><br/>
                                <font style={{fontSize:"18px"}}>
                                    <i className='fa fa-line-chart' style={{marginRight:"9px"}}></i>{data.result}<br/>
                                    <i className='fa fa-clock-o' style={{marginRight:"13px"}}></i>{data.duration}<br/>
                                    <i className='fa fa-map-marker' style={{marginRight:"20px"}}></i>{data.location}<br/>
                                </font>
                            </td>
                        </tr>
                    </table>
                    
                    
                </div>
            )
        }
        return ar;
    }

    return (
        <div>
            {getResult()}
            <div style={{clear:"both"}}></div>
        </div>
    )
}
