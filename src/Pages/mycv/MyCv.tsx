import React from 'react'
import styles from "./MyCv.module.scss"
import { Link } from "react-router-dom";
import { useDarkmodeContext } from '../../Components/Context/darkmodeContextProvider';
type MyCvProps = {

}

const MyCv: React.FC<MyCvProps> = () => {
  const { useDarkmode } = useDarkmodeContext();
  document.title = "My CV"
  return (
    <div className={useDarkmode ? styles.dark : styles.light}>
      <div className={useDarkmode ? styles.mod1dark : styles.mod1light}>
        CV
      </div>
      <div className={useDarkmode ? styles.mod3dark : styles.mod3light}>
        <div>Hi, my name is Olavi and I am an information and
          communications (ICT) student from Vantaa Finland. I am
          currently studying at Varia Myyrmäki.</div>
      </div>
      <div className={useDarkmode ? styles.mod2dark : styles.mod2light}>
        <div className="rounded" />
      </div>
      <div className={useDarkmode ? styles.mod3dark : styles.mod3light}>
        <div>
          I have some work experience from 2018 and 2019, <br />
          I was completing my primary school work education at Schneider Electric<br />
          The company I was working for  was centered around tech and software.
        </div>
      </div>
      <div className={useDarkmode ? styles.mod2dark : styles.mod2light}>
        <div className="rounded" />
      </div>
      <div className={useDarkmode ? styles.mod3dark : styles.mod3light}>
        <div>
          Vantaa, Finland 📍<br />
          +358 0458924300 📞<br />
          olavi.kurki2004@gmail.com<br />
        </div>
      </div>
      <div className={useDarkmode ? styles.mod2dark : styles.mod2light}>
        <div className="rounded" />
      </div>
      <div className={useDarkmode ? styles.mod3dark : styles.mod3light}>
        <div>
          I am not a part of any official hobby club, <br />but i do play, excerise and code in my freetime.
        </div>
      </div>
      <div className={useDarkmode ? styles.mod2dark : styles.mod2light}>
        <div className="rounded" />
      </div>
      <div className={useDarkmode ? styles.mod3dark : styles.mod3light}>
        <div>
          <Link to='/myskills' className={useDarkmode ? styles.anchordark : styles.anchorlight} >My Skills</Link>
          Skillbar only visible in desktop and tablet mode.
        </div>
      </div>
      <div className={useDarkmode ? styles.mod2dark : styles.mod2light}>
        <div className="rounded" />
      </div>
      <div>
        <Link to='/' className={useDarkmode ? styles.anchordark : styles.anchorlight} >Back</Link>
      </div>
      <div>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        <div className={styles.iconbar}>
          <a href="https://www.facebook.com/profile.php?id=100014648943769" target="_blank" rel="noreferrer" className="facebook"><i className="fa fa-facebook" /></a><br />
          <a href="https://twitter.com/kurki_olavi" target="_blank" rel="noreferrer" className="twitter"><i className="fa fa-twitter" /></a><br />
          <a href="https://www.linkedin.com/in/olavi-kurki-090ab2234/" target="_blank" rel="noreferrer" className="linkedin"><i className="fa fa-linkedin" /></a><br />
        </div>
      </div>
    </div>

  )
}

export default MyCv
