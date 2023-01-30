import logo from './logo.svg';
import './App.css';
import IntroData from './json/intro.json'
import skills from './json/skills.json'

function App() {
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

	const viewSkill = () =>{
		let ar = [];
		for(let i=0; i<skills.length; i++){
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
				<div className='formatText'>
					<h1>Skills</h1><hr/>
					{viewSkill()}
				</div>
				<div style={{clear:"both"}}></div>

				<div align="center">
					<br/><br/><hr/>
					2023 - <b>Mir Anupam Hossain Akib</b>,<br/>
					5/1-G, Middle Paikpara (Biharipara Road), Mirpur-1, Dhaka<br/>
					Email: mirakib25@gmail.com
					<br/><br/>
				</div>
			</div>
			
			
			
		</>
	);
}

export default App;
