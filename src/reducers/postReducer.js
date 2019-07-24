//Will return the state to mapStateToProps called in the PostList with key 'posts' as passed from combined reducers
export default (state=[],action)=>{
    switch(action.type){
        case 'FETCH_POSTS':
            return action.payload
        default:
            return state
    }
}