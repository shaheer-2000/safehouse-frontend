import React from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';
import HouseRegisterationForm from '../../forms/HouseRegisterationForm';

const Houses = (props) => {

    return (
    <div className="w-full h-full flex flex-col bg-secondary">
        <div className="h-20 px-10 border-b-2 border-gray-300 bg-white flex flex-row items-end">
            <div className="border-r-2 border-gray-300">
                <NavLink to={"/dashboard/houses/houselist"} className="tabLink" activeClassName="border-b-2 border-yellow-600">Houses</NavLink>
            </div>
            <div>
                <NavLink to={"/dashboard/houses/addhouse"} className="tabLink" activeClassName="border-b-2 border-yellow-600">+House</NavLink>
            </div>
        </div>
        <div>
            <Switch>
                <Route path={"/dashboard/houses/addhouse"} component={HouseRegisterationForm}></Route>
            </Switch>
        </div>
    </div>)
}

export default Houses;