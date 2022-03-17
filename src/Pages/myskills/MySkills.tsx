import React from 'react'
import { Link } from "react-router-dom";
import styles from "./MySkills.module.scss"
import { useDarkmodeContext } from '../../Components/Context/darkmodeContextProvider';
type MySkillsProps = {

}

const MySkills: React.FC<MySkillsProps> = () => {
    const { useDarkmode } = useDarkmodeContext();
    document.title = "My Skills"
    return (
        <div className={useDarkmode ? styles.dark : styles.light}>
            <div>
                <div className={styles.wrapper}>
                    <div className={useDarkmode ? styles.containerdark : styles.containerlight}>
                        <h2 className={useDarkmode ? styles.h2dark : styles.h2light}>Skills </h2>
                        <div className={styles.skills}>
                            <div className={styles.details}>
                                <span>React TypeScript SCSS</span>
                                <span>75%</span>
                            </div>
                            <div className={styles.bar}>
                                <div className={styles.htmlbar} />
                            </div>
                        </div>
                        <div className={styles.skills}>
                            <div className={styles.details}>
                                <span>Unity C#</span>
                                <span>80%</span>
                            </div>
                            <div className={styles.bar}>
                                <div className={styles.cssbar} />
                            </div>
                        </div>
                        <div className={styles.skills}>
                            <div className={styles.details}>
                                <span>React JavaScript CSS</span>
                                <span>60%</span>
                            </div>
                            <div className={styles.bar}>
                                <div className={styles.javascriptbar} />
                            </div>
                        </div>
                    </div>
                    <div>
                        <Link to='/mycv' className={useDarkmode ? styles.buttondark : styles.buttonlight} >Back</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MySkills