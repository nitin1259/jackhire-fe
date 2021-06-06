import React, {Component} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Homepage from './Pages/Homepage1';
import Homepage2 from './Pages/Homepage2';
// 
import Jobprofile from './Pages/Jobprofile';
import Jobmyresume from './Pages/Jobmyresume';
import Jobsappliedjob from './Pages/Jobsappliedjob';
import Jobsalert from './Pages/Jobsalert';
import Jobsavedjobs from './Pages/Jobsavedjobs';
import Jobcvmanager from './Pages/Jobcvmanager';
import Changepasswordpage from './Pages/Changepasswordpage';
// 
import Companyprofile from './Pages/Companyprofile';
import Companyresume from './Pages/Companyresume';
import Componypostjobs from './Pages/Componypostjobs';
import Companymanage from './Pages/Companymanage';
import Companytransactions from './Pages/Companytransactions';
import Browsecandidates from './Pages/Browsecandidates';
// 
// 
import Aboutus from './Pages/Aboutus';
import Jobdetail from './Pages/Jobdetail';
import Companies from './Pages/Companies';
import Freejobalerts from './Pages/Freejobalerts';
import Browsejoblist from './Pages/Browsejoblist';
import Browsejobgrid from './Pages/Browsejobgrid';
import Browsejobfilterlist from './Pages/Browsejobfilterlist';
import Browsejobfiltergrid from './Pages/Browsejobfiltergrid';
// 
import Categoryalljob from './Pages/Categoryalljob';
import Categorycompanyjob from './Pages/Categorycompanyjob';
import Categorydesignationsjob from './Pages/Categorydesignationsjob';
import Categoryjobs from './Pages/Categoryjobs';
import Categorylocationjobs from './Pages/Categorylocationjobs';
import Categoryskilljobs from './Pages/Categoryskilljobs';

// import Portfoliogrid2 from './Pages/Portfoliogrid2';

import Loginpage from './Pages/Loginpage3';
import EmployeeRegister from './Pages/EmployeeRegister'
import Register from './Pages/Register';
import Register2 from './Pages/Register2';
import Error404 from './Pages/Error404';
import Contact from './Pages/Contact';

import ScrollToTop from './Element/ScrollToTop';

class Markup extends Component{
	render(){
		return(
			<BrowserRouter >
                <div className="page-wraper">
                    <Switch>
                        <Route path='/' exact component={Homepage} />
                        <Route path='/user/:id'  component={Jobprofile} />
                        <Route path='/user' exact component={Jobprofile} />
                        <Route path='/jobs/:empID/:id'  component={Jobdetail} />
                        <Route path='/jobs' exact  component={Browsejoblist} />
                        <Route path='/company-profile'  component={Companyprofile} />
                        <Route path='/company-resume'  component={Companyresume} />
                        <Route path='/company-post-jobs'  component={Componypostjobs} />
                        <Route path='/company-manage-job'  component={Companymanage} />
                        <Route path='/browse-candidates'  component={Browsecandidates} />
						<Route path='/employee/login'  component={Loginpage} />
                        <Route path='/employee/signup'  component={EmployeeRegister} />
                        <Route path='/candidate/signup'  component={Register} />
                        <Route path='/candidate/login'  component={Register2} />
                        <Route path='' exact component={Error404} />
					</Switch>
                </div>
				<ScrollToTop />
            </BrowserRouter>	
		)
	}
	
}

export default Markup;

























{/* <Route path='/index-2' exact component={Homepage2} />
						
<Route path='/jobs-profile' exact component={Jobprofile} />
<Route path='/jobs-my-resume' exact component={Jobmyresume} />
<Route path='/jobs-applied-job' exact component={Jobsappliedjob} />
<Route path='/jobs-alerts' exact component={Jobsalert} />
<Route path='/jobs-saved-jobs' exact component={Jobsavedjobs} />
<Route path='/jobs-cv-manager' exact component={Jobcvmanager} />
<Route path='/jobs-change-password' exact component={Changepasswordpage} />
	
	



<Route path='/about-us' exact component={Aboutus} />
<Route path='/free-job-alerts' exact component={Freejobalerts} />
<Route path='/browse-job-list' exact component={Browsejoblist} />
<Route path='/browse-job-grid' exact component={Browsejobgrid} />
<Route path='/browse-job-filter-list' exact component={Browsejobfilterlist} />
<Route path='/browse-job-filter-grid' exact component={Browsejobfiltergrid} />

<Route path='/category-all-jobs' exact component={Categoryalljob} />
<Route path='/category-company-jobs' exact component={Categorycompanyjob} />
<Route path='/category-designations-jobs' exact component={Categorydesignationsjob} />
<Route path='/category-jobs' exact component={Categoryjobs} />
<Route path='/category-location-jobs' exact component={Categorylocationjobs} />
<Route path='/category-skill-jobs' exact component={Categoryskilljobs} />

<Route path='/portfolio-grid-2' exact component={Portfoliogrid2} />



<Route path='/contact' exact component={Contact} />

<Route path='/blog-classic' exact component={Blogclassic} />
<Route path='/blog-classic-sidebar' exact component={Blogclassicsidebar} />
<Route path='/blog-detailed-grid' exact component={Blogdetailgrid} />
<Route path='/blog-detailed-grid-sidebar' exact component={Blogdetailgridsidebar} />
<Route path='/blog-left-img' exact component={Blogleftimg} />
<Route path='/blog-details' exact component={Blogdetail} /> */}