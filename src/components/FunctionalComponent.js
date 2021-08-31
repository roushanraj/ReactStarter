import React from 'react'

function Info(props){
    console.log(props);
    return <div>
        <h2>This is {props.componentType} component</h2>
        <p>TekMindz is a trusted partner for delivering technology solutions to startups, business enterprises, and governments across industries in North America, EMEA, and APAC. Our services include Product Engineering, Application Services, Digital and Consulting. We enable our clients to grow at a fast pace and help them serve their customers and citizens most efficiently.</p>
        </div>   
}

export default Info;