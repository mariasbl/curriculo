import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as React from "react";
import { FunctionComponent } from "react";
import { Menu } from "../Menu/menu";
import { Title } from "../Title/title";

interface LayoutProps {
    selected: number;
    setSelected: (arg: number) => void;
    setLoading: (arg: string) => void;
}

export const Layout: FunctionComponent<LayoutProps> = (props: LayoutProps) => {

    const description =  'Atualmente aluna finalista do Mestrado Integrado em Engenharia Informática na FCT NOVA. Entusiasmada por aprender mais sobre a temática da Engenharia Informática fora do ambiente escolar. A minha área de interesse é o desenvolvimento de web sites e aplicações, porém estou disposta a novos desafios.';

    return (
        <div>
            <Title />
            <p style={{textAlign: "justify", fontSize: "15px", marginTop:"3rem", marginBottom:"3rem"}}>{description}</p>
            <Menu selected={props.selected} setSelected={props.setSelected} setLoading={props.setLoading} />
            <div className="display-flex-start" style={{marginTop:"2rem"}}>
                <a href={"https://www.linkedin.com/in/maria-lobo-da-silva-2a425a212/"}><FontAwesomeIcon icon={['fab', 'linkedin']} color="#F6B94A"/>
                <span className="element-left" style={{marginLeft:"1rem"}}>Linkedin</span></a>
            </div>
            <div className="display-flex-start">
                <a href={"https://github.com/mariasbl"}><FontAwesomeIcon icon={['fab', 'github']} color="#F6B94A"/>
                <span className="element-left" style={{marginLeft:"1rem"}}>Github</span></a>
            </div>
        </div>
    );

}