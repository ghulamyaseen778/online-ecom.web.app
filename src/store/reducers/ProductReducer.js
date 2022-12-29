// import allAction from "../actions/CombineAction";
import ActionTypes from "../constant"

const INTIALSTATE ={
    data:{},
    dataLoading:false,

    //product

    products:[],
    SingalProduct:{}
}

const GetUserData = (state=INTIALSTATE,action) => {
    switch (action.type) {
        case ActionTypes.USER_LODING:
            return{
                ...state,
                dataLoading:true
            }

        case ActionTypes.USER_DATA:
            // console.log(action.payload)
            return{
                ...state,
                data:action.payload,
                dataLoading: false,
                // bool:true
            }
        case ActionTypes.GET_PRODUCTS:
            // console.log(action.payload)
            return{
                ...state,
                products:[...action.payload],
                dataLoading: false,
                // bool:true
            }
        case ActionTypes.SINGAL_PRODUCTS:
            // console.log(action.payload)
            return{
                ...state,
                SingalProduct:action.payload,
                dataLoading: false,
                // bool:true
            }
    
        default:
            return{...state}
    }
}

export {GetUserData}