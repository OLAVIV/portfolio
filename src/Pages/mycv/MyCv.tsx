import React from 'react'
import styles from "./MyCv.module.scss"
import {Link} from "react-router-dom";
import { useDarkmodeContext } from '../../Components/Context/darkmodeContextProvider';
type MyCvProps = {

}

const MyCv: React.FC<MyCvProps> = () => {
  const { useDarkmode, setUseDarkmode } = useDarkmodeContext();
  document.title="My CV"
  return (
    <div className={ useDarkmode ? styles.dark : styles.light}>
        {/* <p className={styles.otsikko}>My Portfolio</p> */}
        <p className={useDarkmode ? styles.aboutmedark : styles.aboutmelight}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget scelerisque neque, quis scelerisque erat. Quisque venenatis molestie sapien, dapibus viverra nulla hendrerit eget. Pellentesque egestas ultrices accumsan. Ut ac magna vel ex maximus ultricies. Nulla facilisi. Suspendisse gravida sem eu odio mattis ullamcorper. Curabitur feugiat ipsum vel vulputate ultricies.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget scelerisque neque, quis scelerisque erat. Quisque venenatis molestie sapien, dapibus viverra nulla hendrerit eget. Pellentesque egestas ultrices accumsan. Ut ac magna vel ex maximus ultricies. Nulla facilisi. Suspendisse gravida sem eu odio mattis ullamcorper. Curabitur feugiat ipsum vel vulputate ultricies.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget scelerisque neque, quis scelerisque erat. Quisque venenatis molestie sapien, dapibus viverra nulla hendrerit eget. Pellentesque egestas ultrices accumsan. Ut ac magna vel ex maximus ultricies. Nulla facilisi. Suspendisse gravida sem eu odio mattis ullamcorper. Curabitur feugiat ipsum vel vulputate ultricies.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget scelerisque neque, quis scelerisque erat. Quisque venenatis molestie sapien, dapibus viverra nulla hendrerit eget. Pellentesque egestas ultrices accumsan. Ut ac magna vel ex maximus ultricies. Nulla facilisi. Suspendisse gravida sem eu odio mattis ullamcorper. Curabitur feugiat ipsum vel vulputate ultricies.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget scelerisque neque, quis scelerisque erat. Quisque venenatis molestie sapien, dapibus viverra nulla hendrerit eget. Pellentesque egestas ultrices accumsan. Ut ac magna vel ex maximus ultricies. Nulla facilisi. Suspendisse gravida sem eu odio mattis ullamcorper. Curabitur feugiat ipsum vel vulputate ultricies.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget scelerisque neque, quis scelerisque erat. Quisque venenatis molestie sapien, dapibus viverra nulla hendrerit eget. Pellentesque egestas ultrices accumsan. Ut ac magna vel ex maximus ultricies. Nulla facilisi. Suspendisse gravida sem eu odio mattis ullamcorper. Curabitur feugiat ipsum vel vulputate ultricies.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget scelerisque neque, quis scelerisque erat. Quisque venenatis molestie sapien, dapibus viverra nulla hendrerit eget. Pellentesque egestas ultrices accumsan. Ut ac magna vel ex maximus ultricies. Nulla facilisi. Suspendisse gravida sem eu odio mattis ullamcorper. Curabitur feugiat ipsum vel vulputate ultricies.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget scelerisque neque, quis scelerisque erat. Quisque venenatis molestie sapien, dapibus viverra nulla hendrerit eget. Pellentesque egestas ultrices accumsan. Ut ac magna vel ex maximus ultricies. Nulla facilisi. Suspendisse gravida sem eu odio mattis ullamcorper. Curabitur feugiat ipsum vel vulputate ultricies.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget scelerisque neque, quis scelerisque erat. Quisque venenatis molestie sapien, dapibus viverra nulla hendrerit eget. Pellentesque egestas ultrices accumsan. Ut ac magna vel ex maximus ultricies. Nulla facilisi. Suspendisse gravida sem eu odio mattis ullamcorper. Curabitur feugiat ipsum vel vulputate ultricies.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget scelerisque neque, quis scelerisque erat. Quisque venenatis molestie sapien, dapibus viverra nulla hendrerit eget. Pellentesque egestas ultrices accumsan. Ut ac magna vel ex maximus ultricies. Nulla facilisi. Suspendisse gravida sem eu odio mattis ullamcorper. Curabitur feugiat ipsum vel vulputate ultricies.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget scelerisque neque, quis scelerisque erat. Quisque venenatis molestie sapien, dapibus viverra nulla hendrerit eget. Pellentesque egestas ultrices accumsan. Ut ac magna vel ex maximus ultricies. Nulla facilisi. Suspendisse gravida sem eu odio mattis ullamcorper. Curabitur feugiat ipsum vel vulputate ultricies.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget scelerisque neque, quis scelerisque erat. Quisque venenatis molestie sapien, dapibus viverra nulla hendrerit eget. Pellentesque egestas ultrices accumsan. Ut ac magna vel ex maximus ultricies. Nulla facilisi. Suspendisse gravida sem eu odio mattis ullamcorper. Curabitur feugiat ipsum vel vulputate ultricies.
</p>
        <Link to='/' className= {useDarkmode ? styles.anchordark : styles.anchorlight} >Back</Link>
    </div>  
  )
}

export default MyCv
