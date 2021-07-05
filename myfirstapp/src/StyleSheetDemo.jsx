import React,{Component} from "react";
import './myStyle.css'
import styles from './myStyle.module.css'
import styled from 'styled-components';
class StyleSheetDemo extends React.Component{
    render() {
        return(
            <React.Fragment>
                {/*If the properties have two names, like background-color, it must be written in camel case syntax.*/}
                <div style={{backgroundColor:"blue"}}>
                    <p>hello</p>
                </div>
                <h4 style={{color:"red"}}>Hello I am Styling</h4>
                <StyleByJs/>
                <CssModuleDemo/>
                <StyledComponentsDemo/>
            </React.Fragment>
        )
    }
}
class StyleByJs extends Component{
    render() {
        const myStyle = {
            color : "red",
            fontsize : 30
        }
        return(
            <>
                <h5>Styling by Js</h5>
                <h5 style={myStyle}>This Is Styling</h5>
            </>
        )
    }
}
class CssModuleDemo extends Component{
    /*
    CSS Module is another way of adding styles to your application.
    It is a CSS file where all class names and animation names are scoped locally by default.
    It is available only for the component which imports
    it, means any styling you add can never be applied to other components without your permission,
     and you never need to worry about name conflicts. You can create CSS Module with the .
     module.css extension like a myStyles.module.css name.
    */
    render() {
        return(
            <>
                <h6 className={styles.myHStyle}>Heading1</h6>
                <h6 className={styles.myHStyle}>Heading2</h6>
                <p className={styles.myPStyle}>My Paragraph</p>
            </>
        )
    }
}
class StyledComponentsDemo extends Component{
    render() {
        const Title = styled.h3`
            font-family : Arial;
            font-size : 40px;
            text-align : center;
            color : red;
        `;
        const Paragraph = styled.p`
            font-family : sans-serif;
            font-size : 35px;
            color : blue;
        `;
        const Div =styled.div`
            font-family : Arial;
            font-size : 45px;
            border: 5px dashed green;
            &:hover{
                background-color : ${(props)=>props.hoverColor};
            }
        `;
        return(
            <>
                <Title>Sample Title</Title>
                <Div hoverColor = 'orange'>
                    <Paragraph>Welcome</Paragraph>
                    <Paragraph>Mouse Hover to Change Color </Paragraph>
                </Div>
            </>
        );
    }
}
export default StyleSheetDemo