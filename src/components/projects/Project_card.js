import React, { useEffect, useState } from 'react'

export default function Project_card(props) {
    const [description, setDescription] = useState(props.description);
    const [description_less, setDescription_less] = useState("");
    const [description_full, setDescription_full] = useState(props.description);
    const [flag, setFlag] = useState("");

    const moreLess = () =>{
        if(flag=="More"){
            setFlag("Less");
            setDescription(description_full);
        }
        else if(flag=="Less"){
            setFlag("More");
            setDescription(description_less);
        }
    }

    function viewDescription(){
        if(description_full.length >= 300){
            setFlag("More");
            let s="";
            for(let i=0; i<297; i++){
                s += description_full[i];
            }
            s += "...";
            setDescription_less(s);
            setDescription(s);
        }
    }
    useEffect(() => {
        viewDescription();
    }, [])
    

    return (
        <div>
            <table>
                <tr>
                    <td width="2px" style={{paddingRight:"12px"}}><img src={props.logo} width="80px"/></td>
                    <td>
                        <h3>{props.title}</h3>
                        <b><i class="fa fa-cog"></i> </b>{props.technology_used}
                    </td>
                </tr>
                <tr>
                    <td colSpan={2}>
                        <b>Description: </b>{description} {flag!=""? <font color="#0d6efd" style={{fontWeight:""}} onClick={moreLess}>{flag}</font> : ""}<br/>
                        <b><i class="fa fa-calendar" style={{marginRight:"7px"}}></i> </b>{props.duration}<br/>
                        {props.github_link==""? "" : <a href={props.github_link} target="_blank" style={{textDecoration:"none"}}><i className="fa fa-external-link" style={{marginRight:"8px"}}></i>SOURCE CODE</a>}
                        {props.github_link!="" && props.live_link!=""? <font style={{marginRight:"15px", marginLeft:"15px"}}>|</font> : ""}
                        {props.live_link==""? "" : <a href={props.live_link} target="_blank" style={{textDecoration:"none"}}><i className="fa fa-eye" style={{marginRight:"8px"}}></i>LIVE LINK</a>}
                        
                    </td>
                </tr>
            </table>
            <br/>
        </div>
    )
}
