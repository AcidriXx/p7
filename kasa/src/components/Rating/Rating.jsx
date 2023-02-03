import imgStar from '../images/star.png'
import starRate from '../images/starRate.png'
import '../Rating/Rating.css'

const Rating = ({ rating }) => {
    const stars = [1, 2, 3, 4, 5];

    return (
        <div className='allStarRate' >
            {stars.map((star) =>
                rating >= star ? (
                    <img src={starRate} alt="" className='rateStar' key={star} />
                ) : (
                    <img src={imgStar} alt="" className='rateStar' key={star}  />
                )
            )}
        </div>
    )
    
}

export default Rating;