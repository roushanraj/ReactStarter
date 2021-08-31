import React, { Component } from 'react'

export class ClassComponentSample extends Component {
    render() {
       return <section>
        <h1>This is {this.props.componentType} Component</h1>
        <dl>
            <dt><b>1. PRODUCT DEVELOPMENT</b>
            </dt>
            <dd>TekMindz has been delivering transformative IT Solutions for well over a decade and has enabled over 300 global clients to achieve improved digital outcomes</dd>
            <dt><b>2. APPLICATION DEVELOPMENT</b>
            </dt>
            <dd>TekMindz offers full-lifecycle application services encompass development, integration, modernization and independent testing & validation—leveraging AI, Agile, DevOps, APIs, Microservices and more</dd>
            <dt><b>3. DIGITAL</b></dt>
            <dd>TekMindz has been enabling enterprises to navigate complex legacy landscapes and evolve into Digital businesses with comprehensive Enterprise Digital Transformation strategies</dd>
        </dl>
        <dl>
            <dt><b>4. TECHNOLOGY</b></dt>
            <dd>TekMindz has deep expertise across Mobile, Cloud, Application Development and Quality Engineering, driving maximum impact for clients with Agile and DevOps led development</dd>
            <dt><b>5. CONSULTING</b></dt>
            <dd>TekMindz brings well over a decade of Consulting experience across traditional legacy and next-gen digital technologies with flexible and scalable engagement and delivery models</dd>
        </dl>
    </section>
    }

}