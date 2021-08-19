import React from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';

const Houses = (props) => {

    return (
    <div className="w-full h-full flex flex-col bg-secondary">
        <div className="h-20 px-10 border-b-2 border-gray-300 bg-white flex flex-row items-end justify-between">
            <div>
                <NavLink to={`/dashboard/${props.user}/users/managers`} className="tabLink" activeClassName="border-b-2 border-yellow-600">Houses</NavLink>
            </div>
        </div>
        <div>
            <Switch>
                {/* <Route path={`/dashboard/${props.user}/users/managers`} Component={Managers}></Route>
                <Route exact path={`/dashboard/${props.user}/users/housemates`} Component={HouseMates}></Route>
                <Route exact path={`/dashboard/${props.user}/users/homeless`} Component={Homeless}></Route> */}
            </Switch>
        </div>
    </div>)
}

export default Houses;