import { FaGithub } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import styles from "./styles.module.scss";

export function SignInButton() {
  const isUserLoggedIn = true;

  return isUserLoggedIn ? (
    <button type="button" className={styles.signInButton}>
      <FaGithub style={{ color: "#04d361" }} />
      Daniel Ribeiro
      <FiX style={{ color: "#737380" }} className={styles.closeIcon} />
    </button>
  ) : (
    <button type="button" className={styles.signInButton}>
      <FaGithub style={{ color: "#eba417" }} />
      Sign In With Github
    </button>
  );
}
