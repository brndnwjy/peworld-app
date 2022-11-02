import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationPin, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import Footer from "../../components/module/footer";
import Navi from "../../components/module/navi";
import Button from "../../components/base/button";
import styles from "../../styles/profile.module.css";

const Profile = () => {
  return (
    <>
      <Navi />
      <div className={styles["bg-purple"]} />
      <main className={styles.main}>
        <section className={`col-12 col-md-3 ${styles.profile}`}>
          <Image
            src={"/assets/banner.png"}
            alt="user avatar"
            width={100}
            height={100}
          />
          <h4 className="m-0">Louis Tomingse</h4>
          <h6 className="m-0">Developer</h6>
          <div className={styles.location}>
            <FontAwesomeIcon icon={faLocationPin} height={13} />
            <span className="ml-2">Banjarmasin</span>
          </div>
          <p>
            This line supposed to be a short description about the talent, but
            since I can&apos;t cast the lorem100 so I type this instead.
          </p>
          {/* <Button
            title="Rekrut"
            type="button"
            classname={styles["btn-purple"]}
          /> */}

          {/* skill info */}
          <h4>Skill</h4>
          <div className={styles.skillset}>
            <span>Javascript</span>
            <span>Golang</span>
            <span>PHP</span>
            <span>Golang</span>
            <span>PHP</span>
            <span>Javascript</span>
          </div>

          {/* contact info */}
          <h4>Contatcs</h4>
          <div className={styles.contact}>
            <FontAwesomeIcon icon={faEnvelope} height={15} />
            <span className="ml-2">louis@mail.com</span>
          </div>
          <div className={styles.contact}>
            <FontAwesomeIcon icon={faInstagram} height={15} />
            <span className="ml-2">@louis_insta</span>
          </div>
          <div className={styles.contact}>
            <FontAwesomeIcon icon={faGithub} height={15} />
            <span className="ml-2">@louis_git</span>
          </div>
          <div className={styles.contact}>
            <FontAwesomeIcon icon={faLinkedin} height={15} />
            <span className="ml-2">Louis Tomingse</span>
          </div>
        </section>

        <section className={`col-12 col-md-9 ${styles.infograph}`}>
          <div className={styles["info-card"]} style={{marginBottom : "30px"}}>
            <h4 className="mb-4">Portofolio</h4>
            <div className="d-flex justify-content-between flex-wrap">
              <div className={styles.portfolio}>
                <Image
                  src={"/assets/banner.png"}
                  alt="user avatar"
                  width={150}
                  height={150}
                />
                <h6>First Application</h6>
              </div>

              <div className={styles.portfolio}>
                <Image
                  src={"/assets/banner.png"}
                  alt="user avatar"
                  width={150}
                  height={150}
                />
                <h6>Second Application</h6>
              </div>

              <div className={styles.portfolio}>
                <Image
                  src={"/assets/banner.png"}
                  alt="user avatar"
                  width={150}
                  height={150}
                />
                <h6>Third Application</h6>
              </div>

              <div className={styles.portfolio}>
                <Image
                  src={"/assets/banner.png"}
                  alt="user avatar"
                  width={150}
                  height={150}
                />
                <h6>Fourth Application</h6>
              </div>
            </div>
          </div>

          <div className={styles["info-card"]}>
            <h4 className="mb-4">Pengalaman Kerja</h4>
            <div>
              <div className={styles.experience}>
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
                  <p className="m-0">This part should be describing about the user joddesc while working here</p>
                </div>
              </div>

              <div className={styles.experience}>
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
                  <p className="m-0">This part should be describing about the user joddesc while working here</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Profile;
