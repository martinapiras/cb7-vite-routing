import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import styles from "./DefaultLayout.module.scss";

const DefaultLayout = ({ children }) => {
  return (
    <div className={styles.DefaultLayout}>
      <Header />
      <div className={`${styles.content} col-12`}>
        {children}
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default DefaultLayout;
