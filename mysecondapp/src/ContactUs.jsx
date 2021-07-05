import React, {Component} from "react";
import {NavLink} from "react-router-dom";

function Contacts(){
    const arr = []
    for (var i=0;i<5;i++){
        arr.push("/contact/"+i.toString())
    }
    const arrItems = arr.map(
        (list) =><li key={list.toString()}>
            <NavLink to={list} activeStyle={{color:'red'}}> {list} </NavLink>
        </li>
    )
    return(
        <ul>{arrItems}</ul>
    )
}
class ContactUs extends Component{
    render() {
        const person = this.props.match
        console.log(person)
        const url = person.url
        console.log(url)
        console.log(url.substr(9))
        console.log(typeof url)
        return(
            <>
                <h1>Contact Us</h1>
                <Contacts/>
                {url.substr(9)}
            </>
        )
    }
}

export default ContactUs