import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import Input from "../../../components/base/input";
import Button from "../../../components/base/button";
import styles from "../../../styles/auth.module.css";
import { useState } from "react";
import axios from "axios";
import swal from "sweetalert";

const Register = () => {
  const router = useRouter();

  const [registerForm, setRegisterForm] = useState({
    fullname: "",
    email: "",
    phone: "",
    password: "",
  });

  const [confirmPassword, setConfirmPassword] = useState("");

  const handleInput = (e) => {
    setRegisterForm({
      ...registerForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = (e) => {
    e.preventDefault();

    if (registerForm.password !== confirmPassword) {
      return console.log("password tidak sama");
    }

    axios
      .post("https://modern-jay-peplum.cyclic.app/v1/user/register", registerForm)
      .then(() => {
        router.push("/auth/login");
        swal({
          title: "Registered",
          text: `Please login with you account`,
          icon: "success",
        });
      })
      .catch((err) => {
        console.log(err);
        swal({
          title: "Failed",
          text: `Please make sure your data is correct!`,
          icon: "warning",
        });
      });
  };
  return (
    <main className={styles.main}>
      <section className={`col-md-6 ${styles.banner}`}>
        <Image
          src="/assets/peworld-white.svg"
          alt="peworld logo white"
          width="100"
          height="100"
          onClick={() => router.push("/")}
        />
        <h2>Temukan pekerjaan sebagai developer terbaik dengan cepat</h2>
      </section>
      <section className={`col-12 col-md-6 pt-1 ${styles.form}`}>
        <Image
          src="/assets/peworld-purple.svg"
          alt="peworld logo purple"
          width={150}
          height={150}
          className={styles["form-logo"]}
          onClick={() => router.push("/")}
        />
        <h1>Halo, Pewpeople</h1>
        <h5>Buat akun baru untuk mulai mencari pekerjaan!</h5>
        <form onSubmit={handleRegister} className="d-flex flex-column ">
          <Input
            label="Nama"
            id="fullname"
            name="fullname"
            type="text"
            placeholder="Masukkan nama panjang"
            classname={`mb-4 ${styles.input}`}
            onchange={handleInput}
          />
          <Input
            label="Email"
            id="email"
            name="email"
            type="email"
            placeholder="Masukkan alamat email"
            classname={`mb-4 ${styles.input}`}
            onchange={handleInput}
          />
          <Input
            label="Nomor handphone"
            id="phone"
            name="phone"
            type="tel"
            placeholder="Masukkan nomor handphone"
            classname={`mb-4 ${styles.input}`}
            onchange={handleInput}
          />
          <Input
            label="Kata sandi"
            id="password"
            name="password"
            type="password"
            placeholder="Masukkan kata sandi"
            classname={`mb-4 ${styles.input}`}
            onchange={handleInput}
          />
          <Input
            label="Konfirmasi kata sandi"
            id="confirmpassword"
            name="confirmpassword"
            type="password"
            placeholder="Konfirmasi kata sandi"
            classname={`mb-4 ${styles.input}`}
            onchange={(e) => setConfirmPassword(e.target.value)}
          />
          <Button
            title="Daftar"
            type="submit"
            classname={`mb-3 ${styles.button}`}
          />
          <small className={`align-self-center mb-3 ${styles.switch}`}>
            Anda sudah punya akun?
            <Link href={"/auth/login"}>Masuk di sini</Link>
          </small>
        </form>
      </section>
    </main>
  );
};

export default Register;
