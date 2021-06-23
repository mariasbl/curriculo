import * as React from "react";
import { FunctionComponent, useState } from "react";
import { ItemPortfolio } from "../components/Item/item";
import { Video } from "../components/Video/video";

import bathstage from "../multimedia/video/bathstage.mp4"
import ignes from "../multimedia/video/ignes.mp4"
import store from "../multimedia/video/store.mp4"

export const Portfolio: FunctionComponent<{}> = () => {

    const [src, setSrc] = useState<string>("");
    const [show, setShow] = useState<boolean>(false);

    const data = [
        { technologies: ["react & typescript"], title: "currículo", description: "Web site destinado ao currículo, no qual é apresentado o percurso educativo, as experiências, as habilidades e as competências.", link: "https://github.com/mariasbl/curriculo", video: "" },
        { technologies: ["react & typescript"], title: "task calendar", description: "Protótipo de uma plataforma para organização das tarefas de projetos.", link: "", video: "" },
        { technologies: ["angular"], title: "shop", description: "Protótipo de uma loja de roupa.", link: "https://github.com/mariasbl/My-Store", video: store },
        { technologies: ["react & typescript", "nodejs", "mongodb"], title: "modelshak", description: "Plataforma educativa destinada à gestão de projetos de modelagem. Desenvolvida no âmbito da Tese de Mestrado.", link: "", video: ""},
        { technologies: ["react & typescript", "redux"], title: "bathstage", description: "Plataforma digital que expõe concertos em casas de banho e toda a experiência envolvente.", link: "https://bathstagemusic.com", video: bathstage },
        { technologies: ["react & javascript"], title: "ignes", description: "Plataforma destinada à prevenção de incêndios florestais e urbanos em Portugal.", link: "https://mimetic-encoder-209111.appspot.com", video: ignes },
    ];

    return (
        <>
            <div className="display-flex-wrap">
                {data.map((e, i) => <ItemPortfolio key={i} content={e} setSrc={setSrc} setShow={setShow} />)}
            </div>
            <Video src={src} show={show} setShow={setShow}/>
        </> 
    );
}