import React from 'react'
import {connect} from 'react-redux'
import {fetchPosts} from '../actions'
class PostList extends React.Component{
    
    componentDidMount(){
        this.props.fetchPosts()
    }

    renderlist(){
        return (this.props.posts.map(post=>{
            return(
                <div className='item' key={post.id}>
                    <i className='large middle aligned icon user'/>
                    <div className='content'>
                        <div className='description'>
                            <p>{post.title}</p>
                            <p>{post.body}</p>
                        </div>
                    </div>
                </div>
            )
        })
    )}
    render(){
        console.log(this.props.posts)
        return(
            <div className='ui divided relaxed list'>{this.renderlist()}</div>//Need to call function over here else will throw some error
        )
    }
}
const mapStateToProps=(state)=>{
    return{posts:state.posts}
}

export default connect(mapStateToProps,{fetchPosts})(PostList)