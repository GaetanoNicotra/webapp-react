import { Link } from "react-router-dom";

const FilmCard = ({ film }) => {
    // destrutturazione 
    const { id, title, author, excerpt, cover } = film;
    return (
        <div className="col-12 col-md-6 col-lg-4">
            <div className="card">
                <div className="card-img-top">
                    <img src={cover} alt="film" className='img-fluid' />
                </div>
                <div className="card-body">
                    <h3 className='text-primary'>{title}</h3>
                    <h5><em>{author}</em></h5>
                    <p>{excerpt}</p>
                    <Link className="btn btn-primary" to={`/films/${id}`}>Esplora</Link>
                </div>
            </div>
        </div>
    )
}

export default FilmCard
