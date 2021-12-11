import {useContext} from 'react';
import FeedbackContext from '../context/FeedbackContext';

function FeedbackStats() {
    const {feedback} = useContext(FeedbackContext)
    //array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
    let average = feedback.reduce((acc, current) => {
        return acc + current.rating;
    }, 0) / feedback.length

    average = average.toFixed(1).replace(/[.,]0$/, '')
    return (
        <div className="feedback-stats">
            <h4>{feedback.length} Reviews</h4>
            <h5>Average Rating: {isNaN(average) ? 0 : average}</h5>
        </div>
    )
}

export default FeedbackStats