import { Link } from "react-router-dom";


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


const HomePage = () => {
    return (
        <>
            <h1 className='text-secondary'>BOOLFILMS</h1>
            <div className="row mt-5 gy-4">
                <div className="col-12 col-md-6 col-lg-4">
                    <div className="card">
                        <div className="card-img-top">
                            <img src="https://picsum.photos/500/300" alt="film" className='img-fluid' />
                        </div>
                        <div className="card-body">
                            <h3 className='text-primary'>Titolo</h3>
                            <h5><em>Produttori</em></h5>
                            <p>Trama</p>
                            <Link className="btn btn-primary" to="/films/1">Esplora</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomePage;
