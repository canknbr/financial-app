import React from "react";
import "./index.css";
const Demo = () => {
  return (
    <div className="demo" id="demo">
      <div className="container">
        <div className="col-1">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>Lorem, ipsum.</p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum,
            itaque. Ea voluptate voluptates ad exercitationem ab, natus debitis
            eius? Odit commodi earum autem non quis? Dicta, perferendis. Iste,
            dolores. Tempora.
          </p>
          <button className="button">Get your free financial analysis</button>
        </div>
        <div className="col-2">
          <iframe
            src="https://www.youtube.com/embed/0_hB1VvBtqY"
            title="YouTube video player"
            allowFullScreen
            width={570}
            height={320}
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Demo;
