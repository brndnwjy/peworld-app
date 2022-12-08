/* eslint-disable react-hooks/exhaustive-deps */
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import swal from "sweetalert";
import Button from "../../base/button";
import styles from "./navi.module.css";

const Navi = () => {
  const router = useRouter();

  const [isLogout, setIsLogout] = useState(false);

  // let localToken;
  // let localData;
  // localToken = localStorage ? localStorage.getItem("token") : "";
  // localData = localStorage ? JSON.parse(localStorage.getItem("company")) : "";

  const handleLogout = () => {
    swal({
      title: "Logging Out",
      text: `Are you sure want to leave?`,
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then(async (confirm) => {
      if (confirm) {
        localStorage.clear()
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
        onClick={()=>router.push("/home")}
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

      {/* {localToken ? ( */}
        <div className="collapse navbar-collapse" id="toggleMenu">
          <ul className="container p-0 navbar-nav text-center d-flex justify-content-end">
            <div className="d-flex flex-row justify-content-center">
              <li>
                <Button
                  title="Profile"
                  type="button"
                  classname={`mb-3 m-md-0 ${styles["btn-white"]}`}
                  onclick={() =>
                    router.push(`/company/${localData.company_id}`)
                  }
                />
              </li>

              <li>
                <Button
                  title="Logout"
                  type="button"
                  classname={styles["btn-purple"]}
                  onclick={handleLogout}
                />
              </li>
            </div>
          </ul>
        </div>
      {/* ) : (
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
      )} */}
    </nav>
  );
};

export default Navi;
