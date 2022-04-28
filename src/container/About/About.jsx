import { motion } from 'framer-motion';
import './About.scss';
import { images } from '../../constants';
import {AppWrap ,MotionWrap} from '../../wrapper';
const abouts =[
  {title:"Frontend Development", description:"Frontend developer with passion for building beautiful and functional web applications", imgUrl:images.about01},
  {title:"UI/UX", description:"I'm Familiar with the latest UI/UX trends and practices, I can create a user-friendly and engaging user experience.", imgUrl:images.about02},
  {title:"React Developer", description:"I have learned react development fundamentally and I have work with this in the last year", imgUrl:images.about04},
  
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
 
export default AppWrap(
  MotionWrap(About, 'app__about'),
  'about',
  'app__whitebg',
);
