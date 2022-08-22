import React from "react"
import { Link } from "react-router-dom"

const LandingPage = () => {
    return (
        <div className="text-center">
            <Link to = '/posts'>
            <button type="button" class="btn btn-primary">POSTS!</button>
            </Link>
        </div>
    )
}

export default LandingPage