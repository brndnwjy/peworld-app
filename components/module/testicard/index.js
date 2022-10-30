import Image from "next/image"
import styles from "./testicard.module.css"

const Testicard = ({avatar, name, job, testi}) => {
  return (
    <div className={styles.card}>
        <Image src={avatar} alt="user avatar" width={100} height={100} />
        <h4>{name}</h4>
        <h6>{job}</h6>
        <p>{testi}</p>
    </div>
  )
}

export default Testicard