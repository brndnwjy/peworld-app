import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import Input from "../../../components/base/input";
import Button from "../../../components/base/button";
import styles from "../../../styles/auth.module.css";

const CompanyRegister = () => {
  const router = useRouter();
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
        <h2>
          Temukan developer berbakat & terbaik di berbagai bidang keahlian
        </h2>
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
        <h5>Buat akun baru untuk mulai mencari talent!</h5>
        <form className="d-flex flex-column ">
          <Input
            label="Nama"
            id="fullname"
            name="fullname"
            type="text"
            placeholder="Masukkan nama panjang"
            classname={`mb-4 ${styles.input}`}
          />
          <Input
            label="Email"
            id="email"
            name="email"
            type="email"
            placeholder="Masukkan alamat email"
            classname={`mb-4 ${styles.input}`}
          />
          <Input
            label="Perusahaan"
            id="company"
            name="company"
            type="text"
            placeholder="Masukkan nama perusahaan"
            classname={`mb-4 ${styles.input}`}
          />
          <Input
            label="Jabatan"
            id="position"
            name="position"
            type="text"
            placeholder="Masukkan jabatan di perusahaan Anda"
            classname={`mb-4 ${styles.input}`}
          />
          <Input
            label="Nomor handphone"
            id="phone"
            name="phone"
            type="tel"
            placeholder="Masukkan nomor handphone"
            classname={`mb-4 ${styles.input}`}
          />
          <Input
            label="Kata sandi"
            id="password"
            name="password"
            type="password"
            placeholder="Masukkan kata sandi"
            classname={`mb-4 ${styles.input}`}
          />
          <Input
            label="Konfirmasi kata sandi"
            id="conformpassword"
            name="conformpassword"
            type="password"
            placeholder="Konfirmasi kata sandi"
            classname={`mb-4 ${styles.input}`}
          />
          <Button
            title="Daftar"
            type="submit"
            classname={`mb-3 ${styles.button}`}
          />
          <small className={`align-self-center mb-3 ${styles.switch}`}>
            Anda sudah punya akun?
            <Link href={"/auth/company/login"}>Masuk di sini</Link>
          </small>
        </form>
      </section>
    </main>
  );
};

export default CompanyRegister;
