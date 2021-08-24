import React from "react";
import "./Widgets.css";
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecordIcon />
      </div>

      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>Populaire news van vandaag</h2>
        <InfoIcon />
      </div>
      {newsArticle("1. Progect management Foundations", "Bonnie Biafore")}
      {newsArticle("2. Tesla hits new record highs", "The Motly Foo")}
    </div>
  );
}

export default Widgets;
