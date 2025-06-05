import { useState, useEffect, React, useContext } from "react"
import { useParams } from "react-router-dom"
import ReviewCard from "../components/ReviewCard";
import axios from "axios";
import StarRating from "../components/StarRating";
import ReviewForm from "../components/ReviewForm";
import globalContext from "../src/contexts/GlobalContext";

const FilmPage = () => {
    const { setIsLoading } = useContext(globalContext)
    // recupero l'id del film cercato
    const { id } = useParams();

    const [film, setFilm] = useState({ reviews: [] })

    // definizione funzione che recupera il film con id cercato dal db tramite chiamata ajax con axios
    const fetchFilm = () => {
        setIsLoading(true)
        axios.get(`http://127.0.0.1:3000/api/films/${id}`).then((resp) => {
            setTimeout(() => {
                setFilm(resp.data)
                setIsLoading(false)
            }, 1500)
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
                    <p>{film.release_year}</p>
                    <h4><em>{film.director}</em></h4>
                    <p>{film.abstract}</p>
                    <div><StarRating vote={film.average_vote} /></div>
                </div>
                <h3 className="mt-4 mb-3">Recensioni:</h3>
                {film.reviews.map((review) =>
                    <ReviewCard key={`review-${review.id}`} review={review} />
                )}
            </div>
            <ReviewForm movie_id={id} reloadReviews={fetchFilm} />
        </>
    )
}

export default FilmPage;
