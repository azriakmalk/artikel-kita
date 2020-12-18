import React from 'react'
import './textarea.scss'

const Textarea = ({...rest}) => {
    return (
        <div>
            <textarea className="text-area" {...rest}></textarea>
        </div>
    )
}

export default Textarea
