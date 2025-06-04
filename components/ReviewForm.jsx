import React from 'react'
import { useState } from 'react'
import axios from 'axios'

const ReviewForm = ({ movie_id, reloadReviews }) => {
    //definizione dei valori iniziali della form
    const initialData = { name: '', text: '', vote: '' }

    // variabile di stato
    const [formData, setFormData] = useState(initialData)

    // funzione che cambia i valori dei campi input
    const setFieldValue = (e) => {
        const { value, name } = e.target;
        setFormData({ ...formData, [name]: value })
    };

    // metodo che salva la recensione
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`http://127.0.0.1:3000/api/films/${movie_id}/review`, formData, {
            headers: { "Content-Type": "application/json" },
        }).then(() => {
            setFormData(initialData); reloadReviews();
        });
    };

    return (
        <>
            <div className='col-12'>
                <form onSubmit={handleSubmit}>
                    <div>Inserisci il nome</div>
                    <input className="form-control form-control" type="text" placeholder=".form-control-lg" aria-label=".form-control-lg example" required name="name" value={formData.name} onChange={setFieldValue} />
                    <div>Inserisci la recensione</div>
                    <input className="form-control-lg" type="text" placeholder="Default input" aria-label="default input example" required name="text" value={formData.text} onChange={setFieldValue} />
                    <div>inserisci il voto</div>
                    <input className="form-control form-control-sm" type="number" min="0" max="5" placeholder=".form-control-sm" aria-label=".form-control-sm example" name='vote' required value={formData.vote} onChange={setFieldValue} />
                    <button className="btn" type='submit'>Invia</button>
                </form>
            </div >
        </>

    )
}

export default ReviewForm
