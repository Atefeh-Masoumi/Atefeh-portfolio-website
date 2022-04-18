import { motion } from 'framer-motion';
import './About.scss';
import { images } from '../../constants';
import AppWrap from '../../wrapper/AppWrap';
const abouts =[
  {title:"Frontend Development", description:"Frontend developer with passion for building beautiful and functional web applications", imgUrl:images.about01},
  {title:"Web Animation", description:"I Love to implement all kind of animations", imgUrl:images.about02},
  {title:"React Developer", description:"I love developing web appications with React", imgUrl:images.about04},
  
]
const About = () => {
  
    return (
        <>
        <h2 className="head-text">I Know that <span>Good Apps</span> <br />means  <span>Good Business</span></h2>

        <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={about.imgUrl} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>{about.title}</h2>
            <p className="p-text" style={{ marginTop: 10 }}>{about.description}</p>
          </motion.div>
        ))}
      </div>

        </>
      );
}
 
export default AppWrap (About,'about');
