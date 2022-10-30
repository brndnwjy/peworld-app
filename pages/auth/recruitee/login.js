import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import Input from "../../../components/base/input";
import Button from "../../../components/base/button";
import styles from "../../../styles/auth.module.css";

const Login = () => {
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
        <h2>Temukan pekerjaan sebagai developer terbaik dengan cepat</h2>
      </section>
      <section className={`col-12 col-md-6 ${styles.form}`}>
        <Image
          src="/assets/peworld-purple.svg"
          alt="peworld logo purple"
          width={150}
          height={150}
          className={styles["form-logo"]}
          onClick={() => router.push("/")}
        />
        <h1>Halo, Pewpeople</h1>
        <h5>Login dengan akunmu untuk mulai mencari pekerjaan!</h5>
        <form className="d-flex flex-column ">
          <Input
            label="Email"
            id="email"
            name="email"
            type="email"
            placeholder="Masukkan alamat email"
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
          <Link href={"/auth/forgot"} className={`mb-3 ${styles.forgot}`}>
            Lupa kata sandi?
          </Link>
          <Button
            title="Masuk"
            type="submit"
            classname={`mb-3 ${styles.button}`}
          />
          <small className={`align-self-center mb-2 ${styles.switch}`}>
            Anda belum punya akun?
            <Link href={"/auth/register"}>Daftar di sini</Link>
          </small>
          <small className={`align-self-center text-center ${styles.switch}`}>
            Tidak sedang mencari pekerjaan?
            <Link href={"/auth/company/login"}>Mulai merekrut di sini</Link>
          </small>
        </form>
      </section>
    </main>
  );
};

export default Login;
