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
import styles from "../../styles/profileEdit.module.css";
import Input from "../../components/base/input";

const ProfileEdit = () => {
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
          <div className={styles["edit-card"]} style={{ marginBottom: "30px" }}>
            <h4>Data Diri</h4>
            <div className={styles.hl} />
            <form>
              <Input
                label="Nama Lengkap"
                id="fullname"
                name="fullname"
                type="text"
                placeholder="Masukkan nama lengkap"
                classname={`mb-4 ${styles.input}`}
              />
              <Input
                label="Bidang"
                id="title"
                name="title"
                type="text"
                placeholder="Masukkan bidang pekerjaan"
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
                label="Deskripsi Diri"
                id="description"
                name="description"
                type="text"
                placeholder="Masukkan deskripsi diri"
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
                label="Github"
                id="github"
                name="github"
                type="text"
                placeholder="Masukkan akun Github"
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

          <div className={styles["edit-card"]} style={{ marginBottom: "30px" }}>
            <h4>Skill</h4>
            <div className={styles.hl} />
            <form>
              <Input
                name="skill"
                type="text"
                placeholder="Javascript"
                classname={styles.input}
              />
              <Button
                title="Simpan"
                type="button"
                classname={styles["btn-yellow"]}
              />
            </form>
          </div>

          <div className={styles["edit-card"]} style={{ marginBottom: "30px" }}>
            <h4>Pengalaman Kerja</h4>
            <div className={styles.hl} />
            <form>
              <Input
                label="Posisi"
                id="position"
                name="position"
                type="text"
                placeholder="Web Developer"
                classname={`mb-4 ${styles.input}`}
              />
              <Input
                label="Nama Perusahaan"
                id="company"
                name="company"
                type="text"
                placeholder="PT Coba-Coba Sendiri"
                classname={`mb-4 ${styles.input}`}
              />
              <div className="d-flex col-12 p-0">
                <Input
                  label="Tanggal Mulai"
                  id="start-date"
                  name="start-date"
                  type="date"
                  classname={`mb-4 col-6 pl-0 ${styles["date-input"]}`}
                />
                <Input
                  label="Tanggal Selesai"
                  id="end-date"
                  name="end-date"
                  type="date"
                  classname={`mb-4 col-6 pr-0 ${styles["date-input"]}`}
                />
              </div>
              <Input
                label="Deskripsi Singkat"
                id="description"
                name="description"
                type="text"
                placeholder="Deskripsikan pekerjaan Anda"
                classname={`mb-4 ${styles.input}`}
              />
              <div className={styles.hl} />

              <Button
                title="Tambah Pengalaman"
                type="button"
                classname={styles["btn-yellow-alt"]}
              />
            </form>
          </div>

          <div className={styles["edit-card"]}>
            <h4>Portofolio</h4>
            <div className={styles.hl} />
            <form>
              <Input
                label="Nama Aplikasi"
                id="app-name"
                name="app-name"
                type="text"
                placeholder="Masukkan nama aplikasi"
                classname={`mb-4 ${styles.input}`}
              />
              <Input
                label="Link Aplikasi"
                id="app-link"
                name="app-link"
                type="text"
                placeholder="Masukkan link aplikasi"
                classname={`mb-4 ${styles.input}`}
              />
              <Input
                label="Jenis Aplikasi"
                id="app-type"
                name="app-type"
                type="text"
                placeholder="Masukkan jenis aplikasi"
                classname={`mb-4 ${styles.input}`}
              />
              <label
                className={`mb-4 ${styles["file-input"]}`}
                htmlFor="app-image"
              >
                <FontAwesomeIcon icon={faImage} height={50} />
                <span>Masukkan foto</span>
              </label>
              <input id="app-image" type="file" hidden />
              <div className={styles.hl} />

              <Button
                title="Tambah Portofolio"
                type="button"
                classname={styles["btn-yellow-alt"]}
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

export default ProfileEdit;
