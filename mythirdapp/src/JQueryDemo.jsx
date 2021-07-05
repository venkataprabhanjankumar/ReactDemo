import React,{Component} from 'react';
import $ from 'jquery'
class JQueryDemo extends Component{
    componentDidMount() {
        $(document).ready(function(){
                var t1 = $("input[name='t1']").val();
                console.log(t1);
                alert("Value With Out Click:"+t1);
                var t2 = $("input[name='t2']").val();
                console.log(t2);
                alert("Value With Out Click:"+t2);

                $("#bt1").click(function(){
                    var t1 = $("input[name='t1']").val();
                    console.log(t1);
                    alert("Value With Click:"+t1);
                    var t2 = $("input[name='t2']").val();
                    console.log(t2);
                    alert("Value WithClick:"+t2);
                });
            })
    }

    render() {
        return(
            <>
                <h1>Jquery Demo in React</h1>
                <form>
                    <input type="text" name="t1" />
                    <input type="text" value="Hello" name="t2" />
                </form>
                <button id="bt1">Get Value</button>
            </>
        )
    }
}
export default JQueryDemo