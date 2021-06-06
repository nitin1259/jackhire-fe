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
    EMPLOYEE_DELETE_FAIL,   

     } from './../../constants/employeeConstants/employeeAuthConstans'




export const employerLoginReducer=(state={},action)=>{
    switch(action.type){
        case EMPLOYEE_LOGIN_REQUEST:
            return {loading:true}
        case EMPLOYEE_LOGIN_SUCCESS:
            return {loading :false,employerInfo:action.payload}
        case EMPLOYEE_LOGIN_FAIL:
            return {loading :false,error:action.payload}
        case EMPLOYEE_LOGOUT:
            return {}
        default:
            return state;

        
    }
}

export const employeSignupReducer=(state={},action)=>{

switch(action.type){
    case EMPLOYEE_REGISTER_REQUEST:
        return {loading:true}
    case EMPLOYEE_REGISTER_SUCCESS:
        return {loading :false,candidateInfo:action.payload}
    case EMPLOYEE_REGISTER_FAIL:
        return {loading:false,error:action.payload}
    default:
        return state
}
}

export const employeeDetailreducer=(state={},action)=>{
    switch(action.type){
        case EMPLOYEE_DETAIL_REQUEST:
            return {loading:true}
        case EMPLOYEE_DETAIL_SUCCESS:
            return {loading:false,user:action.payload}
        case  EMPLOYEE_DETAIL_FAIL:
            return {loading:false,error:action.payload}
        case EMPLOYEE_DETAIL_RESET:
            return{user:{}}
        default:
            return state
    }
}


export const employeeDeleteReducer = (state = {}, action) => {
    switch (action.type) {
      case EMPLOYEE_DELETE_REQUEST:
        return { loading: true }
      case EMPLOYEE_DELETE_SUCCESS:
        return { loading: false, success: true }
      case EMPLOYEE_DELETE_FAIL:
        return { loading: false, error: action.payload }
      default:
        return state
    }
  }
  
  export const employeeUpdateReducer = (state = { user: {} }, action) => {
    switch (action.type) {
      case EMPLOYEE_UPDATE_PROFILE_REQUEST:
        return { loading: true }
      case EMPLOYEE_UPDATE_PROFILE_SUCCESS:
        return { loading: false, success: true }
      case EMPLOYEE_UPDATE_PROFILE_FAIL:
        return { loading: false, error: action.payload }
      case EMPLOYEE_UPDATE_PROFILE_RESET:
        return {
          user: {},
        }
      default:
        return state
    }
  }