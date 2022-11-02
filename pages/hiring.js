import Navi from "../components/module/navi";
import Footer from "../components/module/footer";
import Input from "../components/base/input";
import Button from "../components/base/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationPin } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import styles from "../styles/hiring.module.css";

const Hiring = () => {
  return (
    <>
      <Navi />
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
        </section>

        <section className={`col-12 col-md-9 ${styles["hiring-detail"]}`}>
          <form
            className={styles["hiring-form"]}
            style={{ marginBottom: "30px" }}
          >
            <h4 className="mb-4">Hubungi Louis Tomingse</h4>

            <Input
              label="Jenis Tawaran"
              id="offer-type"
              name="offer-type"
              type="text"
              placeholder="Masukkan jenis tawaran"
              classname={`mb-4 ${styles.input}`}
            />

            <Input
              label="Nama Perekrut"
              id="cp-name"
              name="cp-name"
              type="text"
              placeholder="Masukkan nama lengkap"
              classname={`mb-4 ${styles.input}`}
            />

            <Input
              label="Email Perekrut"
              id="cp-email"
              name="cp-email"
              type="text"
              placeholder="Masukkan email"
              classname={`mb-4 ${styles.input}`}
            />

            <Input
              label="No. Handphone Perekrut"
              id="cp-phone"
              name="cp-phone"
              type="text"
              placeholder="Masukkan nomor handphone"
              classname={`mb-4 ${styles.input}`}
            />

            <Input
              label="Deskripsi Singkat"
              id="description"
              name="description"
              type="text"
              placeholder="Masukkan deskripsi singkat tentang tawaran"
              classname={`mb-4 ${styles.input}`}
            />

            <Button 
            title="Kirim Tawaran"
            type="submit"
            classname={styles['btn-yellow']}
            />
          </form>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Hiring;
