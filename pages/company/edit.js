import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationPin,
  faPen,
  faImage,
} from "@fortawesome/free-solid-svg-icons";
import Footer from "../../components/module/footer";
import Navi from "../../components/module/navi";
import Button from "../../components/base/button";
import styles from "../../styles/companyEdit.module.css";
import Input from "../../components/base/input";

const CompanyEdit = () => {
  return (
    <>
      <Navi />
      <div className={styles["bg-purple"]} />
      <main className={styles.main}>
        <section className={`col-12 col-md-3 ${styles["profile-card"]}`}>
          <div className={`col-12 ${styles.profile}`}>
            <Image
              src={"/assets/banner.png"}
              alt="user avatar"
              width={100}
              height={100}
            />

            <Button
              title={
                <>
                  <FontAwesomeIcon icon={faPen} height={13} />
                  <span className="ml-2">Sunting</span>
                </>
              }
              type="button"
              classname={styles["btn-edit"]}
            />

            <h4 className="m-0">Louis Tomingse</h4>
            <h6 className="m-0">Developer</h6>
            <div className={styles.location}>
              <FontAwesomeIcon icon={faLocationPin} height={13} />
              <span className="ml-2">Banjarmasin</span>
            </div>
          </div>

          <div className={`col-12 ${styles["btn-group-top"]}`}>
            <Button
              title="Simpan"
              type="button"
              classname={styles["btn-purple"]}
            />
            <Button
              title="Batal"
              type="button"
              classname={styles["btn-white"]}
            />
          </div>
        </section>

        <section className={`col-12 col-md-9 ${styles.editor}`}>
          <div className={styles["edit-card"]}>
            <h4>Data Perusahaan</h4>
            <div className={styles.hl} />
            <form>
              <Input
                label="Nama Perusahaan"
                id="name"
                name="name"
                type="text"
                placeholder="Masukkan nama perusahaan"
                classname={`mb-4 ${styles.input}`}
              />
              <Input
                label="Bidang"
                id="area"
                name="area"
                type="text"
                placeholder="Masukkan bidang perusahaan"
                classname={`mb-4 ${styles.input}`}
              />
              <Input
                label="Domisili"
                id="location"
                name="location"
                type="text"
                placeholder="Masukkan domisili tempat tinggal"
                classname={`mb-4 ${styles.input}`}
              />
              <Input
                label="Deskripsi Perusahaan"
                id="description"
                name="description"
                type="text"
                placeholder="Masukkan deskripsi perusahaan"
                classname={`mb-4 ${styles.input}`}
              />
              <Input
                label="Instagram"
                id="insta"
                name="insta"
                type="text"
                placeholder="Masukkan akun Instagram"
                classname={`mb-4 ${styles.input}`}
              />
              <Input
                label="Linkedin"
                id="linkedin"
                name="linkedin"
                type="text"
                placeholder="Masukkan akun Linkedin"
                classname={styles.input}
              />
            </form>
          </div>
        </section>

        <section className={`col-12 ${styles["btn-group-btm"]}`}>
          <Button
            title="Simpan"
            type="button"
            classname={styles["btn-purple"]}
          />
          <Button title="Batal" type="button" classname={styles["btn-white"]} />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default CompanyEdit;
