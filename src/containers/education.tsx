import * as React from "react";
import { FunctionComponent } from "react";
import { PostIt } from "../components/PostIt/postit";

export const Education: FunctionComponent<{}> = () => {

    const data = {title: "mestrado integrado em engenharia informática", description:"Universidade Nova de Lisboa - Faculdadede Ciências e Tecnologias", date:"2015-2021"}

    return (
        <div className="display-flex-center">
            <PostIt content={data}/>
        </div>
    );
}