import { Link } from "react-router-dom";
import { useState } from "react";
import FilmCard from "../components/FilmCard";

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

    return (
        <>
            <h1 className='text-secondary'>BOOLFILMS</h1>
            <div className="row mt-5 gy-4">
                {films.map((film) => {
                    // map
                    return <FilmCard film={film} key={film.id} />
                })}
            </div>
        </>
    )
}

export default HomePage;
