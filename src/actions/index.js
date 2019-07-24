import _ from 'lodash'
import jsonPlaceholder from '../apis/jsonPlaceholder'

export const fetchPosts=()=>async dispatch=>{
    const response=await jsonPlaceholder.get('/posts')
    dispatch({
        type:'FETCH_POSTS',
        payload:response.data// Only need data to be dispatched
    })
}
//memoizing the functions to avoid duplicate requests
const _fetchUser= _.memoize(async (id,dispatch)=>{
    const response=await jsonPlaceholder.get(`/users/${id}`)
    dispatch({
        type:'FETCH_USER',
        payload:response.data
    })
})
export const fetchUser=id=>dispatch=>_fetchUser(id,dispatch)

