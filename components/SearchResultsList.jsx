import styles from "../styles/SearchResultsList.module.css";
import SearchResult from "./SearchResult";

const SearchResultsList = ({ results }) => {
  return (
    <div className={styles.resultsList}>
      <div>Search Results List</div>
      {results.map((result, id) => {
        return <SearchResult result={result} key={id} />;
      })}
    </div>
  );
};

export default SearchResultsList;
