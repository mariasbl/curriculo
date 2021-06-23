import * as React from "react";
import { FunctionComponent } from "react";
import { Container } from "../components/Container/container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlaneDeparture, faGamepad, faMusic, faUsers, faLaptopCode } from '@fortawesome/free-solid-svg-icons'
import { ProgressBar } from "../components/ProgressBar/progressBar";


export const Home: FunctionComponent<{}> = () => {

    const data_01 = [{ left: "email", right: "mbc.silva.97@gmail.com" }, { left: "telemóvel", right: "+351917169954" }, { left: "localização", right: "carnaxide, portugal" }]
    const data_02 = [{ left: "português", right: "nativo" }, { left: "inglês", right: "b1" }]
    const data_03 = [{ left: "criatividade", right: "90%" }, { left: "trabalho em equipa", right: "95%" }, { left: "flexibilidade / adaptabilidade", right: "90%" }, { left: "resiliência", right: "95%" }, { left: "comunicação", right: "85%" }];
    const data_04 = [{ left: "java", right: "80%" }, { left: "html/js/css", right: "95%" }, { left: "react", right: "95%" }, { left: "angular", right: "70%" }, { left: "nodejs", right: "90%" }, { left: "mongodb", right: "85%" }, { left: "redux", right: "80%" }];

    return (
        <div className="display-flex-wrap">
            <Container header="Informação" class="XLB" color="black">
                {data_01.map((e, i) =>
                    <div key={i} className="display-flex-start">
                        <span className="element-left">{e.left}</span>
                        <span className="element-right">{e.right}</span>
                    </div>
                )}
            </Container>
            <Container header="Idioma" class="SMB" color="black">
                {data_02.map((e, i) =>
                    <div key={i} className="display-flex-start">
                        <span className="element-left">{e.left}</span>
                        <span className="element-right">{e.right}</span>
                    </div>
                )}
            </Container>
            <Container header="Atividades/Hobbies" class="SMB" color="black">
                <div className="display-flex-center">
                    <FontAwesomeIcon icon={faPlaneDeparture} style={{ margin: "0.5rem", marginTop: "1rem" }} size={"2x"} color="#F6B94A" />
                    <FontAwesomeIcon icon={faGamepad} style={{ margin: "0.5rem", marginTop: "1rem" }} size={"2x"} color="#F6B94A" />
                    <FontAwesomeIcon icon={faMusic} style={{ margin: "0.5rem", marginTop: "1rem" }} size={"2x"} color="#F6B94A" />
                    <FontAwesomeIcon icon={faUsers} style={{ margin: "0.5rem", marginTop: "1rem" }} size={"2x"} color="#F6B94A" />
                    <FontAwesomeIcon icon={faLaptopCode} style={{ margin: "0.5rem", marginTop: "1rem" }} size={"2x"} color="#F6B94A" />
                </div>
            </Container>
            <Container header="Soft Skills" class="XLB" color="black">
                {data_03.map((e, i) =>
                    <div key={i} className="display-flex-start">
                        <span className="element-left element-width">{e.left}</span>
                        <ProgressBar percentage={e.right} color={"black"} />
                    </div>
                )}
            </Container>
            <Container header="Tecnologias" class="XLO" color="orange">
                {data_04.map((e, i) =>
                    <div key={i} className="display-flex-start">
                        <span className="element-left element-width color-black">{e.left}</span>
                        <ProgressBar percentage={e.right} color={"orange"} />
                    </div>
                )}
            </Container>
        </div>
    );
}
