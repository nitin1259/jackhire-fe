import axios from 'axios'
import {
    JOB_LIST_REQUEST,
    JOB_LIST_SUCCESS,
    JOB_LIST_FAIL,
    
    POST_JOB_REQUEST,
    POST_JOB_SUCCESS,
    POST_JOB_FAIL,
    POST_JOB_RESET,
    
    EMPLOYER_JOB_LIST_REQUEST,
    EMPLOYER_JOB_LIST_SUCCESS,
    EMPLOYER_JOB_LIST_FAIL,
    
    EMPLOYER_JOB_DETAIL_REQUEST,
    EMPLOYER_JOB_DETAIL_SUCCESS,
    EMPLOYER_JOB_DETAIL_FAIL,
    
    EMPLOYER_JOB_UPDATE_REQUEST,
    EMPLOYER_JOB_UPDATE_SUCCESS,
    EMPLOYER_JOB_UPDATE_FAIL,
    
    EMPLOYER_JOB_DELETE_REQUEST,
    EMPLOYER_JOB_DELETE_SUCCESS,
    EMPLOYER_JOB_DELETE_FAIL,
    
    
} from './../../constants/jobConstants/jobConstants'

import {employerLogout} from './../employeeActions/employeeAuthActions'




export const listJobs=()=>async (dispatch)=>{

    try{
        dispatch({type:JOB_LIST_REQUEST})

        const response=await fetch('http://ec2-52-91-148-9.compute-1.amazonaws.com/v1/jobs', {
          method: 'GET',
          headers: {
          'Content-type': 'application/json'
          }
      })

      // const loginInfo={
      //   "first_name":"sumit",
      // 	"last_name":"kumar",
      // 	"email":"s22a2w@gmail.com",
      // 	"password":"Ranga.123@@"
        
      //   }
      //   let info = JSON.stringify(loginInfo);
        

      //   const config={
      //     headers:{
            
      //       'Content-Type':'application/json',
      //       'Accept':'*/*'
      //     }
      // }
      //   const response = await axios.post('http://ec2-52-91-148-9.compute-1.amazonaws.com/v1/candidate/signup',loginInfo,config)
      //   console.log(response.headers);
      
      // const {data}=await axios.get('http://ec2-52-91-148-9.compute-1.amazonaws.com/v1/jobs')
// 
      const data=await response.json();
      console.log(response)
      let obj={jobs:[...data]}

      console.log(obj)
        dispatch({
            type:JOB_LIST_SUCCESS,
            payload:obj
        })
    }catch(error){
      console.log(error);
        dispatch({
              type:JOB_LIST_FAIL,
              payload: error.message,
                 
        })
    }
}




export const jobData=(empID,id)=>async (dispatch)=>{

  try{
      dispatch({type:EMPLOYER_JOB_DETAIL_REQUEST})

      const response=await fetch(`http://ec2-52-91-148-9.compute-1.amazonaws.com/v1/employer/${empID}/jobs/${id}`, {
        method: 'GET',
        headers: {
        'Content-type': 'application/json'
        }
    })

    const data=await response.json();

    let job={...data}
    console.log(data)
      dispatch({
          type:EMPLOYER_JOB_DETAIL_SUCCESS,
          payload:job
      })
  }catch(error){
      dispatch({
          type:EMPLOYER_JOB_DETAIL_FAIL,
          payload:error.message
      })

      dispatch(employerLogout())
  }
}

export const listEmployerJobs=()=>async (dispatch,getState)=>{

    try{
        dispatch({type:EMPLOYER_JOB_LIST_REQUEST})

        const {
          employeeLogin: { employerInfo },
        } = getState()
        console.log(employerInfo)
        const response =await fetch(`http://ec2-52-91-148-9.compute-1.amazonaws.com/v1/employer/${employerInfo.id}/jobs`,{
           method:'GET',
           headers:{
             'Content-Type': 'application/json',
             Authorization:employerInfo.token
            },
         })
      const data=await response.json();  
        console.log("jobs",data);
        dispatch({
            type:EMPLOYER_JOB_LIST_SUCCESS,
            payload:data
        })
    }catch(error){
        dispatch({
            type:EMPLOYER_JOB_LIST_FAIL,
            payload:
                error.response && error.response.data.message?
                error.response.data.message:error.message
        })
    }
}




export const postJobs=(json)=>async (dispatch,getState)=>{

  try{
      dispatch({type:POST_JOB_REQUEST})

      const {
        employeeLogin: { employerInfo },
      } = getState()
      console.log(employerInfo)
      const response =await fetch(`http://ec2-52-91-148-9.compute-1.amazonaws.com/v1/employer/${employerInfo.id}/jobs`,{
         method:'POST',
         headers:{
           'Content-Type': 'application/json',
           Authorization:employerInfo.token
          },
          body:JSON.stringify(json)

       })
      const data=await response.json();  
       if(response.ok){
        dispatch({
          type:POST_JOB_SUCCESS,
          payload:data
      }) }
      else{
        throw data
      }
      console.log("jobs",data);
      
  }catch(error){
      dispatch({
          type:POST_JOB_FAIL,
          payload:  error.response && error.response.data.message?
          error.response.data.message : error.message,
      })
  }
}


export const deleteEmployerJobs = ({id,job_id}) => async (dispatch, getState) => {
    try {
      dispatch({
        type: EMPLOYER_JOB_DELETE_REQUEST,
      })
  
      const {
        employeeLogin: { employerInfo },
      } = getState()
      console.log(employerInfo)
      const response =await fetch(`http://ec2-52-91-148-9.compute-1.amazonaws.com/v1//employer/${employerInfo.id}/jobs/${job_id}`,{
         method:'DELETE',
         headers:{
           'Content-Type': 'application/json',
           Authorization:employerInfo.token
          },
       })
    const data=await response.json();  
     
      dispatch({
        type: EMPLOYER_JOB_DELETE_SUCCESS,
      })
  
  
    } catch (error) {
    
      dispatch({
        type: EMPLOYER_JOB_DELETE_FAIL,
        payload: error.message,
      })
    }
  }


