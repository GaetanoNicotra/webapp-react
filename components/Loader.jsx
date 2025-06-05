import React from 'react'

const Loader = () => {
    return (
        <div className='overlay'>
            <div className="spinner-grow text-primary width-heigth me-4" role="status"></div>
            <div className="spinner-grow text-primary width-heigth me-4" role="status"></div>
            <div className="spinner-grow text-primary width-heigth me-4" role="status"></div>
            <div className="spinner-grow text-primary width-heigth me-4" role="status"></div>
        </div>
    )
}

export default Loader
