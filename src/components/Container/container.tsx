import * as React from "react";
import { FunctionComponent, ReactNode } from "react";
import './styles.css';

interface ContainerProps {
    header: string,
    class: string,
    color: string,
    children: ReactNode
}

export const Container: FunctionComponent<ContainerProps> = (props: ContainerProps) => {

    return (
        <div className={props.class}>
            <Header header={props.header} color={props.color} />
            {props.children}
        </div>
    );

}

interface HeaderProps {
    header: string,
    color: string
}

const Header: FunctionComponent<HeaderProps> = (props: HeaderProps) =>
    <>  
        <span className={"header-" + props.color}>{props.header}</span>
        <hr className={"line-" + props.color}/>
    </>