import React, { useState } from 'react';
import './CourseCard.css';

const CourseCard = (props) => {
    const {
        title,
        price,
        language,
        duration,
        location,
        difficulty,
        isNew = false,
        imageUrl,
        isCompleted
    } = props;


    const [enrolled, setEnrolled] = useState(0)
    const [showReviewInput, setShowReviewInput] = useState(false);
    const [reviewSubmitted, setReviewSubmitted] = useState(false)
    const [reviewText, setReviewText] = useState('')

    const getButtonText = () => {
        if (!isCompleted) {
            if (difficulty === 'Beginner') {
                return 'Start Learning Now!'
            } else {
                return 'Enroll Now!'
            }
        } else {
            return 'Revisit Course'
        }

    }

    const handleEnrollClick = () => {
        setEnrolled(prevCount => prevCount + 1);
    };

    const handleReviewSubmit = () => {
        if (reviewText.trim()) {
            setReviewSubmitted(true);
            setShowReviewInput(false);
        }
    };

    const handleReviewSection = () => {
        if (reviewSubmitted) {
            return <p className='review-submitted'>Review Submitted</p>
        } else if (showReviewInput) {
            return (
                <div className="review-input-container">
                    <textarea
                        placeholder='enter your review'
                        value={reviewText}
                        onChange={(e) => {
                            console.log('value', reviewText)
                            setReviewText(e.target.value)
                            console.log(e.target.value);
                        }}
                        className="review-input" />
                    <button
                        onClick={handleReviewSubmit}
                        className="submit-review-button"
                    >
                        Submit
                    </button>
                </div>
            )
        } else {
            return (
                <button
                    onClick={() => setShowReviewInput(true)}
                    className="review-button"
                >
                    Leave a Review
                </button>
            );

        }
    }
    return (
        <div className="course-card">
            {imageUrl && (
                <div className="course-image">
                    <img src={imageUrl} alt={`${title} course`} />
                </div>
            )}

            <div className="course-content">
                <div className="course-header">
                    <h3 className="course-title">{title}</h3>
                    {isNew && <span className="new-badge">New</span>}
                </div>

                <div className="course-details">
                    <p className="course-price">${price}</p>
                    <p className="course-language">Language: {language}</p>
                    <p className="course-duration">Duration: {duration}</p>
                    <p className="course-location">Location: {location}</p>
                    <p className="course-difficulty">Difficulty: {difficulty}</p>

                </div>

                <button className="enroll-button" onClick={handleEnrollClick}>{getButtonText()}</button>
                {enrolled > 0 && (
                    <p className="enrollment-count">
                        Enrolled: {enrolled} {enrolled === 1 ? 'time' : 'times'}
                    </p>
                )}

                {handleReviewSection()}
            </div>
        </div>
    );
};

export default CourseCard;