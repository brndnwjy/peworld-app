/* eslint-disable react-hooks/exhaustive-deps */
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
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";

const CompanyProfile = ({ companyData }) => {
  const router = useRouter();
  const { id } = router.query;
  // let localToken;

  const [company, setCompany] = useState();

  // useEffect(() => {
  //   localToken = localStorage ? localStorage.getItem("token") : "";
  // }, [router.isReady]);

  useEffect(() => {
    axios
      .get(`https://modern-jay-peplum.cyclic.app/v1/company/detail/${id}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      // .get(`https://modern-jay-peplum.cyclic.app/v1/company/${id}`, {
      //   headers: {Cookie: {localToken} },
      // })
      .then((res) => {
        setCompany(res.data.data);
        // console.log(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [router.isReady]);

  useEffect(() => {
    console.log(companyData);
  }, []);

  return (
    <>
      <Navi />
      <main className={styles.main}>
        <div className={styles["company-card"]}>
          <div className={styles["bg-image"]} />
          <div className={styles["company-info"]}>
            <Image
              src={
                companyData
                  ? companyData.logo === null
                    ? "/assets/banner.png"
                    : companyData.logo
                  : "/assets/banner.png"
              }
              alt="company logo"
              width={150}
              height={150}
            />
            <h4>{companyData ? companyData.name : "-"}</h4>
            <div className={styles.location}>
              <FontAwesomeIcon icon={faLocationPin} height={13} />
              <span className="ml-2">
                {companyData
                  ? companyData.location === null
                    ? "Nowhere"
                    : companyData.location
                  : "Nowhere"}
              </span>
            </div>
            <p>
              {companyData
                ? companyData.description === null
                  ? "Deskripsi perusahaan"
                  : companyData.description
                : "Deskripsi perusahaan"}
            </p>
            <Button
              title="Edit Profile"
              type="button"
              classname={styles["btn-purple"]}
              onclick={() => router.push(`edit/${id}`)}
            />

            <div className="d-flex col-12 flex-column align-items-center justify-content-start">
              <div className={styles.contact}>
                <FontAwesomeIcon icon={faEnvelope} height={15} />
                <span className="ml-2">
                  {companyData ? companyData.email : ""}
                </span>
              </div>

              <div className={styles.contact}>
                <FontAwesomeIcon icon={faPhone} height={15} />
                <span className="ml-2">
                  {companyData ? companyData.phone : ""}
                </span>
              </div>

              {companyData ? (
                companyData.insta === null ? (
                  ""
                ) : (
                  <div className={styles.contact}>
                    <FontAwesomeIcon icon={faInstagram} height={15} />
                    <span className="ml-2">{companyData.insta}</span>
                  </div>
                )
              ) : (
                ""
              )}

              {companyData ? (
                companyData.linkedin === null ? (
                  ""
                ) : (
                  <div className={styles.contact}>
                    <FontAwesomeIcon icon={faLinkedin} height={15} />
                    <span className="ml-2">{companyData.linkedin}</span>
                  </div>
                )
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export const getStaticProps = async (context) => {
  const { id } = context.params;
  const result = await axios.get(
    `https://modern-jay-peplum.cyclic.app/v1/company/detail/${id}`
  );

  return {
    props: {
      companyData: result.data.data[0],
    },
  };
};

export const getStaticPaths = async (context) => {
  const data = await axios.get("https://modern-jay-peplum.cyclic.app/v1/company/list")
  const res = data.data.data
  const paths = res.map((item) => {
    return {
      params : { id: item.company_id + "" }
    }
  })

  return {
    paths: paths,
    fallback: true,
  };
};


export default CompanyProfile;