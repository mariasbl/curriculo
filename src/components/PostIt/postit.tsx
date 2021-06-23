import { faThumbtack } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as React from "react";
import { FunctionComponent } from "react";
import './styles.css'

interface PostItProps {
    content: {title: string, description: string, date: string}
}

export const PostIt: FunctionComponent<PostItProps> = (props: PostItProps) =>
    <>
        <div className="postit">
            <div>
                <FontAwesomeIcon className="icon" icon={faThumbtack} color="#F6B94A" size={"lg"} />
            </div>
            <p className="element-education-title">{props.content.title}</p>
            <p className="element-education-description">{props.content.description}</p>
            <p className="element-education-date">{props.content.date}</p>
        </div>
    </>

