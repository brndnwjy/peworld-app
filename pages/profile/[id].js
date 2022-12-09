/* eslint-disable react/jsx-key */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from "../../components/module/footer";
import Navi from "../../components/module/navi";
import Button from "../../components/base/button";
import {
  faLocationPin,
  faEnvelope,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import styles from "../../styles/profile.module.css";
import swal from "sweetalert";

const Profile = () => {
  const router = useRouter();
  const { id } = router.query;

  const [isWorker, setIsWorker] = useState(false);

  const [user, setUser] = useState(false);
  const [skills, setSkills] = useState();
  const [portos, setPortos] = useState();
  const [expis, setExpis] = useState();

  useEffect(() => {
    let data;
    if (localStorage.getItem("company")) {
      data = JSON.parse(localStorage.getItem("company"));
    } else if (localStorage.getItem("user")) {
      data = JSON.parse(localStorage.getItem("user"));
    }

    console.log("data");
    console.log(data);
    console.log("id");
    console.log(id);

    if (data.user_id) {
      setIsWorker(true);
    }
  }, []);

  // Delete function
  const deletePorto = (val) => {
    swal({
      title: "Deletion",
      text: `Are you sure want to delete this portfolio?`,
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then(async (confirm) => {
      if (confirm) {
        await axios.delete(`http://localhost:4000/v1/user/portfolio/${val}`);
        swal({
          title: "Deletion",
          text: `Portfolio deleted`,
          icon: "success",
        });
      }
    });
  };

  const deleteExp = (val) => {
    swal({
      title: "Deletion",
      text: `Are you sure want to delete this experience?`,
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then(async (confirm) => {
      if (confirm) {
        await axios.delete(`http://localhost:4000/v1/user/experience/${val}`);
        swal({
          title: "Deletion",
          text: `Job Experience deleted`,
          icon: "success",
        });
      }
    });
  };

  useEffect(() => {
    axios
      .get(`http://localhost:4000/v1/user/${id}`)
      // .get(`http://localhost:4000/v1/user/${id}`, {
      //   headers: {Cookie: {localToken} },
      // })
      .then((res) => {
        setUser(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [router.isReady]);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/v1/user/${id}/skill`)
      .then((res) => {
        setSkills(res.data.skills);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [router.isReady]);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/v1/user/${id}/portfolio`)
      .then((res) => {
        setPortos(res.data.portfolio);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [router.isReady]);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/v1/user/${id}/experience`)
      .then((res) => {
        console.log(res.data.experiences);
        setExpis(res.data.experiences);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [router.isReady]);

  return (
    <>
      <Navi />
      <div className={styles["bg-purple"]} />
      <main className={styles.main}>
        <section className={`col-12 col-md-3 ${styles.profile}`}>
          {user?.avatar ? (
            <img
              src={user.avatar}
              alt="user avatar"
              width={100}
              height={100}
              style={{ objectFit: "cover" }}
            />
          ) : (
            <img
              src={"/assets/banner.png"}
              alt="user avatar"
              width={100}
              height={100}
            />
          )}
          <h4 className="m-0">{user ? user.fullname : ""}</h4>
          <h6 className="m-0">{user?.title ? user.title : "Jobseeker"}</h6>
          <div className={styles.location}>
            <FontAwesomeIcon icon={faLocationPin} height={13} />
            <span className="ml-2">
              {user?.location ? user.location : "Nowhere"}
            </span>
          </div>
          <p>
            {user
              ? user.description
              : `This line supposed to be a short description about the talent, but
            since I can&apos;t cast the lorem100 so I type this instead.`}
          </p>

          <Button
            title={isWorker ? "Sunting" : "Rekrut"}
            type="button"
            classname={styles["btn-purple"]}
            onclick={() => {
              isWorker
                ? router.push(`/profile/edit/${id}`)
                : router.push(`/hiring/${id}`);
            }}
            // onclick={() => {
            //   router.push(`/hiring/${id}`);
            // }}
          />

          {/* skill info */}
          {skills && skills.length > 0 && (
            <>
              <h4>Skill</h4>
              <div className={styles.skillset}>
                {skills
                  ? skills.map((skill) => <span>{skill.skill_name}</span>)
                  : ""}
              </div>
            </>
          )}

          {/* contact info */}
          <h4>Contatcs</h4>
          <div className={styles.contact}>
            <FontAwesomeIcon icon={faEnvelope} height={15} />
            <span className="ml-2">{user ? user.email : ""}</span>
          </div>

          {user?.insta && (
            <div className={styles.contact}>
              <FontAwesomeIcon icon={faInstagram} height={15} />
              <span className="ml-2">{user.insta}</span>
            </div>
          )}

          {user?.github && (
            <div className={styles.contact}>
              <FontAwesomeIcon icon={faGithub} height={15} />
              <span className="ml-2">{user.github}</span>
            </div>
          )}

          {user?.linkedin && (
            <div className={styles.contact}>
              <FontAwesomeIcon icon={faLinkedin} height={15} />
              <span className="ml-2">{user.linkedin}</span>
            </div>
          )}
        </section>

        <section className={`col-12 col-md-9 ${styles.infograph}`}>
          <div className={styles["info-card"]} style={{ marginBottom: "30px" }}>
            <h4 className="mb-4">Portofolio</h4>
            <div className="d-flex justify-content-between flex-wrap">
              <div className={`col-12 m-0 p-0 ${styles.portfolio}`}>
                {portos && portos.length > 0
                  ? portos.map((porto) => (
                      <div className="d-flex flex-column text-center col-3 mr-2">
                        <h6>
                          {porto.app_name} -{" "}
                          {porto.app_type ? "Mobile" : "Web App"}
                        </h6>
                        <img
                          src={porto.app_image}
                          alt="user avatar"
                          width={150}
                          height={150}
                        />
                        {isWorker ? (
                          <Button
                            title={
                              <>
                                <FontAwesomeIcon
                                  icon={faTrashCan}
                                  height={15}
                                />
                                <span className="ml-2">Delete</span>
                              </>
                            }
                            type="button"
                            classname={styles["delete-btn"]}
                            onclick={() => deletePorto(porto.app_id)}
                          />
                        ) : (
                          ""
                        )}
                      </div>
                    ))
                  : "- Belum ada Portfolio -"}
              </div>
            </div>
          </div>

          <div className={styles["info-card"]}>
            <h4 className="mb-4">Pengalaman Kerja</h4>
            <div>
              <div className={styles.experience}>
                {expis && expis.length > 0
                  ? expis.map((exp) => (
                      <div className="d-flex col-12 align-items-center mb-3">
                        <img
                          src={exp.logo ? exp.logo : ""}
                          alt="company logo"
                          width={100}
                          height={100}
                        />
                        <div className="d-flex col-10 justify-content-between align-items-center">
                          <div className="d-flex flex-column col-9 justify-content-center">
                            <h5>{exp.position ? exp.position : "Free role"}</h5>
                            <h6>{exp.company}</h6>
                            <span>
                              {new Date(exp.start_date).toLocaleDateString()} -{" "}
                              {new Date(exp.end_date).toLocaleDateString()}
                            </span>
                            <p className="m-0">{exp.description}</p>
                          </div>

                          {isWorker ? (
                            <Button
                              title={
                                <FontAwesomeIcon
                                  icon={faTrashCan}
                                  height={15}
                                />
                              }
                              type="button"
                              classname={styles["alt-delete-btn"]}
                              onclick={() => deleteExp(exp.exp_id)}
                            />
                          ) : (
                            ""
                          )}
                        </div>
                      </div>
                    ))
                  : "- Belum ada pengalaman kerja -"}
              </div>

              {/* <div className={styles.experience}>
                <Image
                  src={"/assets/banner.png"}
                  alt="user avatar"
                  width={100}
                  height={100}
                />
                <div>
                  <h5>Technical Trainer</h5>
                  <h6>Pijar</h6>
                  <span>Agustus 2019 - Juni 2023</span>
                  <p className="m-0">
                    This part should be describing about the user joddesc while
                    working here
                  </p>
                </div>
              </div> */}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Profile;
