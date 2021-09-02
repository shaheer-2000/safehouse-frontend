import React from 'react';
import { Switch, Route, NavLink, Redirect } from 'react-router-dom';

const Training = (props) => {

    return (
    <div className="w-full h-full flex flex-col bg-secondary">
        <div className="h-20 px-10 border-b-2 border-gray-300 bg-white flex flex-row items-end">
            <div>
                <NavLink to={"/dashboard/training/workshops"} className="tabLink" activeClassName="border-b-2 border-yellow-600">Workshops</NavLink>
                <NavLink to={"/dashboard/training/instructors"} className="tabLink" activeClassName="border-b-2 border-yellow-600">Instructors</NavLink>
            </div>
            <div>
                {/* +workshop */}
            </div>
        </div>
        <div>
            <Switch>
                <Redirect exact from="/dashboard/training" to="/dashboard/training/workshops" />
                {/* <Route path={"/dashboard/training/addworkshop"} component={TrainingRegistrationForm}></Route>
                <Route exact path={"/dashboard/training/addinstructor"} component={InstructorRegistrationForm}></Route> */}
            </Switch>
        </div>
    </div>)
}

export default Training;