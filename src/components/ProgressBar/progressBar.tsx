import * as React from "react";
import { FunctionComponent } from "react";
import './styles.css'

interface ProgressBarInterface {
    color: string,
    percentage: string
}

export const ProgressBar: FunctionComponent<ProgressBarInterface> = (props: ProgressBarInterface) =>
    <>
        <div className={"bar-" + props.color}>
            <div className={"progress-" + props.color} style={{ width:props.percentage }}/>
        </div>
        {props.color === "black" ? <span className={"element-right letter-spacing-none"}>{props.percentage}</span>: <span className={"element-right color-black letter-spacing-none"}>{props.percentage}</span>}
    </>

