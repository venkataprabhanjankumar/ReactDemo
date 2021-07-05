import React from "react";
//import MyErrorBoundary from "./MyErrorBoundary";
const ExampleComponent = React.lazy(()=> import('./ExampleComponent'));
const ExampleComponent1 = React.lazy(()=>import('./ExampleComponent1'))
function LazyComponentDemo(){
    return(
        <div>
                <React.Suspense fallback={<div>
                    {/*This Is Will Be Displayed when component is loading or not loaded yet*/}
                    Component Is Loading Please Wait
                    </div>}>
                    <h4>Code Splitting Demo</h4>
                    <ExampleComponent name="PrabhanjanKumar"/>
                    <ExampleComponent1 email="prabhanjankumar@gmail.com"/>
                </React.Suspense>
        </div>
    )
}
export default LazyComponentDemo