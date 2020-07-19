import React from "react";
import "./styles.css";
import { useNetworkStatus } from "./useNetworkStatus";

export default function App() {
  const [online, status] = useNetworkStatus();
  return (
    <div className="App">
      {online ? (
        <div>
          <h1>You are {status}</h1>
        </div>
      ) : (
        <div>You are {status}, try connectin your network</div>
      )}
    </div>
  );
}
