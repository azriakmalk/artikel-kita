import React from 'react'
import './Upload.scss'

const Upload = ({...rest}) => {    
    
    return (
        <div className="upload-wrapper">            
            <input type="file" {...rest}/>
        </div>
    )
}

export default Upload
