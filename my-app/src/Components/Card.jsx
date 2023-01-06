import React from "react";

const Card = ({ stars, forks, repo, img, language }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center",
        border: "1px solid grey",
        padding: "5%",
        margin: "1%",
        borderRadius: "5px 20px 5px",
        boxShadow:
          "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
        // boxShadow:
        //   "2px 2px 2px 1px rgba(0, 0, 0, 0.2);/* offset-x | offset-y | blur-radius | spread-radius | color",

        // boxShadow:
        //   "inset 10px 10px 15px rgba(0,0,0,0.05), 15px 25px 20px rgba(0,0,0,.1), 15px 20px 20px rgba(0,0,0,0.05)",
      }}
    >
      <img
        src={img}
        alt={repo}
        style={{
          width: "100%",
          borderRadius: "5px 20px 5px",
          boxShadow:
            "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
        }}
      />
      <h3>{repo}</h3>
      <h4>{language}</h4>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {" "}
          <img
            src="https://www.freepnglogos.com/uploads/star-png/file-featured-article-star-svg-wikimedia-commons-8.png"
            alt=""
            style={{
              width: "20%",
            }}
          />
          <h3>{stars} </h3>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src="https://banner2.cleanpng.com/20181025/fwv/kisspng-fork-github-branching-computer-icons-source-code-certificado-escolar-icons-download-free-png-and-v-5bd22e28cedf43.5057165215405010328474.jpg"
            alt=""
            style={{
              width: "20%",
            }}
          />
          <h3>{forks} </h3>
        </div>
      </div>
    </div>
  );
};

export default Card;
