import {useState, useContext, useEffect} from 'react'
import FeedbackContext from '../context/FeedbackContext'
function RatingSelect({select}) {
    const [selected, setSelected] = useState(10)
    const {feedbackEdit} = useContext(FeedbackContext)
    const radioButtons = [1,2,3,4,5,6,7,8,9,10]

    useEffect(() => {
        setSelected(feedbackEdit.item.rating)
    }, [feedbackEdit])
    const handleChange = (e) => {
        setSelected(+e.currentTarget.value)
        select(+e.currentTarget.value)
    }
    return (
        <div>
            <ul className='rating'>
            {radioButtons.map((num, index) => (
                <li key={index}>
                    <input 
                    type='radio'
                    id={`num${num}`}
                    name='rating'
                    value={`${num}`}
                    onChange={handleChange}
                    checked={selected === num}
                    />
                    <label htmlFor={`num${num}`}>{`${num}`}</label>
                </li>
            ))}
        </ul>
        </div>
    )
}

export default RatingSelect