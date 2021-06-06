import React, {useEffect,useState} from 'react';
import {useDispatch,useSelector} from 'react-redux'
import {Link} from 'react-router-dom';
import Header from './../Layout/Header';
import Footer from './../Layout/Footer';
import {jobData} from './../../redux/actions/jobActions/jobActions'

var bnr =require('./../../images/banner/bnr1.jpg');



const Jobdetail =({history,match})=>{



	const dispatch=useDispatch();
	const jobsDetails=useSelector((state)=>state.jobsDetails)
	const {loading,job,error}=jobsDetails;
	console.log(job)



	useEffect(()=>{
			dispatch(jobData(match.params.empID,match.params.id))
	},[dispatch])
	
		return(
			<div className="page-wraper">
				<Header />
				
				{loading?(<p>Loading</p>):error?(<p>error</p>)
										:<>
										
			<div className="page-content bg-white">
					
					<div className="dez-bnr-inr overlay-black-middle" style={{backgroundImage:"url(" + bnr + ")"}}>
						<div className="container">
							<div className="dez-bnr-inr-entry">
								<h1 className="text-white"></h1>
								<div className="breadcrumb-row">
									<ul className="list-inline">
										<li><Link to ={"#"}>Home</Link></li>
										<li>Job Detail</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
					
					<div className="content-block">
						
						<div className="section-full content-inner-1">
							<div className="container">
								<div className="row">
									<div className="col-lg-4">
										<div className="sticky-top">
											<div className="row">
												<div className="col-lg-12 col-md-6">
													<div className="m-b30">
														<img src={require("./../../images/blog/grid/pic1.jpg")} alt="" />
													</div>
												</div>
												<div className="col-lg-12 col-md-6">
													<div className="widget bg-white p-lr20 p-t20  widget_getintuch radius-sm">
														<h4 className="text-black font-weight-700 p-t10 m-b15">Job Details</h4>
														<ul>
															<li><i className="ti-location-pin"></i><strong className="font-weight-700 text-black">Address</strong>{job?<span className="text-black-light">{job.location} </span>:null}</li>
															<li><i className="ti-money"></i><strong className="font-weight-700 text-black">Salary</strong> 5777</li>
															<li><i className="ti-shield"></i><strong className="font-weight-700 text-black">Experience</strong>6 Year Experience</li>
														</ul>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="col-lg-8">
								{job?(
											<div className="job-info-box">
											<h3 className="m-t0 m-b10 font-weight-700 title-head">
												<Link to={""} className="text-secondry m-r30">{job.title}</Link>
											</h3>:
											<ul className="job-info">
												<li><strong>Responsibilities</strong> {job.responsibilities}</li>
												<li><strong>Deadline:</strong> 25th January 2018</li>
												<li><i className="ti-location-pin text-black m-r5"></i> NewYark </li>
											</ul>
											<h5 className="font-weight-600">Job Description</h5>
											<div className="dez-divider divider-2px bg-gray-dark mb-4 mt-0"></div>
											<p>{job.description}</p>
											<div className="dez-divider divider-2px bg-gray-dark mb-4 mt-0"></div>
											<h5 className="font-weight-600">Job Requirements</h5>
											<div className="dez-divider divider-2px bg-gray-dark mb-4 mt-0"></div>
											<ul className="list-num-count no-round">
												{job.skills.map(item=>(
												<li>{item}</li>

												))}
												
											</ul>
											<Link to={"/jobs-applied-job"} className="site-button">Apply This Job</Link>
										</div>
								):null}
									</div>
								</div>
							</div>
						</div>
						
						

					</div>
				</div>
		</>
				}
				
				
				<Footer />
			</div>		
		)
		
	
}
export default Jobdetail;