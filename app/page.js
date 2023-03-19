"use client";
import { useState } from "react";
import SearchBar from "../components/SearchBar";
import SearchResultsList from "../components/SearchResultsList";
import styles from "../styles/page.module.css";

export default function Home() {
  const [results, setResults] = useState([]);

  return (
    <main className={styles.main}>
      <div className={styles.title}>
        <h1 className={styles.name}>my sous app</h1>
        <h2 className={styles.subName}>
          your decision-making kitchen assistant
        </h2>
        <div className={styles.homeBody}>
          <SearchBar setResults={setResults} />
          <SearchResultsList results={results} />
        </div>
      </div>
    </main>
  );
}
