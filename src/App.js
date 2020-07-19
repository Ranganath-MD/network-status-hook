import React from "react";
import "./styles.css";
import { useNetworkStatus } from "./useNetworkStatus";

export default function App() {
  const [online, status] = useNetworkStatus();
  return (
    <div className="App">
      {online ? (
        <div
          style={{
            backgroundColor: "limegreen",
            width: 200,
            margin: "auto",
            padding: 5
          }}
        >
          <p>You are {status}</p>
        </div>
      ) : (
        <div
          style={{
            backgroundColor: "#FF0000",
            width: 200,
            margin: "auto",
            padding: 5,
            color: "white"
          }}
        >
          <p>You are {status}, try connecting your network</p>
        </div>
      )}
    </div>
  );
}
