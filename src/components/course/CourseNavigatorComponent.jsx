import React, { Component } from 'react';
import HoleNavigatorContainer from 'components/hole/HoleNavigatorContainer';

export default class CourseNavigatorComponent extends Component {

    render () {

        const { course } = this.props;
        return <div>
            <HoleNavigatorContainer holes={ course.holes }/>
        </div>;
    }
}
