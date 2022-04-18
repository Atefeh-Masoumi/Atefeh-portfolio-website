import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';

import './Work.scss';
import { useState } from 'react';


const Work = () => {
    const [activeFilter, setactiveFilter] = useState('All')
    const handleWorkFilter=()=>{

    }
    return ( 
        <>
            <h2 className="head-text">My Creative <span> Portfolio </span> <br /></h2>
            <div className="app__work-filter">
            {['UI/UX', 'Web App', 'Mobile App', 'React JS', 'All'].map((item, index) => (
            <div
            key={index}
            onClick={() => handleWorkFilter(item)}
            className={`app__work-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ''}`}
            >
            {item}
          </div>
        ))}
      </div>
        </>
     );
}
 
export default Work;