import axios from 'axios'

import {
       
    EMPLOYEE_LOGIN_REQUEST,
    EMPLOYEE_LOGIN_SUCCESS,
    EMPLOYEE_LOGIN_FAIL,
    EMPLOYEE_LOGOUT,
    
    EMPLOYEE_REGISTER_REQUEST,
    EMPLOYEE_REGISTER_SUCCESS,
    EMPLOYEE_REGISTER_FAIL,
    
    EMPLOYEE_DETAIL_REQUEST,
    EMPLOYEE_DETAIL_SUCCESS,
    EMPLOYEE_DETAIL_FAIL,
    EMPLOYEE_DETAIL_RESET, 
    
    EMPLOYEE_UPDATE_PROFILE_REQUEST,
    EMPLOYEE_UPDATE_PROFILE_SUCCESS,
    EMPLOYEE_UPDATE_PROFILE_FAIL,
    EMPLOYEE_UPDATE_PROFILE_RESET,

    EMPLOYEE_DELETE_REQUEST,
    EMPLOYEE_DELETE_SUCCESS,
    EMPLOYEE_DELETE_FAIL   ,
    EMPLOYEE_DELETE_RESET  ,

     } from './../../constants/employeeConstants/employeeAuthConstans'


     export const employerLogin=(json)=>async(dispatch)=>{
        try{
            dispatch({
                type:EMPLOYEE_LOGIN_REQUEST
            })
    
            const config={
              headers:{
                'Content-Type':'application/json',
                'Accept':'*/*'
            }
          }
        const {data} = await axios.post('http://ec2-52-91-148-9.compute-1.amazonaws.com/v1/login',json,config)

          dispatch({
            type:EMPLOYEE_LOGIN_SUCCESS,
            payload:data
          })
        
        localStorage.setItem('employerInfo',JSON.stringify(data));
    
    
        }catch(error){
          console.log(error);
            dispatch({
                type:EMPLOYEE_LOGIN_FAIL,
                payload: error.message
            })
        }
    }
    
    export const employerRegister=(json)=>async(dispatch)=>{
        try{
            dispatch({
                type:EMPLOYEE_REGISTER_REQUEST
            })
            const response=await fetch('http://ec2-52-91-148-9.compute-1.amazonaws.com/v1/employer/signup', {
              method: 'POST',
              body: JSON.stringify(json),
              headers: {
            'Content-type': 'application/json'
              }
          })
           
          console.log(response);
          if(response.ok){
            dispatch({
              type:EMPLOYEE_REGISTER_SUCCESS,
          })
          } else{
            throw response.data
          }
            // localStorage.setItem('employerInfo',JSON.stringify(data));
          
    
        }catch(error){
          console.log(error);
            dispatch({
                type:EMPLOYEE_REGISTER_FAIL,
                payload:error.message
            })
        }
    
    }
    
    export const employerLogout=()=>(dispatch)=>{
        localStorage.removeItem('employerInfo');
        dispatch({type:EMPLOYEE_LOGOUT})
    }   
    


    export const getEmployerDetails=()=> async (dispatch,getState)=>{
        try{
            dispatch({
                type:EMPLOYEE_DETAIL_REQUEST
            })
    
            const {
                employeeLogin: { employerInfo },
              } = getState()
          
              const response =await fetch(`http://ec2-52-91-148-9.compute-1.amazonaws.com/v1/employer/${employerInfo.id}`,{
                 method:'GET',
                 headers:{
                   'Content-Type': 'application/json',
                   Authorization:employerInfo.token
                  },
               })
          const data=await response.json();  
        if(response.ok){
            dispatch({
                type:EMPLOYEE_DETAIL_SUCCESS,
                payload:data 
            })
          }else{
            throw data;
          }
    
        } catch (error) {
           console.log(error);
            dispatch({
              type: EMPLOYEE_DETAIL_FAIL,
              payload: error.message,
            })
            dispatch(employerLogout());
          }
    }
    
    
    
    export const    employerUpdateProfile = (user) => async (dispatch, getState) => {
        try {
          dispatch({
            type: EMPLOYEE_UPDATE_PROFILE_REQUEST,
          })
      
        
          const {
            employeeLogin: { employerInfo },
          } = getState()
      
          const response =await fetch(`http://ec2-52-91-148-9.compute-1.amazonaws.com/v1/employer/${employerInfo.id}`,{
             method:'PUT',
             headers:{
               'Content-Type': 'application/json',
               Authorization:employerInfo.token
              },
             body:JSON.stringify(user)
           })
           const data=await response.json();  
            if(response.ok){
             dispatch({
               type: EMPLOYEE_UPDATE_PROFILE_SUCCESS
             })
           }else{
             throw data;
           }
        } catch (error) {
          console.log(error);
            dispatch({
              type: EMPLOYEE_DETAIL_FAIL,
              payload: error.message,
            })
            dispatch(employerLogout());
        }
      }
    
      
      export const deleteEmoloyer = (id) => async (dispatch, getState) => {
        try {
            dispatch({
                type: EMPLOYEE_DELETE_REQUEST,
              })

              const {
                employeeLogin: { employerInfo },
              } = getState()
          
              const response =await fetch(`http://ec2-52-91-148-9.compute-1.amazonaws.com/v1/employer/${employerInfo.id}`,{
                 method:'DELETE',
                 headers:{
                   'Content-Type': 'application/json',
                   Authorization:employerInfo.token
                  }
               })
               const data=await response.json();  
                if(response.ok){
                  dispatch({ type: EMPLOYEE_DELETE_SUCCESS })
               }else{
                 throw data;
               }
      
        } catch (error) {
          console.log(error);
            dispatch({
              type: EMPLOYEE_DETAIL_FAIL,
              payload: error.message,
            })
            dispatch(employerLogout());
        }
      }