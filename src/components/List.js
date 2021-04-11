import React from "react";

function List(props) {
  return (
    <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">Image</th>
                <th scope="col">Name</th>
                <th scope="col">Phone</th>
                <th scope="col">E-mail</th>
                <th scope="col">DoB</th>
              </tr>
            </thead>
            <tbody>
              {props.results.map(info => (
              <tr>
                <th scope="row">info.picture.thumbnail</th>
                <th>{info.name.first + " " + info.name.last}</th>
                <td>{info.phone}</td>
                <td>info.email</td>
                <td>info.dob.date</td>
              </tr>
                ))};
            </tbody>
          </table>
  );
}

export default List;