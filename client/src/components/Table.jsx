import React from 'react'

export const TableProduct = ({ dataHead, dataTable }) => {
  return (
    <div className="card flex-auto">
      <table className="table-auto w-full">
        <thead>
          <tr>
            {dataHead?.map((item) => (
              <th>{item}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {dataTable?.map((item) => (
            <tr>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>{item.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};