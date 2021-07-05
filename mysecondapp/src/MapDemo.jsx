import React, {Component} from 'react';

function ListItem(props) {
  return <li>{props.value}</li>;
}

function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map(
      (number) =><ListItem key={number.toString()} value={number} />
  );
  return (
    <div>
      <h2>React Map Example</h2>
          <ul> {listItems} </ul>
    </div>
  );
}

class MapDemo extends Component{
    render() {
        const arr = [1,2,3,4,5,6]
        return(
            <NumberList numbers={arr}/>
        )
    }
}
export default MapDemo