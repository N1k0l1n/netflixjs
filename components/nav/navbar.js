import React, {useState} from 'react'
import Link from "next/link";
import Image from "next/image";
import styles from "./navbar.module.css"
import { useRouter } from 'next/router';

const Navbar = (props) => {

  const [showDropdown, setShowDropdown] = useState(false);
  //const [username, setUsername] = useState("");
  const [didToken, setDidToken] = useState("");
  const router = useRouter();

  const handleOnClickHome = (e) =>{
    e.preventDefault();
    router.push('/')
  }

  const handleOnClickMyList = (e) =>{
    e.preventDefault();
    router.push('/browse/my-list')
  }

  const handleShowDropdown = (e) =>{
    e.preventDefault();
    setShowDropdown(!showDropdown)
  }

  const handleSignout = (e) =>{
    e.preventDefault();
    router.push('/login')
  }

  const {username} = props;

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Link className={styles.logoLink} href="/">
            <div className={styles.logoWrapper}>
              <Image
                src="/static/netflix.svg"
                alt="Netflix logo"
                width={128}
                height={34}
              />
            </div>
        </Link>

        <ul className={styles.navItems}>
          <li className={styles.navItem} onClick={handleOnClickHome}>
            Home
          </li>
          <li className={styles.navItem2} onClick={handleOnClickMyList}>
            My List
          </li>
        </ul>
        <nav className={styles.navContainer}>
          <div>
            <button className={styles.usernameBtn} onClick={handleShowDropdown}>
              <p className={styles.username}>{username}</p>
              {/** Expand more icon */}
              <Image
                src={"/static/expand_more.svg"}
                alt="Expand dropdown"
                width={24}
                height={24}
              />
            </button>

              
            {showDropdown && (
              <div className={styles.navDropdown}>
                <div>
                  <a className={styles.linkName} onClick={handleSignout}>
                    Sign out
                  </a>
                  <div className={styles.lineWrapper}></div>
                </div>
              </div>
            )}
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Navbar