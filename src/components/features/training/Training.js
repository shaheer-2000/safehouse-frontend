import React from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';
import TrainingRegistrationForm from '../../forms/TrainingRegisterationForm';
import InstructorRegistrationForm from '../../forms/InstructorRegisterationForm';

const Training = (props) => {

    return (
    <div className="w-full h-full flex flex-col bg-secondary">
        <div className="h-20 px-10 border-b-2 border-gray-300 bg-white flex flex-row items-end">
            <div className="border-r-2 border-gray-300">
                <NavLink to={"/dashboard/training/workshops"} className="tabLink" activeClassName="border-b-2 border-yellow-600">Workshops</NavLink>
                <NavLink to={"/dashboard/training/instructors"} className="tabLink" activeClassName="border-b-2 border-yellow-600">Instructors</NavLink>
            </div>
            <div>
                <NavLink to={"/dashboard/training/addworkshop"} className="mx-3 pb-1 text-yellow-600 hover:text-yellow-500" activeClassName="border-b-2 border-yellow-600">+Workshop</NavLink>
                <NavLink to={"/dashboard/training/addinstructor"} className="mx-3 pb-1 text-yellow-600 hover:text-yellow-500" activeClassName="border-b-2 border-yellow-600">+Instructor</NavLink>
            </div>
        </div>
        <div>
            <Switch>
                <Route path={"/dashboard/training/addworkshop"} component={TrainingRegistrationForm}></Route>
                <Route exact path={"/dashboard/training/addinstructor"} component={InstructorRegistrationForm}></Route>
            </Switch>
        </div>
    </div>)
}

export default Training;