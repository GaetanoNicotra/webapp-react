import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import FilmCard from "../components/FilmCard";
import axios from "axios";
const initialFilms = [
    {
        id: 1,
        title: "Titolo 1",
        author: "Autore 1",
        excerpt: "Lorem ipsum dolor sit amet",
        cover: "https://picsum.photos/500/300",
        review: [
            {
                id: 1,
                text: "Lorem ipsum dolor sit amet",
                vote: 2,
                author: "Autore 1"
            },
            {
                id: 2,
                text: "Lorem ipsum dolor sit amet",
                vote: 4,
                author: "Autore 2"
            },
            {
                id: 3,
                text: "Lorem ipsum dolor sit amet",
                vote: 3,
                author: "Autore 3"
            }
        ]
    },
    {
        id: 2,
        title: "Titolo 2",
        author: "Autore 2",
        excerpt: "Lorem ipsum dolor sit amet",
        cover: "https://picsum.photos/500/300",
        review: [
            {
                id: 1,
                text: "Lorem ipsum dolor sit amet",
                vote: 2,
                author: "Autore 1"
            },
            {
                id: 2,
                text: "Lorem ipsum dolor sit amet",
                vote: 4,
                author: "Autore 2"
            },
            {
                id: 3,
                text: "Lorem ipsum dolor sit amet",
                vote: 3,
                author: "Autore 3"
            }
        ]
    },
    {
        id: 3,
        title: "Titolo 3",
        author: "Autore 3",
        excerpt: "Lorem ipsum dolor sit amet",
        cover: "https://picsum.photos/500/300",
        review: [
            {
                id: 1,
                text: "Lorem ipsum dolor sit amet",
                vote: 2,
                author: "Autore 1"
            },
            {
                id: 2,
                text: "Lorem ipsum dolor sit amet",
                vote: 4,
                author: "Autore 2"
            },
            {
                id: 3,
                text: "Lorem ipsum dolor sit amet",
                vote: 3,
                author: "Autore 3"
            }
        ]
    },
    {
        id: 4,
        title: "Titolo 4",
        author: "Autore 4",
        excerpt: "Lorem ipsum dolor sit amet",
        cover: "https://picsum.photos/500/300",
        review: [
            {
                id: 1,
                text: "Lorem ipsum dolor sit amet",
                vote: 2,
                author: "Autore 1"
            },
            {
                id: 2,
                text: "Lorem ipsum dolor sit amet",
                vote: 4,
                author: "Autore 2"
            },
            {
                id: 3,
                text: "Lorem ipsum dolor sit amet",
                vote: 3,
                author: "Autore 3"
            }
        ]
    },
    {
        id: 5,
        title: "Titolo 5",
        author: "Autore 5",
        excerpt: "Lorem ipsum dolor sit amet",
        cover: "https://picsum.photos/500/300",
        review: [
            {
                id: 1,
                text: "Lorem ipsum dolor sit amet",
                vote: 2,
                author: "Autore 1"
            },
            {
                id: 2,
                text: "Lorem ipsum dolor sit amet",
                vote: 4,
                author: "Autore 2"
            },
            {
                id: 3,
                text: "Lorem ipsum dolor sit amet",
                vote: 3,
                author: "Autore 3"
            }
        ]
    }
];

const HomePage = (film) => {
    // definisco la variabile di stato
    const [films, setFilms] = useState(initialFilms)
    // definizione funzione che recupera i dati dal db tramite chiamata ajax con axios
    useEffect(() => {
        axios.get('http://127.0.0.1:3000/api/films/').then((resp) => {
            console.log(resp.data)
        }).catch((err) => { console.log(err) })
    }, [])
    return (
        <>
            <h1 className='text-secondary'>BOOLFILMS</h1>
            <div className="row mt-4 mb-5 gy-4">
                {films.map((film) => {
                    // map
                    return <FilmCard film={film} key={film.id} />
                })}
            </div>
        </>
    )
}

export default HomePage;
