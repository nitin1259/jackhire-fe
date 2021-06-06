import React, {useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import Header2 from './../Layout/Header2';
import Footer from './../Layout/Footer';
import {Form}  from 'react-bootstrap';       
import {useSelector,useDispatch} from 'react-redux';
import {postJobs} from './../../redux/actions/jobActions/jobActions'
import Message from './../Element/Message';

const Componypostjobs=({history})=> {

	const dispatch=useDispatch();
	const employeeLogin=useSelector(state=>state.employeeLogin);
	const {loading:loginLoading,employerInfo,error:errorLogin}=employeeLogin;

	const postsCreated=useSelector(state=>state.jobsCreate);
	const {loadng,success,error}=postsCreated;
	console.log("error",error);

	const [title,setTitle]=useState('');
	const [employer_id,setEmployer_id]=useState(employerInfo.id);
	const [description,setDescription]=useState('');
	const [location,setLocation]=useState('');
	const [minimum_salary,setMinimum_salary]=useState(0);
	const [maximum_salary,setMaximum_salary]=useState('');
	const [number_of_openings,setNumber_of_openings]=useState(1);
	const [responsibilities,setResponsibilities]=useState('');
	const [experience,setExperience]=useState('');

	useEffect(()=>{
	if(!employerInfo){
		history.push('/employee/login');
	}
	},[employerInfo])


	const submitHandler=(e)=>{
		e.preventDefault()
		const body={
			title,employer_id,description,location,minimum_salary,
			maximum_salary,number_of_openings,responsibilities,experience
		}
		console.log(body)
		dispatch(postJobs(body));
		setTitle('');	
		setEmployer_id('')
		setDescription('')
		setLocation('')
		setMinimum_salary('')
		setMaximum_salary('')
		setNumber_of_openings('')
		setResponsibilities('')
		setExperience('')

	}

		return(
			<>
				<Header2 />
				{error?<Message variant='warning'>{error}</Message>:null}
					<div className="page-content bg-white">
						
						<div className="content-block">
							
							<div className="section-full bg-white p-t50 p-b20">
								<div className="container">
									<div className="row">
										<div className="col-xl-3 col-lg-4 m-b30">
											<div className="sticky-top">
												<div className="candidate-info company-info">
													<div className="candidate-detail text-center">
														<div className="canditate-des">
															<Link to={""}>
																<img alt="" src={require("./../../images/logo/icon3.jpg")} />
															</Link>
															<div className="upload-link" title="update" data-toggle="tooltip" data-placement="right">
																<input type="file" className="update-flie" />
																<i className="fa fa-pencil"></i>
															</div>
														</div>
														<div className="candidate-title">
															<h4 className="m-b5"><Link to={""}>@COMPANY</Link></h4>
														</div>
													</div>
													<ul>
														<li><Link to={"/company-profile"}>
															<i className="fa fa-user-o" aria-hidden="true"></i> 
															<span>Company Profile</span></Link></li>
														<li><Link to={"/company-post-jobs"} className="active">
															<i className="fa fa-file-text-o" aria-hidden="true"></i> 
															<span>Post A Job</span></Link></li>
														<li><Link to={"/company-transactions"}>
															<i className="fa fa-random" aria-hidden="true"></i>
															<span>Transactions</span></Link></li>
														<li><Link to={"/company-manage-job"}>
															<i className="fa fa-briefcase" aria-hidden="true"></i> 
															<span>Manage jobs</span></Link></li>
														<li><Link to={"/company-resume"}>
															<i className="fa fa-id-card-o" aria-hidden="true"></i>
															<span>Resume</span></Link></li>
														<li><Link to={"/jobs-change-password"}>
															<i className="fa fa-key" aria-hidden="true"></i> 
															<span>Change Password</span></Link></li>
														<li><Link to={"./"}>
															<i className="fa fa-sign-out" aria-hidden="true"></i> 
															<span>Log Out</span></Link></li>
													</ul>
												</div>
											</div>
										</div>
										<div className="col-xl-9 col-lg-8 m-b30">
											<div className="job-bx submit-resume">
												<div className="job-bx-title clearfix">
													<h5 className="font-weight-700 pull-left text-uppercase">Post A Job</h5>
													<Link to={"/company-profile"} className="site-button right-arrow button-sm float-right">Back</Link>
												</div>
												<form>
													<div className="row">
														<div className="col-lg-6 col-md-6">
															<div className="form-group">
																<label>Job Title</label>
																<input type="text" className="form-control" value={title} onChange={(e)=>setTitle(e.target.value)} placeholder="Enter Job Title" />
															</div>
														</div>
													
														<div className="col-lg-6 col-md-6">
															<div className="form-group">
																<label>Job Type</label>
																<Form.Control as="select" custom className="custom-select">
																	<option>Full Time</option>
																	<option>Part Time</option>
																	<option>Internship</option>
																	<option>Freelance</option>
																</Form.Control>
															</div>
														</div>
														<div className="col-lg-6 col-md-6">
															<div className="form-group">
																<label>Experience</label>
																<Form.Control as="select" value={experience} onChange={(e)=>setExperience(e.target.value)} custom className="custom-select">
																	<option>1 Years</option>
																	<option>2 Years</option>
																	<option>3 Years</option>
																	<option>4 Years</option>
																	<option>5 Years</option>
																</Form.Control>
															</div>
														</div>
														<div className="col-lg-6 col-md-6">
															<div className="form-group">
																<label>Minimum Salary ($):</label>
																<input type="email" className="form-control" value={minimum_salary} onChange={(e)=>setMinimum_salary(e.target.value)} placeholder="e.g. 10000" />
															</div>
														</div>
														<div className="col-lg-6 col-md-6">
															<div className="form-group">
																<label>Maximum Salary ($):</label>
																<input type="text" value={maximum_salary} onChange={(e)=>setMaximum_salary(e.target.value)} className="form-control" placeholder="e.g. 20000" />
															</div>
														</div>
														<div className="col-lg-6 col-md-6">

														</div>
														<div className="col-lg-6 col-md-6">
															<div className="form-group">
																<label>Location</label>
																<input type="text" value={location} onChange={(e)=>setLocation(e.target.value)} className="form-control" placeholder="London" />
															</div>
														</div>
														<div className="col-lg-12 col-md-12">
															<div className="form-group">
																<label>Upload File</label>
																<div className="custom-file">
																	<p className="m-a0">
																		<i className="fa fa-upload"></i>
																		Upload File
																	</p>
																	<input type="file" className="site-button form-control" id="customFile" />
																</div>
															</div>
														</div>
													</div>
													<button type="button" onClick={submitHandler} className="site-button m-b30">Upload</button>
												</form>
											</div>
										</div>
									</div>
								</div>
							</div>
							
						</div>
					</div>
				<Footer />
			</>
		)
}
export default Componypostjobs;