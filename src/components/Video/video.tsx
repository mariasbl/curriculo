import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as React from "react";
import { FunctionComponent } from "react";
import './styles.css'

interface VideoProps {
    src: string,
    show: boolean,
    setShow: (arg: boolean) => void
}

export const Video: FunctionComponent<VideoProps> = (props: VideoProps) =>
    <>
        {props.show && <div className="overlay-video">
            <div className="display-flex-end mg">
                <FontAwesomeIcon icon={faTimes} color="#FFFFFF" size={"2x"} onClick={() => props.setShow(false)} />
            </div>
            <div className="display-flex-center mg">
                <div className="container-video">
                    <video src={props.src} autoPlay></video>
                </div>
            </div>
        </div>}
    </>

