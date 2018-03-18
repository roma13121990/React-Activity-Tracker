import React,{ Component,PropTypes } from 'react'
import { render } from 'react-dom'
import { Link } from 'react-router'

export class PageNotFound extends Component{
    render() {
        return (
            <div>
            <b>Page not found</b>
            <Link to="home">Back to home page</Link>
            </div>
        )

    }
}