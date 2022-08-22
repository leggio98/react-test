
import {useParams, useSearchParams, Link} from 'react-router-dom'
import useFetch from './useFetch'



const Post = () => {
const {id} = useParams()
const [searchParam] = useSearchParams()

   const {data: post, error: postError, loading: postLoading } = useFetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {headers:{authorization:'Bearer API_TOKEN'}})
   const {data: comments, error: commentsError, loading: commentsLoading } = useFetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
   const {data: users, error: usersError, loading: usersLoading } = useFetch(`https://jsonplaceholder.typicode.com/users/${searchParam.get('uid')}`)

   if (postLoading || commentsLoading || usersLoading) {
    return <div> <p> Loading...</p></div>
   }

   if(postError || commentsError || usersError) {
    return <div> <p> An error has occured </p> </div>
   }

    return(
        <div>
            <div>
                <h3>Title: {post.title}</h3>
                <p>Body : {post.body}</p>
                <p>By : {users.username}</p>
                <div> {comments.map(comment => (
                    <div key={comment.id}>
                        <p>{comment.name}</p>
                        <p>{comment.body}</p>
                        <p>By: {comment.email}</p>
                    </div>
                ))}</div>
            </div>
            <Link to= '/posts'>Back </Link>
        </div>
    )

}


export default Post