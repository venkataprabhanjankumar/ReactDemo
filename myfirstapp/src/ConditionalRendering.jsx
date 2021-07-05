import React from 'react';
function Message(props){
    if(props.isLogged){
        return <h1>Welcome Back</h1>
    }
    else{
       return <h1>Please Login</h1>
    }
}
function LoginButton(props){
        return <button onClick={props.clickInfo}>Login</button>
}
function LogOutButton(props){
        return<button onClick={props.clickInfo}>Logout</button>
}
class ConditionalRendering extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            isLogged : false
        }
    }
    loginHandle=()=>{
        this.setState({
            isLogged : true
        })
    }
    logoutHandle=()=>{
        this.setState({
            isLogged : false
        })
    }
    render() {
        return(
            <div>
                <h1>Conditional Rendering</h1>
                <Message isLogged = {this.state.isLogged} />
                {this.state.isLogged ?
                    <LogOutButton clickInfo = {this.logoutHandle} />
                    : <LoginButton clickInfo = {this.loginHandle}/>
                }
                <ListDemo/>
                <InCorrectKeysDemo/>
                <CorrectKeyDemo/>
                <KeyDemo/>
                <UniqueKeyDemo/>
            </div>
        )
    }
}
function NameList(props){
    const myList = props.myList
    const listItems = myList.map(
        (myList)=> <li>{myList}</li>
    );
    return(
        <ul>
            {listItems}
        </ul>
    )
}
class ListDemo extends React.Component{
    render() {
        const myList = ['hello','hii','hola','hey']
        return(
            <div>
                <h4>List Demo</h4>
                <NameList myList = {myList}/>
            </div>
        );
    }
}
function ListItem1(props){
    const item = props.item
    return(
        // Wrong! No need to specify the key here
        <li key={item.toString()}>
            {item}
        </li>
    )

}
function MyKeyDemo1(props){
    const myList = props.myList
    const itemsList = myList.map(
        // The key should have been specified here.
        (strList) => <ListItem1 item = {strList}/>
    );
    return(
        <div>
            <h1>Incorrect Usage</h1>
            <ol>
                {itemsList}
            </ol>
        </div>

    )
}
class InCorrectKeysDemo extends React.Component{
    render() {
        return(
            <div>
                <MyKeyDemo1 myList = {['helllo','hiii']}/>
            </div>
        );
    }
}
function ListItem2(props){
    const item = props.item
    // No need to specify the key here.
    return(
        <li>{item}</li>
    )
}
function MyKeyDemo2(props){
    const myList = props.myList
    const itemsList = myList.map(
        // The key should have been specified here.
        (strList) => <ListItem2 key = {strList.toString()} item={strList}/>
    )
    return(
        <div>
            <h1>Correct Usage</h1>
            <ol>
                {itemsList}
            </ol>
        </div>

    )
}
class CorrectKeyDemo extends React.Component{
    render() {
        return(
            <div>
                <MyKeyDemo2 myList ={['hello','hola','sample']} />
            </div>
        )
    }
}
function MyKeyDemo11(props){
    const myList = props.myItemList
    const itemList = myList.map(
        (strList,index)=><li key={index}>
            {index+':'+strList}
        </li>
    );
    return(
        <ul>
            {itemList}
        </ul>
    )
}

class KeyDemo extends React.Component{
    render() {
        return(
            <div>
                <MyKeyDemo11 myItemList = {['hello','Hii']}/>
            </div>
        )
    }
}
function MyBlog(props){
    const title = (
        <ol>
            {props.data.map(
                (show) => <li key={show.id}>
                    {show.id+':'+show.title}
                </li>
            )}
        </ol>
    );
    const content = (
        <ol>
            {props.data.map(
                (show) => <div key={show.id}>
                    <h5>{show.id}:{show.title}:{show.content}</h5>
                </div>
            )}
        </ol>
    )
    return(
        <div>
            {title}
            <br/>
            <h4>Content</h4>
            {content}
        </div>
    )
}
class UniqueKeyDemo extends React.Component{
    render() {
        const data = [
            {
                id : 1,
                title : 'MyTitle1',
                content : 'MyContent1'
            },
            {
                id : 2,
                title : 'MyTitle2',
                content : 'MyContent2'
            }

        ]
        return(
            <div>
                <MyBlog data = {data}/>
            </div>
        )
    }
}
export default ConditionalRendering