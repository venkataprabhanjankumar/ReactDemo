import React, {Component} from "react";
class MultipleCheckBoxDemo extends Component{
    constructor(props) {
        super(props);
        this.state = {
            categories : [
                {
                    id : 1,
                    course : 'Java'
                },
                {
                    id : 2,
                    course : 'Python'
                },
                {
                    id : 3,
                    course: 'Django'
                },
                {
                    id : 4,
                    course: 'React Js'
                }
            ],
            checkedItems : new Map()
        }
    }
    handleChange=(event)=>{
        var isChecked = event.target.checked
        var item = event.target.value
        this.setState(
            prevState => ({checkedItems : prevState.checkedItems.set(item,isChecked)})
        )
    }
    handleSubmit=(event)=>{
        console.log(this.state.checkedItems)
        event.preventDefault()
    }
    render() {
        return(
            <>
                <h1>Multiple CheckBox Demo</h1>
                <form onSubmit={this.handleSubmit}>
                    {
                        this.state.categories.map(
                            (item,index) => (
                                <li key={index}>
                                    {console.log(item.course)}
                                    {console.log(index)}
                                    <label>{item.course}</label>
                                    <input type="checkbox" value={item.course} onChange={(event)=>this.handleChange(event)} />
                                </li>
                            )
                        )
                    }
                    <input type="Submit" value="Submit"/>
                </form>
            </>
        )
    }
}
export default MultipleCheckBoxDemo