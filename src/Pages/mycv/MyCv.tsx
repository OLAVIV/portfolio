import React from 'react'
import styles from "./MyCv.module.scss"
import {Link} from "react-router-dom";
import { useDarkmodeContext } from '../../Components/Context/darkmodeContextProvider';
type MyCvProps = {

}

const MyCv: React.FC<MyCvProps> = () => {
  const { useDarkmode } = useDarkmodeContext();
  document.title="My CV"
  return (
    <div className={ useDarkmode ? styles.dark : styles.light}>
        <div className={styles.resume}>
   <div className={styles.resume_left}>
     <div className={styles.resume_profile}>
       <img src="https://appamatix.com/wp-content/uploads/2016/05/Anonymous-FeatPic-1200x900.jpg "alt="profile_pic"/>
     </div>
     <div className={styles.resume_content}>
       <div className={`${styles.class1resume_item} ${styles.class2resume_info}`}>
         <div className={styles.title}>
           <p className={styles.bold}>Olavi Kurki</p>
         </div>
         <ul>
           <li>
             <div className={styles.regular}>
                Developer
             </div>
           </li>
           <li>
             <div className={styles.data}>
               Vantaa, Finland
             </div>
           </li>
           <li>
             <div className={styles.data}>
               +358 0458924300
             </div>
           </li>
           <li>
             <div className={styles.data}>
              olavi.kurki2004@gmail.com
             </div>
           </li>
           <li>
           </li>
         </ul>
       </div>
       <div className={`${styles.class1resume_item} ${styles.class2resume_skills}`}>
         <div className={styles.title}>
           <p className={styles.bold}>skill's</p>
         </div>
         <ul>
           <li>
             <div className={styles.skill_name}>
               HTML
             </div>
             <div className={styles.skill_progress}>
               <span style={{width: "50%"}}></span>
             </div>
             <div className={styles.skill_per}>[Basics]</div>
           </li>
           <li>
             <div className={styles.skill_name}>
               CSS
             </div>
             <div className={styles.skill_progress}>
               <span style={{width: "50%"}}></span>
             </div>
             <div className={styles.skill_per}>[Basics]</div>
           </li>
           <li>
             <div className={styles.skill_name}>
               React
             </div>
             <div className={styles.skill_progress}>
               <span style={{width: "50%"}}></span>
             </div>
             <div className={styles.skill_per}>[Basics]</div>
           </li>
           <li>
             <div className={styles.skill_name}>
               Unity
             </div>
             <div className={styles.skill_progress}>
               <span style={{width: "50%"}}></span>
             </div>
             <div className={styles.skill_per}>[Advanced]</div>
           </li>
           <li>
             <div className={styles.skill_name}>
               TypeScript
             </div>
             <div className={styles.skill_progress}>
               <span style={{width: "50%"}}></span>
             </div>
             <div className={styles.skill_per}>[Basics]</div>
           </li>
           <li>
             <div className={styles.skill_name}>
               JavaScript
             </div>
             <div className={styles.skill_progress}>
               <span style={{width: "50%"}}></span>
             </div>
             <div className={styles.skill_per}>[Basics]</div>
           </li>
         </ul>
       </div>
       <div className={`${styles.class1resume_item} ${styles.class2resume_social}`}>
         <div className={styles.title}>
           <p className={styles.bold}>Social Media</p>
         </div>
         <ul>
         
           <li>
             <div className={styles.icon}>
               <i className="fab fa-twitter-square"></i>
             </div>
             <div className={styles.data}>
               <p className="semi-bold">LinkedIn</p>
               PlaceHolder
             </div>
           </li>
           <li>
             <div className={styles.icon}>
               <i className="fab fa-youtube"></i>
             </div>
             <div className={styles.data}>
               <p className="semi-bold">Unity</p>
               Olavi Kurki
             </div>
           </li>
           <li>
             <div className={styles.icon}>
               <i className="fab fa-youtube"></i>
             </div>
             <div className={styles.data}>
               <p className="semi-bold">GitHub</p>
               <p>OLAVIV</p>
             </div>
           </li>
         </ul>
       </div>
     </div>
  </div>
  <div className={styles.resume_right}>
    <div className={`${styles.class1resume_item} ${styles.class2resume_about}`}>
        <div className={styles.title}>
           <p className={styles.bold}>About Me</p>
         </div>
        <p>Hi, my name is Olavi and I am an information and communications (ICT) student from Vantaa Finland. I am currently studying at Varia Myyrmäki and I've studied for about one and a half years by now.</p>
    </div>
    <div className={`${styles.class1resume_item} ${styles.class2resume_work}`}>
        <div className={styles.title}>
           <p className={styles.bold}>Work Experience</p>
         </div>
        <ul>
            <li>
                <div className={styles.date}>2018</div> 
                <div className={styles.info}>
                     <p className="semi-bold">Schneider Electric</p> 
                </div>
            </li>
            <li>
              <div className={styles.date}>2019</div>
              <div className={styles.info}>
                     <p className="semi-bold">Schneider Electric</p> 
                </div>
            </li>
        </ul>
    </div>
    <div className={`${styles.class1resume_item} ${styles.class2resume_education}`}>
      <div className={styles.title}>
           <p className={styles.bold}>Education</p>
         </div>
      <ul>
            <li>
                <div className={styles.date}>2011 - 2017</div> 
                <div className={styles.info}>
                     <p className="semi-bold">Primary School</p> 
                  <p>I was first sent to Kanniston koulu, and later transferred to Kartanonkosken koulu for 3rd grade, because it was located closer to where i lived.</p>
                </div>
            </li>
            <li>
              <div className={styles.date}>2017 - 2020</div>
              <div className={styles.info}>
                     <p className="semi-bold">Junior High School</p> 
                  <p>Kartanonkosken koulu.</p>
                  <div className={styles.info}></div>
                </div>
            </li>
            <li>
              <div className={styles.date}>2020 - </div>
              <div className={styles.info}>
                     <p className="semi-bold">Vocational School</p> 
                  <p>I study at Varia Myyrmäki.</p>
                  <div className={styles.info}></div>
                </div>
            </li>
        </ul>
    </div>
    <div className={`${styles.class1resume_item} ${styles.class2resume_hobby}`}>
      <div className={styles.title}>
           <p className={styles.bold}>My hobbies</p>
           <p>I am not a part of any official hobby club, but i do play and code in my freetime.</p>
         </div>
       <ul>
         <li><i className="fas fa-book"></i></li>
         <li><i className="fas fa-gamepad"></i></li>
         <li><i className="fas fa-music"></i></li>
         <li><i className="fab fa-pagelines"></i></li>
      </ul>
    </div>
  </div>
</div>
        <Link to='/' className= {useDarkmode ? styles.anchordark : styles.anchorlight} >Back</Link>
    </div>  
  )
}

export default MyCv
