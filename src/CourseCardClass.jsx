import React, { Component } from 'react';
import './CourseCard.css';

class CourseCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            enroled: 0,
            showReviewInput: false,
            reviewSubmitted: false,
            reviewText: ''
        };
    }

    getButtonText = () => {
        const { difficulty } = this.props;
        if (difficulty === 'Beginner') {
            return 'Start Learning Now!';
        } else {
            return 'Enroll Now!';
        }
    }

    handleEnrollClick = () => {
        this.setState(prevState => ({
            enroled: prevState.enroled + 1
        }));
    }

    handleReviewSubmit = () => {
        if (this.state.reviewText.trim()) {
            this.setState({
                reviewSubmitted: true,
                showReviewInput: false
            });
        }
    }

    handleReviewSection = () => {
        const { showReviewInput, reviewSubmitted, reviewText } = this.state;

        if (reviewSubmitted) {
            return <p className='review-submitted'>Review Submitted</p>;
        } else if (showReviewInput) {
            return (
                <div className="review-input-container">
                    <input
                        type='text'
                        placeholder='enter your review'
                        value={reviewText}
                        onChange={(e) => this.setState({ reviewText: e.target.value })}
                        className="review-input"
                    />
                    <button
                        onClick={this.handleReviewSubmit}
                        className="submit-review-button"
                    >
                        Submit
                    </button>
                </div>
            );
        } else {
            return (
                <button
                    onClick={() => this.setState({ showReviewInput: true })}
                    className="review-button"
                >
                    Leave a Review
                </button>
            );
        }
    }

    render() {
        const {
            title,
            price,
            language,
            duration,
            location,
            difficulty,
            isNew = false,
            imageUrl
        } = this.props;

        const { enroled } = this.state;

        return (
            <div className="course-card">
                {imageUrl && (
                    <div className="course-image">
                        <img
                            src={imageUrl}
                            alt={`${difficulty} level course: ${title} - ${duration} in ${language}`}
                        />
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

                    <button
                        className="enroll-button"
                        onClick={this.handleEnrollClick}
                    >
                        {this.getButtonText()}
                    </button>

                    {enroled > 0 && (
                        <p className="enrollment-count">
                            Enrolled: {enroled} {enroled === 1 ? 'time' : 'times'}
                        </p>
                    )}

                    {this.handleReviewSection()}
                </div>
            </div>
        );
    }
}

export default CourseCard;

