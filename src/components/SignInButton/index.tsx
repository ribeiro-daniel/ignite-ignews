import { FaGithub } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import styles from "./styles.module.scss";

import { signIn, signOut, useSession } from "next-auth/react";

export function SignInButton() {
  const { data: session } = useSession();

  return session ? (
    <button
      type="button"
      className={styles.signInButton}
      onClick={() => signOut()}
    >
      <FaGithub style={{ color: "#04d361" }} />
      {session.user.name}
      <FiX style={{ color: "#737380" }} className={styles.closeIcon} />
    </button>
  ) : (
    <button
      type="button"
      className={styles.signInButton}
      onClick={() => signIn("github")}
    >
      <FaGithub style={{ color: "#eba417" }} />
      Sign In With Github
    </button>
  );
}
