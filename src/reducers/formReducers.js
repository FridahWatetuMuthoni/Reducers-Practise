export const INITIAL_STATE = {
    error:false,
    posts:[
    ]
}


export function formReducer(state,action){
    switch(action.type){
        case 'ADD_POST':
            return{
                error:false,
                posts:[
                    ...state.posts,
                    action.payload
                ]
            }
        case "ERROR":
            return{
                error:true,
                post:[
                    ...state.posts
                ]
            }
        default:
            return state

    }
}