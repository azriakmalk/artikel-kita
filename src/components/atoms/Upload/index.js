import React from 'react'
import { NoImage } from '../../../asset'
import './Upload.scss'

const Upload = ({...rest}) => {    
    return (
        <div className="upload-wrapper">
            <img id="output" className="preview" src={NoImage} alt="preview"/>
            <input type="file" {...rest}/>
        </div>
    )
}

export default Upload
