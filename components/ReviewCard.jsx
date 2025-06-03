
const ReviewCard = ({ review }) => {
    const { name, vote, text } = review;
    return (
        <>
            <hr className='mt-2' />
            <div className='col-12 card-body'>
                <h3>{name}</h3>
                <h4>{vote}</h4>
                <p>{text}</p>
            </div>
            <hr />
        </>
    )
}

export default ReviewCard
