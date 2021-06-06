import React, {useEffect,useState} from 'react';
import {useDispatch,useSelector} from 'react-redux'
import {getCandidateDetails,candidateLogout} from './../../redux/actions/candidateActions/candidateAuthActions'
import {Link} from 'react-router-dom';
import Header2 from './../Layout/Header2';
import Footer from './../Layout/Footer';
import Profilesidebar from './../Element/Profilesidebar';
 
const Jobprofile=({history})=>{
	const dispatch = useDispatch();
	
	const userData=useSelector(state=>state.candidateDetail);
	const {loading,user,error}=userData;
	

	const candidateLogin=useSelector(state=>state.candidateLogin);
	const {loading:loginLoading,candidateInfo,error:errorLogin}=candidateLogin;


	useEffect(()=>{
		if(!candidateInfo){
			history.push('/candidate/login');
		}else{
			dispatch(getCandidateDetails())
		}
	},[dispatch,candidateInfo])


		return(
			<div className="page-wraper">
				
				<Header2 />
				<div className="page-content bg-white">
					<div className="content-block">
						<div className="section-full bg-white browse-job p-t50 p-b20">
							<div className="container">
								<div className="row">
									<Profilesidebar /> 
									<div className="col-xl-9 col-lg-8 m-b30">
										<div className="job-bx job-profile">
											<div className="job-bx-title clearfix">
												<h5 className="font-weight-700 pull-left text-uppercase">Basic Information</h5>
												<Link to={"./"} className="site-button right-arrow button-sm float-right">Back</Link>
											</div>
											{loading?null:(
	<form>
	<div className="row m-b30">
		<div className="col-lg-6 col-md-6">
		
			:<div className="form-group">
			<label>Your Name:</label>
			<input type="text" className="form-control" placeholder={user?.first_name+" "+user?.last_name} /> 
		</div>


		</div>

		<div className="col-lg-12 col-md-12">
			<div className="form-group">
				<label>Description:</label>
				<textarea  className="form-control" placeholder={user?.notes}>
				</textarea>
			</div>
		</div>
	</div>
	<div className="job-bx-title clearfix">
		<h5 className="font-weight-700 pull-left text-uppercase">Contact Information</h5>
	</div>
	<div className="row">
		<div className="col-lg-6 col-md-6">
			<div className="form-group">
				<label>Phone:</label>
				<input type="text" className="form-control" placeholder={user?.phone_number} />
			</div>
		</div>
		<div className="col-lg-6 col-md-6">
			<div className="form-group">
				<label>Email Address:</label>
				<input type="text" className="form-control" placeholder={user?.email} />
			</div>
		</div>
		<div className="col-lg-6 col-md-6">
			<div className="form-group">
				<label>Country:</label>
				<input type="text" className="form-control" placeholder="Country Name" />
			</div>
		</div>
		<div className="col-lg-6 col-md-6">
			<div className="form-group">
				<label>Postcode:</label>
				<input type="text" className="form-control" placeholder="112233" />
			</div>
		</div>
		<div className="col-lg-6 col-md-6">
			<div className="form-group">
				<label>City:</label>
				<input type="text" className="form-control" placeholder="London" />
			</div>
		</div>
		<div className="col-lg-6 col-md-6">
			<div className="form-group">
				<label>Full Address:</label>
				<input type="text" className="form-control" placeholder="New york City" />
			</div>
		</div>
	</div>
	<button className="site-button m-b30">Save Setting</button>
</form>

											)}
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
export default Jobprofile;