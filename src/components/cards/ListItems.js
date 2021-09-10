import {UserListItemsColumn, AffiliatesListItemsColumn}  from "./ListItemsColumn";
import {UserListItemsData, AffiliateListItemsData} from "./ListItemsData";
import React from "react";

const ListItems = (props) => {
    return (
      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto">
          <div className="pt-2 align-middle inline-block min-w-full">
            <div className="shadow overflow-hidden border-b border-gray-200">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-secondary">
                  <tr>
                  {
                    (props.type === "user") ?
                    <UserListItemsColumn name = "Name" organization="Organization" role="Role" country="Country"></UserListItemsColumn> :
                    (props.type === "insuranceAgency" || props.type === "jobEmployer" || props.type === "trainingInstructor" || props.type === "rehabCenter") ?
                    <AffiliatesListItemsColumn name="Name" address="Address" phone="Phone" website="Website"></AffiliatesListItemsColumn> :
                    null
                  }
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                {
                  (props.type === "user") ?
                  <>
                    {
                      props.data.map((person, id) => <UserListItemsData key={id} person={person}/>
                      )
                    }
                  </> :
                  (props.type === "insuranceAgency" || props.type === "jobEmployer" || props.type === "trainingInstructor" || props.type === "rehabCenter") ?
                  <>
                    {
                      props.data?.map((affiliate, id) => {
                        return <AffiliateListItemsData key={id} affiliate={affiliate}/>
                      })
                    }
                  </> :
                  null
                }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    )
  }

  export default ListItems;
  
