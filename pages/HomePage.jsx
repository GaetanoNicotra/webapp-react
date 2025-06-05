import { useState, useEffect, useContext } from "react";
import FilmCard from "../components/FilmCard";
import axios from "axios";
import globalContext from "../src/contexts/GlobalContext";

const HomePage = () => {
    // definisco la variabile di stato
    const [films, setFilms] = useState([]);
    const { setIsLoading } = useContext(globalContext)

    // definizione funzione che recupera i dati dal db tramite chiamata ajax con axios
    const fetchFilm = () => {
        setIsLoading(true)
        axios.get('http://127.0.0.1:3000/api/films/').then((resp) => {
            setTimeout(() => {
                setFilms(resp.data)
                setIsLoading(false)
            }, 1500)
        }).catch((err) => { console.log(err) })
    }

    // utilizzo l'hook useEffect per mostrare i film al caricamento della pagina
    useEffect(fetchFilm, [])

    return (
        <>
            <h1 className='text-secondary'>FILMS</h1>
            <div className="row mt-2 mb-5 gy-4">
                {films.map((film) => {
                    // map
                    return <FilmCard film={film} key={film.id} />
                })}
            </div>
        </>
    )
}

export default HomePage;
