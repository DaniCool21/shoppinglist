import Link from "next/link";
import styles from "../styles/Home.module.css";

const NavItem = ({ text, href, active }) => {
  return (
    <Link href={href}>
      <div className={styles.nav__link}>{text}</div>
    </Link>
  );
};

export default NavItem;