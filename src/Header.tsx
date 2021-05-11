import React, { useState, useEffect } from "react";
import getUser from "./services/getUser";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import makeStyles from "@material-ui/styles/makeStyles/makeStyles";

const useStyles = makeStyles({
  avatarUrl: {
    height: "20rem",
    width: "20rem",
    borderRadius: "50%",
    marginLeft: "auto",
    marginRight: "auto",
    display: "block",
    "@media only screen and (min-width: 720px)": {
      marginTop: "2rem",
    },
  },
  headerContainer: {
    paddingTop: "1rem",
  },
  headerCopy: {
    paddingLeft: "2rem",
    paddingRight: "2rem",
  },
  hireableWrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  hireableIcon: {
    color: "black",
    display: "inline-block",
    alignSelf: "center",
    marginLeft: 8,
  },
  about: { marginTop: "0.5rem", marginBottom: "0.5rem" },
  company: {
    textDecoration: "none",
    color: "black",
    marginTop: "0.5rem",
    marginBottom: "0.5rem",
  },
});

type User = {
  avatarUrl: string;
  name: string;
  isHireable: boolean;
  bio: string;
  company: string;
};

const Header: React.FC = () => {
  const [user, setUser] = useState<User>();

  useEffect(() => {
    getUser().then((info: User) => setUser(info));
  }, []);

  const styles = useStyles();

  return (
    <section className={styles.headerContainer}>
      <img src={user?.avatarUrl} alt="me" className={styles.avatarUrl} />
      <div className={styles.headerCopy}>
        <h4>{user?.name}</h4>
        <div className={styles.hireableWrapper}>
          hirable:{" "}
          {user?.isHireable ? (
            <CheckCircleOutlineIcon className={styles.hireableIcon} />
          ) : (
            <HighlightOffIcon className={styles.hireableIcon} />
          )}
        </div>
        <p className={styles.about}>about me: {user?.bio}</p>
        <p className={styles.about}>
          company:{" "}
          <a
            className={styles.company}
            href={user?.company}
            target="_blank"
            rel="noopener noreferrer"
          >
            {user?.company}
          </a>
        </p>
      </div>
    </section>
  );
};
export default Header;
