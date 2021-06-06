import React,{ useState ,useEffect} from 'react';
import {Link} from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux'
import Header from '../Layout/Header';
import Footer from '../Layout/Footer';
import {candidateRegister} from './../../redux/actions/candidateActions/candidateAuthActions'
import Loader from './../Element/Loader'
import Message from './../Element/Message'

var bnr = require('./../../images/banner/bnr2.jpg');


//candidate registration

const Register1 =({history})=>{

	const [first_name,setFirst_name]=useState('');
	const [last_name,setLast]=useState('');
	const [email,setEmail]=useState('');
	const [phone_number,setPhonenumber]=useState('');
	const [password,setPassword]=useState('');


	const dispatch=useDispatch();
	

	useEffect(()=>{
		
	},[])


	const submitHandler=(e)=>{
		e.preventDefault()
		const body={
		first_name,
		last_name,
		email,
		password
		}
		dispatch(candidateRegister(body))
		history.push('/candidate/login')
	}
	
		return(
			<div className="page-wraper">
				<Header />
				<div className="page-content">
				
					<div className="dez-bnr-inr overlay-black-middle bg-pt" style={{backgroundImage: `url(${bnr})`}}>
						<div className="container">
							<div className="dez-bnr-inr-entry">
								<h1 className="text-white">Register</h1>
								
								<div className="breadcrumb-row">
									<ul className="list-inline">
										<li><Link to={"#"}>Home</Link></li>
										<li>Register</li>
									</ul>
								</div>
								
							</div>
						</div>
					</div>
					
					<div className="section-full content-inner browse-job shop-account">
						
						<div className="container">
							<div className="row">
								<div className="col-md-12 m-b30">
									<div className="p-a30 job-bx max-w500 radius-sm bg-white m-auto">
										<div className="tab-content">
											<form id="login" className="tab-pane active">
												<h4 className="font-weight-700 m-b5">PERSONAL INFORMATION</h4>
												<p className="font-weight-600">If you have an account with us, please log in.</p>
												<div className="form-group">
													<label className="font-weight-700">First Name *</label>
													<input name="dzName" required="" className="form-control" value={first_name} onChange={(e)=>setFirst_name(e.target.value)} placeholder="First Name" type="text" />
												</div>
												<div className="form-group">
													<label className="font-weight-700">Last Name *</label>
													<input name="dzName" required="" value={last_name} onChange={(e)=>setLast(e.target.value)} className="form-control" placeholder="Last Name" type="text" />
												</div>
												<div className="form-group">
													<label className="font-weight-700">E-MAIL *</label>
													<input name="dzName" required="" value={email} onChange={(e)=>setEmail(e.target.value)} className="form-control" placeholder="Your Email Address" type="email" />
												</div>
												<div className="form-group">
													<label className="font-weight-700">Password *</label>
													<input name="dzName" required="" className="form-control " value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Type Password" type="password" />
												</div>
												<div className="text-left">
													<button onClick={submitHandler} className="site-button button-lg outline outline-2">CREATE</button>
												</div>
											</form>
										</div>
									</div>
								</div>
							</div>
						</div>
						
					</div>
					
				</div>	
				
				<Footer />
			</div>
		)
	
}
export default Register1;