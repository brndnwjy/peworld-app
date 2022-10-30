import Image from "next/image";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles['footer-top']}>
        <Image
          src={"/assets/peworld-white.svg"}
          alt="Peworld logo white"
          width={150}
          height={150}
        />
        <p>
          I don&apos;t really know whhat to write about this application, I
          guess Peworld is a LinkedIn rip-off and the design was made by a 1D
          hardcore fans.
        </p>
      </div>
      <div className={styles.hl}/>
      <div className={styles['footer-btm']}>
        <h6>
            2022 Peworld. All rights reserved
        </h6>

        <div>
            <span>Telepon</span>
            <span>Email</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
