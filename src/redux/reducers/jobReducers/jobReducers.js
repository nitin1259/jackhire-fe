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



export const jobListReducer=(state={jobs:[]},action)=>{
    switch(action.type){
        case JOB_LIST_REQUEST:
            return {loading:true,jobs:[]}
        case JOB_LIST_SUCCESS:
          return {
            loading: false,
            jobs: action.payload.jobs,
          }
        case JOB_LIST_FAIL:
            return {loading:false,error:action.payload}
        default:
            return state
    }
}



export const employerJobsListReducer=(state={jobs:[]},action)=>{
    switch(action.type){
        case EMPLOYER_JOB_LIST_REQUEST:
            return {loading:true,jobs:[]}
        case EMPLOYER_JOB_LIST_SUCCESS:
          return {
            loading: false,
            jobs: action.payload.jobs,
          }
        case EMPLOYER_JOB_LIST_FAIL:
            return {loading:false,error:action.payload}
        default:
            return state
    }
}


export const jobsCreateReducer = (state = {}, action) => {
    switch (action.type) {
      case POST_JOB_REQUEST:
        return { loading: true }
      case POST_JOB_SUCCESS:
        return { loading: false, success: true }
      case POST_JOB_FAIL:
        return { loading: false, error: action.payload }
      case POST_JOB_RESET:
        return {}
      default:
        return state
    }
  }


export const jobsDeleteReducer = (state = {}, action) => {
    switch (action.type) {
      case EMPLOYER_JOB_DELETE_REQUEST:
        return { loading: true }
      case EMPLOYER_JOB_DELETE_SUCCESS:
        return { loading: false, success: true }
      case EMPLOYER_JOB_DELETE_FAIL:
        return { loading: false, error: action.payload }
      default:
        return state
    }
  }


  export const jobsDetailsReducer=(state={},action)=>{
    switch(action.type){
        case EMPLOYER_JOB_DETAIL_REQUEST:
            return {loading:true,...state}
        case EMPLOYER_JOB_DETAIL_SUCCESS:
            return {loading:false,job:action.payload}
        case EMPLOYER_JOB_DETAIL_FAIL:
            return {loading:false,error:action.payload}
        default:
            return state
    }
}

export const jobUpdateReducer = (state = { job: {} }, action) => {
    switch (action.type) {
      case EMPLOYER_JOB_UPDATE_REQUEST:
        return { loading: true }
      case EMPLOYER_JOB_UPDATE_SUCCESS:
        return { loading: false, success: true }
      case EMPLOYER_JOB_UPDATE_FAIL:
        return { loading: false, error: action.payload }
      default:
        return state
    }
  }


