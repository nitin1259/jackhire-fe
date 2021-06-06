import {createStore,applyMiddleware,combineReducers} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import {
    employerLoginReducer,
    employeSignupReducer,
    employeeDetailreducer,
    employeeDeleteReducer,
    employeeUpdateReducer
} from './redux/reducers/EmployeeReducers/employeeAuthReducers'
import {
    candidateLoginReducer,
    candidateSignupReducer,
    candidateDetailreducer,
    candidateDeleteReducer,
    candidateUpdateReducer
} from './redux/reducers/candidateReducers/candidateAuthReducers'

import {
    jobListReducer,
    employerJobsListReducer,
    jobsCreateReducer,
    jobsDeleteReducer,
    jobsDetailsReducer,
    jobUpdateReducer
} from './redux/reducers/jobReducers/jobReducers'



const reducer=combineReducers({

    employeeLogin:employerLoginReducer,
    employeeSignup:employeSignupReducer,
    employeeDetail:employeeDetailreducer,
    employeeDelete:employeeDeleteReducer,
    employeeUpdate:employeeUpdateReducer,

    candidateLogin:candidateLoginReducer,
    candidateSignup:candidateSignupReducer,
    candidateDetail:candidateDetailreducer,
    candidateDelete:candidateDeleteReducer,
    candidateUpdate:candidateUpdateReducer,

    jobList:jobListReducer,
    employerJobsList:employerJobsListReducer,
    jobsCreate:jobsCreateReducer,
    jobsDelete:jobsDeleteReducer,
    jobsDetails:jobsDetailsReducer,
    jobUpdate:jobUpdateReducer



});

const candidateInfoFromStorage = localStorage.getItem('candidateInfo')
  ? JSON.parse(localStorage.getItem('candidateInfo'))
  : null

const employerInfoFromStorage = localStorage.getItem('employerInfo')
  ? JSON.parse(localStorage.getItem('employerInfo'))
  : null

const initialState = {
    employeeLogin:{
        employerInfo:employerInfoFromStorage
    },candidateLogin:{
        candidateInfo:candidateInfoFromStorage
    }
}

const middleware=[thunk];

const store=createStore(reducer,initialState,composeWithDevTools(applyMiddleware(...middleware)))

export default store;
