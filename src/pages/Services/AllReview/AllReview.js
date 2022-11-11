import React from 'react';

const AllReview = ({allrev}) => {
    const {ServicesName,patientName,message,img}=allrev
    return (
        <tr>
        <th>
         
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={img} alt="patient img" />
              </div>
            </div>
            <div>
              <div className="font-bold">{patientName}</div>
              
            </div>
          </div>
        </td>
        <td>
      {ServicesName}
         
        </td>
        <td>{message}</td>
       
        </tr>


    );
};

export default AllReview;