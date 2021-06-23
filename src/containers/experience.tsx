import * as React from "react";
import { FunctionComponent } from "react";
import { ItemExperience } from "../components/Item/item";

export const Experience: FunctionComponent<{}> = () => {

    const data = [
        { title: "Dissertação de Mestrado", technologies: "React & Typescript", description: "Desenvolvimento e implementação de um web site educativo, destinado à gestão de projetos de modelagem, inspirado em Metodologias de Software (Scrum e Kanban). ", date: "2020-2021" },
        { title: "Bathstage", technologies: "React & Typescript", description: "Participação na criação e implementação de um web site para o Bathstage®.", date: "2020" },
        { title: "Erasmus", technologies: "", description: "Universidad Politécnica de Madrid – ETS de Ingenieros Informáticos", date: "2019" },
        { title: "Web Developer", technologies: "React & Typescript", description: "Participação na criação e implementação de uma aplicação, Ignes, para prevenção de incêndios florestais e urbanos em Portugal.", date: "2017-2018" },
        { title: "Hackathon", technologies: "", description: "Hackathon é uma maratona de programação, com duração de 24 horas, na qual participam várias equipas para criar e desenvolver produtos inovadores no ramo da Tecnologia. Os produtos são apresentados e avaliados por um conjunto de júris de um conjunto de empresas relevantes do setor.", date: "2017" },
    ];

    return (
        <div className="display-flex-center">
            <div className="vl"/>
            <div>
                {data.map((e, i) => <ItemExperience key={i} content={e} />)}
            </div>
        </div>
    );
}