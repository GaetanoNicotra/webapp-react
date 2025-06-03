import { useState, useEffect, React } from "react"
import { useParams } from "react-router-dom"
import ReviewCard from "../components/ReviewCard";
import axios from "axios";

const FilmPage = () => {
    // recupero l'id del film cercato
    const { id } = useParams();

    const [film, setFilm] = useState({ reviews: [] })

    // definizione funzione che recupera il film con id cercato dal db tramite chiamata ajax con axios
    const fetchFilm = () => {
        axios.get(`http://127.0.0.1:3000/api/films/${id}`).then((resp) => {
            setFilm(resp.data);
        }).catch((err) => console.log(err))
    };

    // utilizzo l'hook useEffect per mostrare i film al caricamento della pagina
    useEffect(() => {
        fetchFilm();
    }, [])

    return (
        <>
            <div className='row'>
                <div className="col-12 col-md-6 col-lg-4">
                    <div className="card-img-top">
                        <img src={film.image} alt="film" className='img-fluid' />
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                    <h1>{film.title}</h1>
                    <h5>{film.genre}</h5>
                    <p>{film.relase_year}</p>
                    <h4><em>{film.director}</em></h4>
                    <p>{film.abstract}</p>
                </div>
                {film.reviews.map((review) =>
                    <ReviewCard review={review} />
                )}
            </div>

        </>

    )
}

export default FilmPage
