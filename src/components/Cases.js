import React from "react";

import { ReactComponent as CasesPrev } from "../assets/arrow-left.svg";
import { ReactComponent as CasesNext } from "../assets/arrow-right.svg";

// Data
const CASE_STUDIES = [
  {
    id: 1,
    subtitle: "Curology",
    title: "A custom fomula for your skin's unique needs",
    img: "curology-min",
  },
  {
    id: 2,
    subtitle: "Yourspace",
    title: "Open space floor plans for your next venture",
    img: "yourspace-min",
  },
  {
    id: 3,
    subtitle: "Lumin",
    title: "For your best look ever",
    img: "lumin-min",
  },
];

const Cases = () => {
  return (
    <section className="cases">
      <div className="container-fluid">
        {/* Controls */}
        <div className="cases-navigation">
          <div className="cases-arrow prev disabled">
            <CasesPrev />
          </div>
          <div className="cases-arrow next">
            <CasesNext />
          </div>
        </div>

        {/* Case studies */}
        <div className="row">
          {CASE_STUDIES.map((c) => (
            <div className="case" key={c.id}>
              <div className="case-details">
                <span>{c.subtitle}</span>
                <h2>{c.title}</h2>
              </div>
              <div className="case-image">
                <img src={require(`../assets/${c.img}.png`)} alt={c.subtitle} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cases;
