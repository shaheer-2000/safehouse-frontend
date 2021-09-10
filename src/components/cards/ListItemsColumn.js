import React from "react";

function ListItemsColumn (props) {
    return(
      
        <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
        >
            {props.title}
        </th>
      
      
    );
}

function UserListItemsColumn (props){
    return(
        <>
        <ListItemsColumn title = {props.name}/>
        <ListItemsColumn title = {props.organization}/>
        <ListItemsColumn title = {props.country}/>
        </>
    );
}

function AffiliatesListItemsColumn (props){
    return(
        <>
        <ListItemsColumn title = {props.name}/>
        <ListItemsColumn title = {props.address}/>
        <ListItemsColumn title = {props.phone}/>
        <ListItemsColumn title = {props.website}/>
        </>
    )
}


export {UserListItemsColumn, AffiliatesListItemsColumn};