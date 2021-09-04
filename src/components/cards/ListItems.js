import {UserListItemsColumn, AffiliatesListItemsColumn}  from "./ListItemsColumn";
import {UserListItemsData, AffiliateListItemsData} from "./ListItemsData";
import React from "react";

const ListItems = (props) => {
    return (
      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    {
                      (props.type === "user") ?
                      <UserListItemsColumn name = "Name" organization="Organization" role="Role" country="Country"></UserListItemsColumn>:
                      (props.type === "insurance" || props.type === "employer" || props.type === "trainer" || props.type === "rehab") ?
                      <AffiliatesListItemsColumn name="Name" address="Address" phone="Phone" website="Website"></AffiliatesListItemsColumn>:
                      null
                    }
                  </tr>
                </thead>
                {
                  (props.type === "user")?
                  <>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {props.data.map((person) => (
                      <UserListItemsData key={person.id} person={person}/>
                    ))}
                  </tbody>
                  </>:
                  (props.type === "insurance" || props.type === "employer" || props.type === "trainer" || props.type === "rehab") ?
                  <>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {props.data.map((affiliate) => (
                      <AffiliateListItemsData key={affiliate.id} affiliate={affiliate}/>
                    ))}
                  </tbody>
                  </>:
                  null
                }
              </table>
            </div>
          </div>
        </div>
      </div>
    )
  }

  export default ListItems;
  
