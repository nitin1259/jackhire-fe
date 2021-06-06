import React, {useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import Header2 from './../Layout/Header2';
import Footer from './../Layout/Footer';
import {useSelector,useDispatch} from 'react-redux';
import {listEmployerJobs} from './../../redux/actions/jobActions/jobActions'
const Companymanage=({history})=> {


	// listEmployerJobs
	const listjobs=useSelector(state=>state.employerJobsList);
	const {jobs} =listjobs;

	const userData=useSelector(state=>state.employeeDetail);
	const {loading,user,error}=userData;
	console.log(user);
	console.log(jobs);

	const dispatch=useDispatch();
	useEffect(() => {
		if(user){
			dispatch(listEmployerJobs());
		}else{
			history.push('/employee/login');
		}
	}, [dispatch])

		return(
			<>
				<Header2 />
				
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
														<Link to ={""}>
															<img alt="" src={require("./../../images/logo/icon3.jpg" )} />
														</Link>
														<div className="upload-link" title="update" data-toggle="tooltip" data-placement="right">
															<input type="file" className="update-flie" />
															<i className="fa fa-pencil"></i>
														</div>
													</div>
													<div className="candidate-title">
														<h4 className="m-b5"><Link to ={""}>@COMPANY</Link></h4>
													</div>
												</div>
												<ul>
													<li><Link to={"/ompany-profile"}>
														<i className="fa fa-user-o" aria-hidden="true"></i> 
														<span>Company Profile</span></Link></li>
													<li><Link to={"/company-post-jobs"}>
														<i className="fa fa-file-text-o" aria-hidden="true"></i> 
														<span>Post A Job</span></Link></li>
													<li><Link to={"/company-transactions"}>
														<i className="fa fa-random" aria-hidden="true"></i>
														<span>Transactions</span></Link></li>
													<li><Link to={"/company-manage-job"} className="active">
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
										<div className="job-bx browse-job clearfix">
											
											<table className="table-job-bx cv-manager company-manage-job">
												<thead>
													<tr>
														<th>Job Title</th>
														<th>Applications</th>
														<th>Date</th>
														<th>Status</th>
													</tr>
												</thead>
												{/* <tbody> */}
													{/* <tr> */}
														{/* <td className="job-name"> */}
															{/* <Link to ={""}>Social Media Expert</Link> */}
															{/* <ul className="job-post-info"> */}
																{/* <li><i className="fa fa-map-marker"></i> Sacramento, California</li> */}
																{/* <li><i className="fa fa-bookmark-o"></i> Full Time</li> */}
																{/* <li><i className="fa fa-filter"></i> Web Designer</li> */}
															{/* </ul> */}
														{/* </td> */}
														{/* <td className="application text-primary">(5) Applications</td> */}
														{/* <td className="expired pending">Pending </td> */}
														{/* <td className="job-links"> */}
															{/* <Link to ={""}><i className="ti-trash"></i></Link> */}
														{/* </td> */}
													{/* </tr> */}
												{/* </tbody> */}
											</table>
											
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
export default Companymanage;