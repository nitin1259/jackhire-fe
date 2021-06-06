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

} from './../../constants/candidiateConstants/candidateAuthConstants'



export const candidateLoginReducer=(state={},action)=>{
        switch(action.type){
            case CANDIDATE_LOGIN_REQUEST:
                return {loading:true}
            case CANDIDATE_LOGIN_SUCCESS:
                return {loading :false,candidateInfo:action.payload}
            case CANDIDATE_LOGIN_FAIL:
                return {loading :false,error:action.payload}
            case CANDIDATE_LOGOUT:
                return {}
            default:
                return state;

            
        }
}

export const candidateSignupReducer=(state={},action)=>{

    switch(action.type){
        case CANDIDATE_REGISTER_REQUEST:
            return {loading:true}
        case CANDIDATE_REGISTER_SUCCESS:
            return {loading :false,candidateInfo:action.payload}
        case CANDIDATE_REGISTER_FAIL:
            return {loading:false,error:action.payload}
        default:
            return state
    }
}

export const candidateDetailreducer=(state={},action)=>{
    switch(action.type){
        case CANDIDATE_DETAIL_REQUEST:
            return {loading:true}
        case CANDIDATE_DETAIL_SUCCESS:
            return {loading:false,user:action.payload}
        case  CANDIDATE_DETAIL_FAIL:
            return {loading:false,error:action.payload}
        case CANDIDATE_DETAIL_RESET:
            return{user:{}}
        default:
            return state
    }
}




export const candidateDeleteReducer = (state = {}, action) => {
    switch (action.type) {
      case CANDIDATE_DELETE_REQUEST:
        return { loading: true }
      case CANDIDATE_DELETE_SUCCESS:
        return { loading: false, success: true }
      case CANDIDATE_DELETE_FAIL:
        return { loading: false, error: action.payload }
      default:
        return state
    }
  }
  
  export const candidateUpdateReducer = (state = { user: {} }, action) => {
    switch (action.type) {
      case CANDIDATE_UPDATE_PROFILE_REQUEST:
        return { loading: true }
      case CANDIDATE_UPDATE_PROFILE_SUCCESS:
        return { loading: false, success: true }
      case CANDIDATE_UPDATE_PROFILE_FAIL:
        return { loading: false, error: action.payload }
      case CANDIDATE_UPDATE_PROFILE_RESET:
        return {
          user: {},
        }
      default:
        return state
    }
  }