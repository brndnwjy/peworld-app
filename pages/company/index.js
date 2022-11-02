import Footer from "../../components/module/footer";
import Navi from "../../components/module/navi";
import Button from "../../components/base/button";
import Input from "../../components/base/input";
import styles from "../../styles/company.module.css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationPin,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const CompanyProfile = () => {
  return (
    <>
      <Navi />
      <main className={styles.main}>
        <div className={styles["company-card"]}>
          <div className={styles["bg-image"]} />
          <div className={styles["company-info"]}>
            <Image
              src={"/assets/banner.png"}
              alt="company logo"
              width={150}
              height={150}
            />
            <h4>PT Harus Bisa</h4>
            <div className={styles.location}>
              <FontAwesomeIcon icon={faLocationPin} height={13} />
              <span className="ml-2">Banjarmasin</span>
            </div>
            <p>This is supposed to be the description of the company</p>
            <Button
              title="Edit Profile"
              type="button"
              classname={styles["btn-purple"]}
            />

            <div className="d-flex col-12 flex-column align-items-center justify-content-start">
              <div className={styles.contact}>
                <FontAwesomeIcon icon={faEnvelope} height={15} />
                <span className="ml-2">louis@mail.com</span>
              </div>
              <div className={styles.contact}>
                <FontAwesomeIcon icon={faPhone} height={15} />
                <span className="ml-2">021-8738-3827</span>
              </div>
              <div className={styles.contact}>
                <FontAwesomeIcon icon={faInstagram} height={15} />
                <span className="ml-2">@louis_insta</span>
              </div>
              <div className={styles.contact}>
                <FontAwesomeIcon icon={faLinkedin} height={15} />
                <span className="ml-2">Louis Tomingse</span>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default CompanyProfile;
