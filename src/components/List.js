import React from 'react'
class List extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( <table className="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Correo</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td scope="row"></td>
                    <td>Diego</td>
                    <td>diego.rodriguez@gmail.com</td>
                </tr>
            </tbody>
        </table> );
    }
}
 
export default List;