import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../Components/Card";
import Loading from "../Components/Loading";
// import NoResults from "../Components/NoResults";

const HTML = () => {
  const [data, setData] = useState([]);
  // const [present, setPresent] = useState(false);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  let count = [];
  for (let i = 1; i <= 10; i++) {
    count.push(i);
  }
  const getData = async () => {
    try {
      setLoading(true);
      let res = await axios.get(
        `https://api.github.com/search/repositories?q=stars:%3E=1000+language:HTML&sort=stars&order=desc&per_page=10&page=${page}`
      );
      console.log(res);
      setData(res.data.items);
      setLoading(false);
    } catch (error) {
      console.log("error:", error);
      setLoading(false);
    }
  };

  // console.log(data);
  useEffect(() => {
    getData();
  }, [page]);

  // if (data) {
  //   setPresent(true);
  // } else {
  //   setPresent(false);
  // }

  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr 1fr",
          gap: "20px",
        }}
      >
        {
          // present ? (
          data.map((el) => (
            <Card
              img={el.owner.avatar_url}
              stars={el.stargazers_count}
              forks={el.forks}
              repo={el.owner.login}
              language={el.language}
              page={page}
            />
          ))
          // ) : (
          // <NoResults />
          // )
        }
      </div>
      <div
        style={{
          display: "block",
          margin: "auto",
          width: "50%",
          marginTop: "2%",
          marginBottom: "4%",
        }}
      >
        {count.map((el) => {
          return (
            <button
              style={{
                margin: "1%",
                borderColor: page == el ? "red" : "black",
                padding: "2% 3%",
                backgroundColor: page == el ? "yellow" : "grey",
                fontSize: "14px",
                borderRadius: "5px 20px 5px",
                color: page == el ? "black" : "white",
                fontStyle: "bolder",
              }}
              onClick={(e) => {
                setPage(e.target.value);
              }}
              value={el}
            >
              {el}
            </button>
          );
        })}
      </div>
    </>
  );
};

export default HTML;
