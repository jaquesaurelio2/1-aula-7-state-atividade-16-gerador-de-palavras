import * as React from "react";
import styles from "./app.module.css";

export default function App() {
  const words = ["Palavra 1", "Palavra 2"];

  return (
    <div className={styles.app}>
      <button>Adicionar palavra</button>
    </div>
  );
}
