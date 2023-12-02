import TocRoundedIcon from '@mui/icons-material/TocRounded';

import { Fragment } from 'react';
import { motion } from 'framer-motion';

function HeaderSideBar({ open, setOpen }) {
    const handleToggle = () => {
        setOpen(!open);
    };

    const profileVariants = {
        true: {
            alignSelf: 'center',
        },
        false: {
            alignSelf: 'flex-start',
            marginTop: '2rem',
            width: '2.5rem',
            marginLeft: '-0.5rem',
        },
    };

    const imgVariants = {
        true: {},
        false: {
            width: '2.5rem',
            height: '2.5rem',
        },
    };
    return (
        <Fragment>
            {/* line icon */}
            <motion.div
                whileHover={{
                    scale: 1.2,
                    rotate: 180,
                    backgroundColor: 'rgba(255, 255, 255, 0.3)',
                    backdropFilter: 'blur(3.5px)',
                    WebkitBackdropFilter: 'blur(3.5px)',
                    border: '1px solid rgba( 255, 255, 255, 0.18 )',
                    cursor: 'pointer',
                    transition: {
                        delay: 0.2,
                        duration: 0.4,
                    },
                }}
                onClick={handleToggle}
                className="admin__sidebar--container-content-lines-icon"
            >
                <TocRoundedIcon />
            </motion.div>

            {/* profile */}
            <motion.div
                layout
                initial={`${open}`}
                animate={`${open}`}
                variants={profileVariants}
                transition={{ duration: 0.4 }}
                whileHover={{
                    backgroundColor: 'rgba(255, 255, 255, 0.3)',
                    boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
                    backdropFilter: 'blur(5.5px)',
                    WebkitBackdropFilter: 'blur(5.5px)',
                    border: '1px solid rgba( 255, 255, 255, 0.18 )',
                    cursor: 'pointer',
                }}
                className="admin__sidebar--container-content-profile"
            >
                <motion.img
                    variants={imgVariants}
                    className="admin__sidebar--container-content-profile-img"
                    src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX1nVIaF9gex42lVW0aQyS-Gnb4ebedvAWY7rPa-CgC9BKTIxdDv_nsCZAqGmwG7g3OYU&usqp=CAU`}
                    alt="profile"
                />
            </motion.div>
        </Fragment>
    );
}

export default HeaderSideBar;
