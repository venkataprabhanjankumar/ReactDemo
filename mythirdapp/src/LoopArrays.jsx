import React, {Component} from "react";
class LoopArrays extends Component{
    render() {
        const data = [
            {
                id : 1,
                name : 'Prabhanjan',
                email : 'prabhanjan@gmail.com',
            },
            {
                id : 2,
                name : 'xyz',
                email: 'xyz@gmail.com'
            },
            {
                id : 3,
                name: 'abc',
                email: 'abc@gmail.com'
            }
        ]
        return(
            <>
                <table>
                    <thead>
                        <tr>
                            <th>Index</th>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(
                        (item,index) =>(
                                <tr key={index}>
                                    <td>{index}</td>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                </tr>
                            )
                        )}
                    </tbody>
                </table>
            </>
        )
    }
}
export default LoopArrays