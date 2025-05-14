import React, { Component } from 'react';
import './CourseCard.css';

class CourseCard extends Component {
    render() {
        const {
            title,
            price,
            language,
            duration,
            location,
            isNew = false,
            imageUrl
        } = this.props;

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
                    </div>

                    <button className="enroll-button">Enroll Now</button>
                </div>
            </div>
        );
    }
}

export default CourseCard;
