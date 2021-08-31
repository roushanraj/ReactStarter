import { Component } from "react";
import { ClassComponentSample } from "../ClassComponent";
import Info from "../FunctionalComponent";

export class HomeComponent extends Component{
render(){
    return  <div>       
                <Info componentType="Functional"></Info>
                <ClassComponentSample componentType="class"></ClassComponentSample>
            </div>
}
}