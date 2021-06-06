import axios from 'axios'
import {

    CANDIDATE_LOGIN_REQUEST,
    CANDIDATE_LOGIN_SUCCESS,
    CANDIDATE_LOGIN_FAIL,
    CANDIDATE_LOGOUT,

    CANDIDATE_REGISTER_REQUEST,
    CANDIDATE_REGISTER_SUCCESS,
    CANDIDATE_REGISTER_FAIL,

    CANDIDATE_DETAIL_REQUEST,
    CANDIDATE_DETAIL_SUCCESS,
    CANDIDATE_DETAIL_FAIL, 
    CANDIDATE_DETAIL_RESET,

     CANDIDATE_UPDATE_PROFILE_REQUEST,
     CANDIDATE_UPDATE_PROFILE_SUCCESS,
     CANDIDATE_UPDATE_PROFILE_FAIL,
     CANDIDATE_UPDATE_PROFILE_RESET, 

     CANDIDATE_DELETE_REQUEST,
     CANDIDATE_DELETE_SUCCESS,
     CANDIDATE_DELETE_FAIL,
     CANDIDATE_DELETE_RESET,

} from './../../constants/candidiateConstants/candidateAuthConstants'




export const candidateLogin=(json)=>async(dispatch)=>{
    try{
        dispatch({
            type:CANDIDATE_LOGIN_REQUEST
        })


          const config={
              headers:{
                'Content-Type':'application/json',
                'Accept':'*/*'
            }
          }
        const {data} = await axios.post('http://ec2-52-91-148-9.compute-1.amazonaws.com/v1/login',json,config)
      

        dispatch({
            type:CANDIDATE_LOGIN_SUCCESS,
            payload:data
        })

        localStorage.setItem('candidateInfo',JSON.stringify(data));

    }catch(error){
        dispatch({
            type:CANDIDATE_LOGIN_FAIL,
            payload:
                error.response && error.response.data.message?
                error.response.data.message : error.message
        })
        console.log(error)
    }
}

export const candidateRegister=(json)=>async(dispatch)=>{
    try{
        dispatch({
            type:CANDIDATE_REGISTER_REQUEST
        })
       const response = await fetch('http://ec2-52-91-148-9.compute-1.amazonaws.com/v1/candidate/signup', {
          method: 'POST',
          body: JSON.stringify(json),
          headers: {
        'Content-type': 'application/json'
          }
         
      })
        const data={
          status:'success'
        }
      if(response.ok){
        dispatch({
            type:CANDIDATE_REGISTER_SUCCESS,
            payload:data
        })
      }else{
        throw response.data;
      }
  
    }catch(error){
        dispatch({
            type:CANDIDATE_REGISTER_FAIL,
            payload:
                error.response && error.response.data.message?
                error.response.data.message : error.message
        })
        console.log(error)
    }

}
export const candidateLogout=()=>(dispatch)=>{
    localStorage.removeItem('candidateInfo');
    dispatch({type:CANDIDATE_LOGOUT})
}   


export const getCandidateDetails=()=> async (dispatch,getState)=>{
    try{
        dispatch({
            type:CANDIDATE_DETAIL_REQUEST
        })

        const {
            candidateLogin: { candidateInfo },
          } = getState()
    
        const response =await fetch(`http://ec2-52-91-148-9.compute-1.amazonaws.com/v1/candidate/${candidateInfo.id}`,{
          method:'GET',
          headers:{
            'Content-Type': 'application/json',
            Authorization:candidateInfo.token
           },

        })
        const data=await response.json();       
      
        if(response.ok){
          dispatch({
              type:CANDIDATE_DETAIL_SUCCESS,
              payload:data
          })
        }else{
          throw data;
        }
    } catch (error) {
     
        dispatch({
          type: CANDIDATE_DETAIL_FAIL,
          payload: error.message,
        })
       dispatch(candidateLogout());
      }
}



export const candidateUpdateProfile = (user) => async (dispatch, getState) => {
    try {
      dispatch({
        type: CANDIDATE_UPDATE_PROFILE_REQUEST,
      })
  
      const {
        candidateLogin: { candidateInfo },
      } = getState()
  
    //  api fetch request
    const response =await fetch(`http://ec2-52-91-148-9.compute-1.amazonaws.com/v1/candidate/${candidateInfo.id}`,{
      method:'PUT',
      headers:{
        'Content-Type': 'application/json',
        Authorization:candidateInfo.token
       },
       body:JSON.stringify(user)
    })
    const data=await response.json();       
  
    if(response.ok){
      dispatch({
        type: CANDIDATE_UPDATE_PROFILE_SUCCESS
      })
    }else{
      throw data;
    }
  
     

    } catch (error) {
      dispatch({
        type: CANDIDATE_UPDATE_PROFILE_FAIL,
        payload: error.message,
      })
    }
  }

  
  export const deleteCandidate = (id) => async (dispatch, getState) => {
    try {
        const {
            candidateLogin: { candidateInfo },
          } = getState()
         
          //api resquest

          const response =await fetch(`http://ec2-52-91-148-9.compute-1.amazonaws.com/v1/candidate/${candidateInfo.id}`,{
            method:'DELETE',
            headers:{
              'Content-Type': 'application/json',
              Authorization:candidateInfo.token
             }
          })
          const data=await response.json();       
        
          if(response.ok){  
              dispatch({ type: CANDIDATE_DELETE_SUCCESS })
          }else{
            throw data;
          }
  
      dispatch({ type: CANDIDATE_DELETE_SUCCESS })
    } catch (error) {
      dispatch({
        type: CANDIDATE_DELETE_FAIL,
        payload: error.message,
      })
    }
  }