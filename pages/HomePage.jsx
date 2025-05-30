import { Link } from "react-router-dom";

const HomePage = () => {
    return (
        <>
            <h1 className='text-secondary'>BOOLFILMS</h1>
            <div className="row mt-5">
                <div className="col-12 col-md-6 col-lg-4">
                    <div className="card">
                        <div className="card-img-top">
                            <img src="https://picsum.photos/500/300" alt="film" className='img-fluid' />
                        </div>
                        <div className="card-body">
                            <h3 className='text-primary'>Titolo</h3>
                            <h5><em>Produttori</em></h5>
                            <p>Trama</p>
                            <Link></Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomePage;
