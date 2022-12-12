/* eslint-disable react-hooks/exhaustive-deps */
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faBell,
  faSignOut,
  faHome,
} from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import swal from "sweetalert";
import Button from "../../base/button";
import styles from "./navi.module.css";

const Navi = () => {
  const router = useRouter();

  const [isLogout, setIsLogout] = useState(false);
  const [localData, setLocalData] = useState();
  const [isToken, setIsToken] = useState(false);
  const [isRecruiter, setIsRecruiter] = useState(false);

  useEffect(() => {
    let data;
    if (localStorage.getItem("token")) {
      if (localStorage.getItem("company")) {
        data = JSON.parse(localStorage.getItem("company"));
      } else if (localStorage.getItem("user")) {
        data = JSON.parse(localStorage.getItem("user"));
      }

      setLocalData(data);
      if (data.company_id || data.user_id) {
        setIsToken(true);
      }

      if (data.company_id) {
        setIsRecruiter(true);
      }
    }
  }, []);

  const handleLogout = () => {
    swal({
      title: "Logging Out",
      text: `Are you sure want to leave?`,
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then(async (confirm) => {
      if (confirm) {
        localStorage.clear();
        setIsLogout(true);
      }
    });
  };

  useEffect(() => {
    if (isLogout) {
      swal({
        title: "Logged Out",
        text: `You have been logged out`,
        icon: "success",
      });
      router.push("/auth/login");
    }
  }, [isLogout]);

  return (
    <nav className={`mb-5 navbar navbar-expand-md ${styles.navi}`}>
      <Image
        src={"/assets/peworld-purple.svg"}
        alt="Peworld logo purple"
        width={100}
        height={50}
      />

      <button
        className={`navbar-toggler ${styles.toggler}`}
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#toggleMenu"
        aria-controls="toggleMenu"
        aria-expanded="false"
        aria-label="Toogle navigation"
      >
        <span className="navbar-toggler-icon">
          <Image
            src={"/assets/hamburger.svg"}
            alt="hamburger icon"
            width={30}
            height={30}
          />
        </span>
      </button>

      {isToken ? (
        <div className="collapse navbar-collapse" id="toggleMenu">
          <ul className="container p-0 navbar-nav text-center d-flex justify-content-end">
            <div className="d-flex flex-md-row flex-column justify-content-center">
              {isRecruiter && (
                <li>
                  <Button
                    title={
                      <>
                        <FontAwesomeIcon icon={faHome} />
                        <span className={`m-0 ml-2 ${styles["nav-text"]}`}>
                          Home
                        </span>
                      </>
                    }
                    type="button"
                    classname={`mb-3 m-md-0 ${styles["btn-white"]}`}
                    onclick={() => router.push("/home")}
                  />
                </li>
              )}

              <li>
                <Button
                  title={
                    <>
                      <FontAwesomeIcon icon={faBell} />
                      <span className={`m-0 ml-2 ${styles["nav-text"]}`}>
                        Notification
                      </span>
                    </>
                  }
                  type="button"
                  classname={`mb-3 m-md-0 ${styles["btn-white"]}`}
                />
              </li>

              <li>
                <Button
                  title={
                    <>
                      <FontAwesomeIcon icon={faUser} />
                      <span className={`m-0 ml-2 ${styles["nav-text"]}`}>
                        Profile
                      </span>
                    </>
                  }
                  type="button"
                  classname={`mb-3 m-md-0 ${styles["btn-white"]}`}
                  onclick={() =>
                    router.push(
                      isRecruiter
                        ? `/company/${localData.company_id}`
                        : `/profile/${localData.user_id}`
                    )
                  }
                />
              </li>

              <li>
                <Button
                  title={
                    <>
                      <FontAwesomeIcon icon={faSignOut} />
                      <span className={`m-0 ml-2 ${styles["nav-text"]}`}>
                        Log Out
                      </span>
                    </>
                  }
                  type="button"
                  classname={styles["btn-purple"]}
                  onclick={handleLogout}
                />
              </li>
            </div>
          </ul>
        </div>
      ) : (
        <div className="collapse navbar-collapse" id="toggleMenu">
          <ul className="container p-0 navbar-nav text-center d-flex justify-content-end">
            <div className="d-flex flex-row justify-content-center">
              <li>
                <Button
                  title="Masuk"
                  type="button"
                  classname={`mb-3 m-md-0 ${styles["btn-white"]}`}
                  onclick={() => router.push("/auth/login")}
                />
              </li>

              <li>
                <Button
                  title="Daftar"
                  type="button"
                  classname={styles["btn-purple"]}
                  onclick={() => router.push("/auth/register")}
                />
              </li>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navi;
