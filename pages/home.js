/* eslint-disable react/jsx-key */
import Navi from "../components/module/navi";
import Footer from "../components/module/footer";
import AccountCard from "../components/module/accountCard";
import Input from "../components/base/input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import styles from "../styles/home.module.css";
import Button from "../components/base/button";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";

const Home = ({ data }) => {
  const router = useRouter();

  const [user, setUser] = useState();
  const [search, setSearch] = useState();
  const [pagination, setPagination] = useState();
  const [currentPage, setCurrentPage] = useState(1);

  const filterUser = (key, page) => {
    axios
      .get(
        `http://localhost:4000/v1/company/user/list?search=${
          search ? search : ""
        }&page=${page ? page : 1}`
      )
      .then((res) => {
        setUser(res.data.data);
        setPagination(res.data.pagination);
        // console.log(res.data);
      });
  };

  const handleSearch = async (e) => {
    if (e.key === "Enter") {
      setCurrentPage(1);
      filterUser(search, currentPage);
    }
  };

  const handlePage = (page) => {
    setCurrentPage(page);
    filterUser(search, page);
  };

  useEffect(() => {
    filterUser();
    console.log(data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

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
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={handleSearch}
              className={`mb-4 ${styles["search-input"]}`}
            />
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              height={25}
              className={styles["search-icon"]}
            />
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

          {user
            ? user.map((item) => (
                <AccountCard
                avatar={item.avatar}
                  name={item.fullname}
                  job={item.title === null ? "Part-time Human" : item.title}
                  location={
                    item.location === null ? "Neverland" : item.location
                  }
                  action={() => router.push(`/profile/${item.user_id}`)}
                />
              ))
            : ""}

          <div className={`${styles["page-container"]}`}>
            {pagination &&
              new Array(pagination.totalPage).fill().map((item, index) => (
                <button onClick={() => handlePage(index + 1)} key={index}>
                  {index + 1}
                </button>
              ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export async function getServerSideProps(context) {
  const result = await axios.get(`http://localhost:4000/v1/company/user/list`);
  console.log(result.data);
  return {
    props: { 
      data: result.data,
      error: false,
      errorMessage: "",
    },
  };
}

export default Home;
