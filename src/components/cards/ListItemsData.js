import React from "react";
import { FaUserCircle } from "react-icons/fa";

function UserListItemsData (props) {
    const {person} = props;
    return(
      <tr>
        <td className="px-6 py-4 whitespace-nowrap">
          <div className="flex items-center">
            <div className="flex-shrink-0 h-10 w-10">
              {/* <img className="h-10 w-10 rounded-full" src={person.image} alt="" /> */}
              <FaUserCircle className="h-10 w-10 rounded-full text-primary" />
            </div>
            <div className="ml-4">
              <div className="text-sm font-medium text-primary">{person.name}</div>
              <div className="text-sm text-gray-500">{person.email}</div>
            </div>
          </div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap overflow-ellipsis">
        <div className="text-sm text-gray-900">{person.organization}</div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{person.country}</td>
      </tr>
    )
  }

  function AffiliateListItemsData (props) {
    const {affiliate} = props;
    return(
      <tr>
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
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{affiliate.phone_num}</td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{affiliate.website}</td>
      </tr>
    )
  }

export {UserListItemsData, AffiliateListItemsData}