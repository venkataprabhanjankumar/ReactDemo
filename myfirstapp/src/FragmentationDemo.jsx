import React, {Fragment} from "react";
class FragmentationDemo extends React.Component{
    render() {
        return(
            <React.Fragment>
                <h1>Fragmentation Demo</h1>
                <h5>This is h5 </h5>
                <p>This is Paragrapg</p>
                <FragmentationAlternate/>
                <KeyedFragmentationDemo myList = {[
                    {
                        id : 1,
                        name : 'prabhanjan',
                        email : 'prabhanjan@gmail.com'
                    },
                    {
                        id :2,
                        name : 'xyz',
                        email : 'xyz@gmail.com'
                    }
                ]}/>
            </React.Fragment>
        )
    }
}
class FragmentationAlternate extends React.Component{
    render() {
        return(
            <>
                <h5>I am h5</h5>
                <p>This is P1</p>
                <p>This is p2</p>
            </>
        )
    }
}
class KeyedFragmentationDemo extends React.Component{
    render() {
        return(
            <Fragment>
                {this.props.myList.map(
                    // Without the 'key', React will give a key warning
                    item=><React.Fragment key={item.id}>
                        <h5>{item.name}</h5>
                        <h5>{item.email}</h5>
                    </React.Fragment>
                )}
            </Fragment>
        )
    }
}
export default FragmentationDemo