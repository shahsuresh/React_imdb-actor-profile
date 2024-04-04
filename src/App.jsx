import React from "react";

//rafce : shortcut to create boilerplate code
const App = () => {
  return (
    <div
      id="main-container"
      style={{
        marginLeft: "20%",
        textAlign: "center",
        width: "60%",
        height: "600px",
        backgroundColor: "#f6f6f5",
      }}
    >
      <h1>Best Actors</h1>
      <div
        className="actorProfileCard"
        style={{
          padding: "10px 5px",
          margin: "2%",
          width: "96%",
          height: "220px",
          boxShadow:
            "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
          display: "flex",
          // alignItems: "center",
          // justifyContent: "center",
        }}
      >
        <img src="/src/assets/1.jpg" style={{ height: "210px" }}></img>
        <div
          style={{
            margin: "0",
            padding: "0px 10px",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "2px",
          }}
        >
          {/* <h4>1.Jack Nicholson</h4> */}
          <span
            style={{ fontSize: "1.2rem", fontWeight: "bold", color: "#136cb2" }}
          >
            1.Jack Nicholson
          </span>
          <span>Actor | Chinatown</span>

          {/* <h5>Actor | Chinatown</h5> */}
          <p style={{ textAlign: "left" }}>
            Jack Nicholson, an American actor, producer, director and
            screenwriter, is a three-time Academy Award winner and twelve-time
            nominee. Nicholson is also notable for being one of two actors - the
            other being Michael Caine - who have received an Oscar nomination in
            every decade from the 60s through.
          </p>
        </div>
      </div>
      <div
        className="actorProfileCard"
        style={{
          padding: "10px 5px",
          margin: "2%",
          width: "96%",
          height: "220px",
          boxShadow:
            "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
          display: "flex",
          // alignItems: "center",
          // justifyContent: "center",
        }}
      >
        <img src="/src/assets/2.jpg" style={{ height: "210px" }}></img>
        <div
          style={{
            margin: "0",
            padding: "0px 10px",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "2px",
          }}
        >
          {/* <h4>1.Jack Nicholson</h4> */}
          <span
            style={{ fontSize: "1.2rem", fontWeight: "bold", color: "#136cb2" }}
          >
            2. Ralph Fiennes
          </span>
          <span>Actor | The Constant Gardener</span>

          {/* <h5>Actor | Chinatown</h5> */}
          <p style={{ textAlign: "left" }}>
            Actor Ralph Nathaniel Twisleton-Wykeham-Fiennes was born on December
            22, 1962 in Suffolk, England, to Jennifer Anne Mary Alleyne (Lash),
            a novelist, and Mark Fiennes, a photographer. He is the eldest of
            six children. Four of his siblings are also in the arts: Martha
            Fiennes, a director.
          </p>
        </div>
      </div>
      <div
        className="actorProfileCard"
        style={{
          padding: "10px 5px",
          margin: "2%",
          width: "96%",
          height: "220px",
          boxShadow:
            "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
          display: "flex",
          // alignItems: "center",
          // justifyContent: "center",
        }}
      >
        <img src="/src/assets/3.jpg" style={{ height: "210px" }}></img>
        <div
          style={{
            margin: "0",
            padding: "0px 10px",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "2px",
          }}
        >
          {/* <h4>1.Jack Nicholson</h4> */}
          <span
            style={{ fontSize: "1.2rem", fontWeight: "bold", color: "#136cb2" }}
          >
            3. Daniel Day-Lewis
          </span>
          <span>Actor | There Will Be Blood</span>

          {/* <h5>Actor | Chinatown</h5> */}
          <p style={{ textAlign: "left" }}>
            Born in London, England, Daniel Michael Blake Day-Lewis is the
            second child of Cecil Day-Lewis, Poet Laureate of the U.K., and his
            second wife, actress Jill Balcon. His maternal grandfather was Sir
            Michael Balcon, an important figure in the history of British cinema
            and head of the famous Ealing ...
          </p>
        </div>
      </div>
    </div>
  );
};

export default App;
