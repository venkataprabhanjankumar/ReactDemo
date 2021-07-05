import React, {Component} from 'react';
import axios from "axios";
class ListItems extends Component{
    constructor(props) {
        super(props);
        this.state = {
            posts : []
        }
    }
    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/posts`).then(
            res =>{
                const posts = res.data
                this.setState({posts})
            }
        )
    }
    getPosts=(id,e)=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`).then(
            res =>{
                const row = res.data
                console.log(row)
            }
        )
    }
    postData =(e)=>{
        axios.post(`https://jsonplaceholder.typicode.com/posts`,{id:102,title:'Sample Title',body:'SampleBody'}).then(
            res =>{
                console.log(res.request)
                const response = res.status
                console.log(response)
            }
        )
    }
    putData =(id,e)=>{
        axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`,{title:'sample Title'}).then(
            res => {
                console.log(res.request)
                const response = res.status
                console.log(response)
            }
        )
    }
    deleteRow=(id,e)=>{
        axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`).then(
            res =>{
                console.log(res);
                console.log(res.data);
                const posts = this.state.posts.filter(item => item.id !== id);
                this.setState({ posts });
            }
        )
    }
    render() {
        return(
            <>
                <h1>React Axioms Demo</h1>
                <button onClick={(e)=>this.getPosts(3,e)}>Get Data</button>
                <button onClick={(e)=>this.postData(e)}>Post Data</button>
                <button onClick={(e)=>this.putData(3,e)}>Put Data</button>
                <table>
                    <thead>
                        <tr>
                            <th>Index</th>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Body</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.posts.map(
                            (post,index) =>(
                                <tr key={index}>
                                    <td>{index}</td>
                                    <td>{post.id}</td>
                                    <td>{post.title}</td>
                                    <td>{post.body}</td>
                                    <td><button onClick={(e)=>this.deleteRow(post.id,e)}>Delete</button> </td>
                                </tr>
                            )
                        )}
                    </tbody>
                </table>

            </>
        )
    }
}
export default ListItems