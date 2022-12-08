/* eslint-disable react-hooks/exhaustive-deps */
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationPin,
  faPen,
  faImage,
} from "@fortawesome/free-solid-svg-icons";
import Footer from "../../../components/module/footer";
import Navi from "../../../components/module/navi";
import Button from "../../../components/base/button";
import styles from "../../../styles/profileEdit.module.css";
import Input from "../../../components/base/input";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

const ProfileEdit = () => {
  const router = useRouter();
  const { id } = router.query;
  // let localToken;

  const [user, setUser] = useState();
  const [companies, setCompanies] = useState();

  // Update User
  const [update, setUpdate] = useState();
  const [avatar, setAvatar] = useState();
  const [avatarPreview, setAvatarPreview] = useState();

  const handleInput = (e) => {
    setUpdate({
      ...update,
      [e.target.name]: e.target.value,
    });
  };

  const handleAvatar = (e) => {
    setAvatar(e.target.files[0]);
    setAvatarPreview([URL.createObjectURL(e.target.files[0])]);
  };

  const handleUpdate = (e) => {
    e.preventDefault();

    let formData = new FormData();
    if (update.fullname) {
      formData.append("fullname", update.fullname);
    }
    if (update.title) {
      formData.append("title", update.title);
    }
    if (update.location) {
      formData.append("location", update.location);
    }
    if (update.description) {
      formData.append("description", update.description);
    }
    if (update.insta) {
      formData.append("insta", update.insta);
    }
    if (update.github) {
      formData.append("github", update.github);
    }
    if (update.linkedin) {
      formData.append("linkedin", update.linkedin);
    }
    if (avatar) {
      formData.append("avatar", avatar);
    }

    axios
      .put(`http://localhost:4000/v1/user/update/${id}`, formData)
      .then(() => {
        alert("Sukses");
        setUpdate();
        router.push();
      })
      .catch((err) => {
        console.log(err);
        alert("Gagal");
      });
  };

  // Insert Skill
  const [newSkill, setNewSkill] = useState({
    id,
    name: "",
  });

  const handleSkill = (e) => {
    e.preventDefault();

    if (newSkill.name) {
      axios
        .post(`http://localhost:4000/v1/user/skill`, newSkill)
        .then(() => {
          alert("Sukses");
          setNewSkill({
            ...newSkill,
            name: "",
          });
        })
        .catch((err) => {
          console.log(err);
          alert("Gagal");
        });
    } else {
      alert("harap masukkan data");
    }
  };

  // Insert Experience
  const [newExp, setNewExp] = useState({ id });

  const handleExp = (e) => {
    e.preventDefault();

    if (
      newExp.position &&
      newExp.start &&
      newExp.end &&
      newExp.company_id &&
      newExp.description
    ) {
      axios
        .post(`http://localhost:4000/v1/user/experience`, newExp)
        .then(() => {
          alert("Sukses");
          // setNewSkill({
          //   ...newSkill,
          //   name: "",
          // });
        })
        .catch((err) => {
          console.log(err);
          alert("Gagal");
        });
    } else {
      alert("harap lengkapi data");
    }
  };

  // Insert Portfolio
  const [newPorto, setNewPorto] = useState();
  const [portoImg, setPortoImg] = useState();
  const [portoImgPreview, setPortoImgPreview] = useState(null);

  const handlePortoImg = (e) => {
    setPortoImg(e.target.files[0]);
    setPortoImgPreview([URL.createObjectURL(e.target.files[0])]);
  };

  const handlePorto = (e) => {
    e.preventDefault();

    let formData = new FormData();
    formData.append("id", id);
    formData.append("name", newPorto.name);
    formData.append("link", newPorto.link);
    formData.append("type", newPorto.type);
    formData.append("image", portoImg);

    axios
      .post(`http://localhost:4000/v1/user/portfolio`, formData)
      .then(() => {
        alert("Sukses");
        // setUpdate();
        router.push();
      })
      .catch((err) => {
        console.log(err);
        alert("Gagal");
      });
  };

  // useEffect(() => {
  //   localToken = localStorage ? localStorage.getItem("token") : "";
  // }, [router.isReady]);

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
      .get(`http://localhost:4000/v1/company/list`)
      .then((res) => {
        console.log(res.data.data);
        setCompanies(res.data.data);
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
        <section className={`col-12 col-md-3 ${styles["profile-card"]}`}>
          <div className={`col-12 ${styles.profile}`}>
            <Image
              src={avatarPreview ? avatarPreview : user ? user.avatar : ""}
              alt="user avatar"
              width={100}
              height={100}
            />

            <label htmlFor="userUpdate" className={styles["btn-edit"]}>
              <FontAwesomeIcon icon={faPen} height={13} />
              <span className="ml-2">Sunting</span>
            </label>

            <input id="userUpdate" type="file" onChange={handleAvatar} hidden />

            <h4 className="m-0">{user ? user.fullname : ""}</h4>
            <h6 className="m-0">{user ? user.title : ""}</h6>
            <div className={styles.location}>
              <FontAwesomeIcon icon={faLocationPin} height={13} />
              <span className="ml-2">{user ? user.location : ""}</span>
            </div>
          </div>

          <div className={`col-12 ${styles["btn-group-top"]}`}>
            <Button
              title="Simpan"
              type="button"
              onclick={handleUpdate}
              classname={styles["btn-purple"]}
            />
            <Button
              title="Batal"
              type="button"
              onclick={() => router.back()}
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
                placeholder={user ? user.fullname : "Masukkan nama lengkap"}
                onchange={handleInput}
                classname={`mb-4 ${styles.input}`}
              />
              <Input
                label="Bidang"
                id="title"
                name="title"
                type="text"
                placeholder={user ? user.title : "Masukkan bidang pekerjaan"}
                onchange={handleInput}
                classname={`mb-4 ${styles.input}`}
              />
              <Input
                label="Domisili"
                id="location"
                name="location"
                type="text"
                placeholder={
                  user ? user.location : "Masukkan domisili tempat tinggal"
                }
                onchange={handleInput}
                classname={`mb-4 ${styles.input}`}
              />
              <Input
                label="Deskripsi Diri"
                id="description"
                name="description"
                type="text"
                placeholder={
                  user ? user.description : "Masukkan deskripsi diri"
                }
                onchange={handleInput}
                classname={`mb-4 ${styles.input}`}
              />
              <Input
                label="Instagram"
                id="insta"
                name="insta"
                type="text"
                placeholder={user ? user.insta : "Masukkan akun Instagram"}
                onchange={handleInput}
                classname={`mb-4 ${styles.input}`}
              />
              <Input
                label="Github"
                id="github"
                name="github"
                type="text"
                placeholder={user ? user.github : "Masukkan akun Github"}
                onchange={handleInput}
                classname={`mb-4 ${styles.input}`}
              />
              <Input
                label="Linkedin"
                id="linkedin"
                name="linkedin"
                type="text"
                placeholder={user ? user.linkedin : "Masukkan akun Linkedin"}
                onchange={handleInput}
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
                value={newSkill.name}
                placeholder="Javascript"
                onchange={(e) =>
                  setNewSkill({ ...newSkill, name: e.target.value })
                }
                classname={styles.input}
              />
              <Button
                title="Simpan"
                type="button"
                onclick={handleSkill}
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
                onchange={(e) =>
                  setNewExp({ ...newExp, position: e.target.value })
                }
                classname={`mb-4 ${styles.input}`}
              />

              <label htmlFor="company" className={styles["field-label"]}>
                Nama Perusahaan
              </label>
              <select
                id="company"
                name="company_id"
                aria-label="company select"
                onChange={(e) =>
                  setNewExp({
                    ...newExp,
                    company_id: e.target.value,
                  })
                }
                className={`mb-4 ${styles.select}`}
              >
                <option selected>Select company</option>
                {companies
                  ? companies.map((item, index) => (
                      <option value={item.company_id} key={index}>
                        {item.name}
                      </option>
                    ))
                  : ""}
              </select>
              <div className="d-flex col-12 p-0">
                <Input
                  label="Tanggal Mulai"
                  id="start-date"
                  name="start-date"
                  type="date"
                  onchange={(e) =>
                    setNewExp({
                      ...newExp,
                      start: e.target.value,
                    })
                  }
                  classname={`mb-4 col-6 pl-0 ${styles["date-input"]}`}
                />
                <Input
                  label="Tanggal Selesai"
                  id="end-date"
                  name="end-date"
                  type="date"
                  onchange={(e) =>
                    setNewExp({
                      ...newExp,
                      end: e.target.value,
                    })
                  }
                  classname={`mb-4 col-6 pr-0 ${styles["date-input"]}`}
                />
              </div>
              <Input
                label="Deskripsi Singkat"
                id="description"
                name="description"
                type="text"
                placeholder="Deskripsikan pekerjaan Anda"
                onchange={(e) =>
                  setNewExp({
                    ...newExp,
                    description: e.target.value,
                  })
                }
                classname={`mb-4 ${styles.input}`}
              />
              <div className={styles.hl} />

              <Button
                title="Tambah Pengalaman"
                type="button"
                onclick={handleExp}
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
                onchange={(e) =>
                  setNewPorto({
                    ...newPorto,
                    name: e.target.value,
                  })
                }
                classname={`mb-4 ${styles.input}`}
              />
              <Input
                label="Link Aplikasi"
                id="app-link"
                name="app-link"
                type="text"
                placeholder="Masukkan link aplikasi"
                onchange={(e) =>
                  setNewPorto({
                    ...newPorto,
                    link: e.target.value,
                  })
                }
                classname={`mb-4 ${styles.input}`}
              />
              <label htmlFor="company" className={styles["field-label"]}>
                Jenis Aplikasi
              </label>
              <select
                id="apptype"
                name="apptype"
                aria-label="apptype select"
                onChange={(e) =>
                  setNewPorto({
                    ...newPorto,
                    type: e.target.value,
                  })
                }
                className={`mb-4 ${styles.select}`}
              >
                <option selected>Select type</option>
                <option value={true}>Mobile App</option>
                <option value={false}>Web App</option>
              </select>

              <label
                className={`mb-4 ${styles["file-input"]}`}
                htmlFor="app-image"
              >
                {portoImgPreview !== null ? (
                  <Image src={portoImgPreview} alt="Porto" />
                ) : (
                  <>
                    <FontAwesomeIcon icon={faImage} height={50} />
                    <span>Masukkan foto</span>
                  </>
                )}
              </label>
              <input
                id="app-image"
                type="file"
                onChange={handlePortoImg}
                hidden
              />
              <div className={styles.hl} />

              <Button
                title="Tambah Portofolio"
                type="button"
                onclick={handlePorto}
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
