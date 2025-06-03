import { Link } from "react-router-dom";

const FilmCard = ({ film }) => {
    // destrutturazione 
    const { id, title, director, excerpt, image } = film;
    return (
        <div className="col-12 col-md-6 col-lg-4">
            <div className="card">
                <div className="card-img-top">
                    <img src={image} alt="film" className='img-fluid' />
                </div>
                <div className="card-body">
                    <h3 className='text-primary'>{title}</h3>
                    <h5><em>{director}</em></h5>
                    <p>{excerpt}</p>
                    <Link className="btn btn-primary" to={`/films/${id}`}>Esplora</Link>
                </div>
            </div>
        </div>
    )
}

export default FilmCard
