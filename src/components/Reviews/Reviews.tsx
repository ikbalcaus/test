import React, { useState } from "react";
import styles from "./Reviews.module.css";
import { Rating } from "react-simple-star-rating";
import { IoIosArrowDown } from "react-icons/io";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useTranslation } from "react-i18next";

export default function Reviews() {
  const { t } = useTranslation();
  const [showReviews, setShowReviews] = useState(false);

  return (
    <>
      <div className={styles.container}>
        <div
          className={styles.header}
          onClick={() => setShowReviews(!showReviews)}
        >
          <h4>{t("reviews")} (0)</h4>
          <div>
            <Rating size={22} allowHover={false} fillColor={"#cccccc"} />
            {showReviews ? <MdKeyboardArrowRight /> : <IoIosArrowDown />}
          </div>
        </div>
        {showReviews && (
          <div className={styles.reviews}>
            <div className={styles.rateContent}>
              <h4 className={styles.title}>{t("rateAndLeave")}</h4>
              <Rating size={22} />
            </div>
            <div>
              <textarea className={styles.reviewInput} />
              <button className={styles.reviewButton}>
                {t("submitReview")}
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}