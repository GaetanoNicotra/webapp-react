import { Link } from 'react-router-dom'

const NotFoundPage = () => {
    return (
        <div className="d-flex flex-column align-items-center justify-content-center">
            <h2 className='text-danger'>PAGE NOT FOUND</h2>
            <p>Pagina non trovata</p>
            <Link to="/" className="btn btn-secondary">Torna alla Homepage</Link>
        </div>
    )
}

export default NotFoundPage;
