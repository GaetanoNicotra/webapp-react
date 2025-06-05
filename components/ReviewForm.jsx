import React from 'react'
import { useState, useContext } from 'react'
import axios from 'axios'
import globalContext from '../src/contexts/GlobalContext'

const ReviewForm = ({ movie_id, reloadReviews }) => {
    const { isLoading, setIsLoading } = useContext(globalContext)
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
        setIsLoading(true)
        e.preventDefault();
        axios.post(`http://127.0.0.1:3000/api/films/${movie_id}/review`, formData, {
            headers: { "Content-Type": "application/json" },
        }).then(() => {
            setTimeout(() => {
                setFormData(initialData); reloadReviews();
                setIsLoading(false)
            }, 1500)
        });
    };

    return (
        <>
            {!isLoading && (
                <div className='col-12 border'>
                    <h4 className='mt-2 mb-4'>Inserisci una nuova recensione</h4>
                    <form onSubmit={handleSubmit}>
                        <div>Inserisci il nome</div>
                        <input className="form-control form-control mt-2 mb-2" type="text" aria-label=".form-control-lg example" required name="name" value={formData.name} onChange={setFieldValue} />
                        <div>Inserisci la recensione</div>
                        <textarea className="form-control-lg mt-2 mb-2" type="text-area" aria-label="default input example" required name="text" value={formData.text} onChange={setFieldValue}></textarea>
                        <div>inserisci il voto</div>
                        <input className="form-control form-control-sm mt-2 mb-2" type="number" min="0" max="5" aria-label=".form-control-sm example" name='vote' required value={formData.vote} onChange={setFieldValue} />
                        <button className="btn btn-primary mt-2 mb-2" type='submit'>Invia</button>
                    </form>
                </div >
            )}
        </>
    )
}

export default ReviewForm
