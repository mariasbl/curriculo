import { faExternalLinkAlt, faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as React from "react";
import { FunctionComponent } from "react";
import './styles.css'

interface ItemProps {
    content: { title: string, technologies: string, description: string, date: string }
}

export const ItemExperience: FunctionComponent<ItemProps> = (props: ItemProps) =>
    <>
        <div className="item-date">
            <p className="element-item-date">{props.content.date}</p>
        </div>
        <div className="item">
            <p className="element-item-title">{props.content.title}</p>
            <p className="element-item-technologies">{props.content.technologies}</p>
            <p className="element-item-description">{props.content.description}</p>
        </div>
    </>


interface ItemPortfolioProps {
    content: { technologies: string[]; title: string; description: string; link: string; video: string },
    setSrc: (arg: string) => void
    setShow: (arg: boolean) => void
}

export const ItemPortfolio: FunctionComponent<ItemPortfolioProps> = (props: ItemPortfolioProps) => {

    return (<>
        <div className="item-portfolio">
            {props.content.technologies.map((t, i) => <p key={i} className="element-item-portfolio-technologies">{t}</p>)}
            <p className="element-item-portfolio-title">{props.content.title}</p>
            <p className="element-item-portfolio-description">{props.content.description}</p>
            
            {props.content.link !== "" && <div className="display-flex-center btn" onClick={() => { window.open(props.content.link)}}>
                <FontAwesomeIcon icon={faExternalLinkAlt} color="#FFFFFF" />
                <span className="pd-left">abrir link</span>
            </div>}
            {props.content.video !== "" && <div className="display-flex-center btn" onClick={() => { props.setShow(true); props.setSrc(props.content.video) }}>
                <FontAwesomeIcon icon={faPlay} color="#FFFFFF" />
                <span className="pd-left">reproduzir</span>
            </div>}

        </div>
    </>)
}
