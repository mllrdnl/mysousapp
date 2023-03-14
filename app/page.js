import styles from "../styles/page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.title}>
        <h1 className={styles.name}>my sous app</h1>
        <h2 className={styles.subName}>
          your decision-making kitchen assistant
        </h2>
        <div className={styles.homeBody}>
          <div className={styles.ingSearch}>
            <label className={styles.ingLabel}>Ingredients</label>

            <input
              type="text"
              name="inrSearchBar"
              placeholder="ex: black beans, rice, tomatoes..."
            />
            <p className={styles.subIngLabel}>
              search & select 2 - 4 ingredients from your fridge/pantry
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
