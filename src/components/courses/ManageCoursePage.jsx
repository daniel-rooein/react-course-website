import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import {loadCourses} from '../../redux/actions/courseActions';
import {loadAuthors} from '../../redux/actions/authorActions';
import PropTypes from 'prop-types';

const ManageCoursePage = ({ courses, authors, loadAuthors, loadCourses }) => {
    
    useEffect(() => {
        if (courses.length === 0) {
                loadCourses().catch(error => {
                alert('Loading courses failed' + error);
            });
        }
        
        if (authors.length === 0) {
                loadAuthors().catch(error => {
                alert('Loading authors failed' + error);
            });
        }
    }, [])

    return(
        <div>
            <h2>Manage Course</h2>
        </div>
    )
}

ManageCoursePage.propTypes = {
    courses: PropTypes.array.isRequired,
    authors: PropTypes.array.isRequired,
    loadAuthors: PropTypes.func.isRequired,
    loadCourses: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
    return {
        courses: state.authors,
        authors: state.authors
    };
}

const mapDispatchToProps = {
    loadCourses,
    loadAuthors
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);