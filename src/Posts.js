import React from "react"
import { Link} from "react-router-dom"

const Posts = ({posts, loading}) => {

    if(loading) {
        return <h2>Loading...</h2>
    }
    return (
        <ul className="list-group mt-9 ">
            {posts.map(post => (
                <li key={post.id} className='list-group-item '>
                    <Link to={`/posts/${post.id}?uid=${post.userId}`} className='text-decoration-none text-danger'>{post.title}</Link>
                </li>
            ))}
        </ul>

    
    )
}

export default Posts