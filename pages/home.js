import Navi from "../components/module/navi";
import Footer from "../components/module/footer";
import AccountCard from "../components/module/accountCard";
import Input from "../components/base/input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import styles from "../styles/home.module.css";
import Button from "../components/base/button";

const Home = () => {
  return (
    <>
      <Navi />
      <main className={styles.main}>
        <section className={styles.content}>
          <div className={styles.searchbar}>
            <input
              name="search"
              type="text"
              placeholder="Cari berdasarkan keahlian"
              className={`mb-4 ${styles["search-input"]}`}
            />
            <FontAwesomeIcon icon={faMagnifyingGlass} height={25} className={styles['search-icon']}/>
            <div className={styles.vl} />
            <Button
              title="Sortir"
              type="button"
              classname={styles["sort-btn"]}
            />
            <Button
              title="Cari"
              type="button"
              classname={styles["search-btn"]}
            />
          </div>

          <AccountCard
            name="Al-Fath Adhityo"
            job="Designer"
            location="Kemayoran"
          />
          <AccountCard
            name="Brendon Winata"
            job="Web Developer"
            location="Kapuk"
          />
          <AccountCard
            name="Fico Moris"
            job="Web Developer"
            location="Tangerang"
          />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Home;
