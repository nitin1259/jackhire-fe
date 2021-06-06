import React, { useState ,useEffect} from 'react';
import {Link} from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux'
import Header from '../Layout/Header';
import Footer from '../Layout/Footer';
import {employerRegister} from './../../redux/actions/employeeActions/employeeAuthActions'
var bnr = require('./../../images/banner/bnr2.jpg');

const EmployeeRegister =({location,history})=>{

	const [company_name,setCompany_name]=useState('');
	const [description,setdescription]=useState('');
	const [email,setEmail]=useState('');
	const [phone_number,setPhonenumber]=useState('');
	const [password,setPassword]=useState('');

	const dispatch=useDispatch();
	

	useEffect(()=>{
	
	},[])


	const submitHandler=(e)=>{
		e.preventDefault()
		const body={
		company_name,
		email,
		password
		}
		dispatch(employerRegister(body))	
	}
	
		return(
			<div className="page-wraper">
				<Header />
				<div className="page-content">
				
					<div className="dez-bnr-inr overlay-black-middle bg-pt" style={{backgroundImage: `url(${bnr})`}}>
						<div className="container">
							<div className="dez-bnr-inr-entry">
								<h1 className="text-white">Employeer Register</h1>	
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
												<h4 className="font-weight-700 m-b5">BASIC INFORMATION</h4>
												<p className="font-weight-600">If you have an account with us, please log in.</p>
												<div className="form-group">
													<label className="font-weight-700">Company Name *</label>
													<input name="dzName" required="" className="form-control" value={company_name} onChange={(e)=>setCompany_name(e.target.value)} placeholder="Company Name Name" type="text" />
												</div>
												<div className="form-group">
													<label className="font-weight-700">E-MAIL *</label>
													<input name="dzName" required="" className="form-control" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Your Email Address" type="email" />
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
export default EmployeeRegister;