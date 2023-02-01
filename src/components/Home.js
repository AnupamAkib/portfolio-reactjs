import '../App.css';
import IntroData from '../json/intro.json'
import Skills from './skills/Skills';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Education_card from './educations/Education_card';

function Home() {
	const navigate = useNavigate();
	const viewIntro = () =>{
		let ar = [];
		for(let i=0; i<IntroData.length; i++){
			let tmp = IntroData[i];
			let des = tmp.description.split("\n");
			let description = [];
			for(let k=0; k<des.length; k++){
				description.push(
					<>{des[k]} <br/></>
				)
			}
			ar.push(
				<div className='formatText'>
					<h1>{tmp.title}</h1><hr/>
					<p>{description}</p>
				</div>
			)
		}
		return ar;
	}

	

	return (
		<>
			<div className='intro'>
				<img style={{borderRadius:"50%", marginBottom:"18px"}} src='/akib.jpg' width='195px'/>
				<h1>MIR ANUPAM HOSSAIN AKIB</h1>
				<p>
					Software Engineer | Problem Solver | MERN Stack Developer
				</p>
				<a href='mailto:mirakib25@gmail.com'><i class="fa fa-envelope socialIcon"></i></a>
				<a href='https://www.linkedin.com/in/anupamakib/'><i class="fa fa-linkedin-square socialIcon"></i></a>
				<a href='https://github.com/AnupamAkib/'><i class="fa fa-github socialIcon"></i></a>
				<a href='https://facebook.com/anupam.akib'><i class="fa fa-facebook-square socialIcon"></i></a>
			</div>
			<br/>

			<div className='container'>
				{viewIntro()}

        {/*Section for Education */}
				<div className='padding20'>
					<h1>EDUCATIONS</h1><hr/>
					<Education_card />
					<center>
						<Button size="large" onClick={()=>navigate("/educations")}>
							<i className='fa fa-external-link' style={{marginRight:"9px"}}></i>
							View academic results
						</Button>
					</center>
				</div>

        
        {/*Section for SKILLS */}
				<div className='padding20'>
					<h1>Skills</h1><hr/>
					<Skills size={6}/>
					<center>
						<Button size="large" onClick={()=>navigate("/skills")}>
							<i className='fa fa-external-link' style={{marginRight:"9px"}}></i>
							View all skills
						</Button>
					</center>
				</div>


			</div>
			
			
			
		</>
	);
}

export default Home;
