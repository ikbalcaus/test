import { Link } from "react-router-dom";
import styles from "./UPUserDataPage.module.css";
import { FaRegHeart } from "react-icons/fa";
import { GiDeliveryDrone } from "react-icons/gi";
import { useTranslation } from "react-i18next";

export default function UPUserDataPage() {
  const { t } = useTranslation();

  return (
    <div className={styles.content}>
      <div className={styles.buttonsSection}>
        <div>
          <Link to="/profile/favorites">
            <button className={styles.button}>
              <FaRegHeart />
            </button>
          </Link>
          <div className={styles.buttonText}>{t("favorites")}</div>
        </div>
        <div>
          <Link to="/profile/my-orders">
            <button className={styles.button}>
              <GiDeliveryDrone />
            </button>
          </Link>
          <div className={styles.buttonText}>{t("myOrders")}</div>
        </div>
      </div>
      <div className={styles.dataSection}>
        <div className={styles.data}>
          <span>{t("full_name")}</span>
          <input type="text" className={styles.input} disabled />
        </div>
        <div className={styles.data}>
          <span>Email address:</span>
          <input type="text" className={styles.input} disabled />
        </div>
        <div className={styles.data}>
          <span>{t("city")}</span>
          <input type="text" className={styles.input} disabled />
        </div>
        <div className={styles.data}>
          <span>Zip code:</span>
          <input type="text" className={styles.input} disabled />
        </div>
        <div className={styles.data}>
          <span>{t("address")}</span>
          <input type="text" className={styles.input} disabled />
        </div>
      </div>
    </div>
  );
}