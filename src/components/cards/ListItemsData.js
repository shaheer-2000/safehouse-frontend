import React from "react";

function UserListItemsData (props) {
    const {person} = props;
    return(
      <tr key={person.id}>
        <td className="px-6 py-4 whitespace-nowrap">
          <div className="flex items-center">
            <div className="flex-shrink-0 h-10 w-10">
              <img className="h-10 w-10 rounded-full" src={person.image} alt="" />
            </div>
            <div className="ml-4">
              <div className="text-sm font-medium text-gray-900">{person.name}</div>
              <div className="text-sm text-gray-500">{person.email}</div>
            </div>
          </div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">{person.organization}</div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{person.type}</td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{person.country}</td>
      </tr>
    )
  }

  function AffiliateListItemsData (props) {
    const {affiliate} = props;
    return(
      <tr key={affiliate.id}>
        <td className="px-6 py-4 whitespace-nowrap">
          <div className="flex items-center">
            <div className="flex-shrink-0 h-10 w-10">
              <img className="h-10 w-10 rounded-full" src={affiliate.image} alt="" />
            </div>
            <div className="ml-4">
              <div className="text-sm font-medium text-gray-900">{affiliate.name}</div>
              <div className="text-sm text-gray-500">{affiliate.email}</div>
            </div>
          </div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{affiliate.address}</td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{affiliate.phone}</td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{affiliate.website}</td>
      </tr>
    )
  }

export {UserListItemsData, AffiliateListItemsData}