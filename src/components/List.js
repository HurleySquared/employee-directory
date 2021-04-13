import React from "react";

function List(props) {
  return (
    <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">Image</th>
                <th scope="col">Name</th>
                <th scope="col">Phone</th>
                <th scope="col" style={{ cursor: "grabbing" }} onClick={props.sortedEmp}>E-mail</th>
                <th scope="col">DoB</th>
              </tr>
            </thead>
            <tbody>
              {props.results.map(data => (
                <tr key={data.dob.date}>
                  <th scope="row"><img src={data.picture.thumbnail} alt="Employee Face"></img></th>
                  <td>{data.name.first + " " + data.name.last}</td>
                  <td>{data.phone}</td>
                  <td>{data.email}</td>
                  <td>{data.dob.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
  )
}

export default List;