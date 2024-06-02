import { useState } from "react";
import styles from "./UPFavoritesPage.module.css";
import { useTranslation } from "react-i18next";
import Card from "../../../components/Card/Card";

export default function UPFavoritesPage() {
  const [orders, setOrders] = useState([]);
  const { t } = useTranslation();

  return (
    <>
      {orders.length === 0 && <div className={styles.text}>{t("noFavProducts")}</div>}
      {orders.length > 0 && <div className={styles.content}>
        {orders.map((item: any) => (
          <Card />
        ))}
      </div>}
    </>
  );
}
