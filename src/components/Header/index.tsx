import Image from "next/image";
import styles from "./header.module.css";
export default function Header() {
  return (
    <div className={styles.header}>
      <div className="logo">
        <Image src={"/pia-dark-logo.png"} width={200} height={50} alt={"Pia"} />
      </div>
    </div>
  );
}
