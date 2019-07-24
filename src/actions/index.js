import jsonPlaceholder from '../apis/jsonPlaceholder'

export const fetchPosts=()=>async dispatch=>{
    const response=await jsonPlaceholder.get('/posts')
    dispatch({
        type:'FETCH_POSTS',
        payload:response.data// Only need data to be dispatched
    })
}

export const fetchUser=()=>async dispatch=>{
    const response=await jsonPlaceholder.get(`/user/${id}`)

    dispatch({
        type:'FETCH_USERS',
        payload:response.data
    })
}