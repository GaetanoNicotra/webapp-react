import { Link } from "react-router-dom";

const FilmCard = ({ film }) => {
    // destrutturazione 
    const { id, title, director, image } = film;
    return (
        <div className="col-12 col-md-6 col-lg-4">
            <div className="card">
                <div className="card-img-top">
                    <img src={image} alt="film" className='img-fluid' />
                </div>
                <div className="card-body">
                    <h3 className='text-primary'>{title}</h3>
                    <h5><em>{director}</em></h5>
                    <Link className="btn btn-primary mt-3" to={`/films/${id}`}>Esplora<i className="fa-solid fa-eye mx-2"></i></Link>
                </div>
            </div>
        </div>
    )
}

export default FilmCard;
