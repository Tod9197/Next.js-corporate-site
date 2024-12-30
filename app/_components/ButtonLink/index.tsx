import styles from "./index.module.css";
import Link from "next/link";

type Props = {
  href: string;
  children: React.ReactNode;
};

export default function ButtonLink({ href, children }: Props) {
  return (
    <Link href={href} className={styles.button}>
      {children}
    </Link>
  );
}
