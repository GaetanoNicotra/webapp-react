
const FilmPage = () => {
    return (
        <div className='row'>
            <div className="col-12 col-md-6 col-lg-4">
                <div className="card-img-top">
                    <img src="https://picsum.photos/500/300" alt="film" className='img-fluid' />
                </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
                <h1>Titolo</h1>
                <p>altre info: Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae reprehenderit aperiam exercitationem repellat saepe sequi!</p>
                <h5><em>Produttori</em></h5>
                <p>Trama: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet iusto omnis repellat quod animi illo ipsa alias velit facilis maxime?</p>
            </div>
        </div>
    )
}

export default FilmPage
