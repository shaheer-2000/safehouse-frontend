import React from 'react';
import { Switch, Route, NavLink, Redirect } from 'react-router-dom';
import Instructors from './Instructors';
import Workshops from './Workshops';

const TrainingNav = () => {

    return (
    <div className="w-full h-full flex flex-col bg-secondary">
        <div className="h-20 w-full px-10 border-b-2 border-gray-300 bg-white flex flex-row items-end fixed z-10">
            <div>
                <NavLink to="/dashboard/training/workshops" className="tabLink" activeClassName="border-b-2 border-yellow-600">Workshops</NavLink>
                <NavLink to="/dashboard/training/instructors" className="tabLink" activeClassName="border-b-2 border-yellow-600">Instructors</NavLink>
            </div>
            {
                (localStorage.getItem('type') === 'admin') ?
                <div className="border-l-2 border-gray-300">
                    <NavLink to="/dashboard/training/addworkshop" className="tabLink" activeClassName="border-b-2 border-yellow-600">+Workshop</NavLink>
                </div> :
                null
            }
        </div>
        <div className="mt-20 h-full w-full overflow-auto relative">
            <Switch>
                <Redirect exact from="/dashboard/training" to="/dashboard/training/workshops" />
                <Route path="/dashboard/training/workshops" component={Workshops}></Route>
                <Route path="/dashboard/training/instructors" component={Instructors}></Route>
            </Switch>
        </div>
    </div>)
}

export default TrainingNav;