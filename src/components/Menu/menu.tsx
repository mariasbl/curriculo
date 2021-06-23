import * as React from "react";
import { FunctionComponent } from "react";
import { getHref } from "../../lib/utils";
import './styles.css';

interface MenuProps {
    selected: number;
    setSelected: (arg: number) => void;
    setLoading: (arg: string) => void;
}

export const Menu: FunctionComponent<MenuProps> = (props: MenuProps) => {

    const tabs = [
        { number: "01", text: "sobre" },
        { number: "02", text: "educação" },
        { number: "03", text: "experiência" },
        { number: "04", text: "portfólio" }
    ];

    return (
        <div>
            {tabs.map((t, i) => props.selected === i ?
                <Tab key={i} number={t.number} text={t.text} selected={true} setSelected={props.setSelected} index={i} setLoading={props.setLoading} />
                : <Tab key={i} number={t.number} text={t.text} selected={false} setSelected={props.setSelected} index={i} setLoading={props.setLoading}/>)}
        </div>
    );

}

interface TabProps {
    number: string;
    text: string;
    selected: boolean;
    setSelected: (arg: number) => void;
    setLoading: (arg: string) => void;
    index: number
}

const Tab: FunctionComponent<TabProps> = (props: TabProps) =>
    props.selected ?
        <div onClick={() => {props.setSelected(props.index); props.setLoading(getHref(props.index))}}>
            <div className="tab-selected">
                <span>{props.number}</span>
                <hr className="line-selected" />
                <span>{props.text}</span>
            </div>
        </div>
        : <div onClick={() => {props.setSelected(props.index); props.setLoading(getHref(props.index))}}>
            <div className="tab">
                <span>{props.number}</span>
                <hr className="line" />
                <span>{props.text}</span>
            </div>
        </div>