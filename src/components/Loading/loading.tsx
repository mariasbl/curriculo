import * as React from "react";
import { FunctionComponent } from "react";
import './styles.css';

export const Loading: FunctionComponent<{}> = () => {
    return (
        <div className="overlay">
            <div className="centered">
                <div className="loader"/>
            </div>
        </div>
    );

}