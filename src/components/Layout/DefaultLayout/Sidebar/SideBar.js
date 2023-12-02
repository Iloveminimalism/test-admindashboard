import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import LocalParkingOutlinedIcon from '@mui/icons-material/LocalParkingOutlined';
import CarRentalOutlinedIcon from '@mui/icons-material/CarRentalOutlined';

import { useState } from 'react';
import { motion } from 'framer-motion';

import HeaderSideBar from './HeaderSideBar';
import ItemSideBar from './ItemSideBar';

import './SideBar.css';

// const listSideBar = [
//     {
//         id: 1,
//         icon: <HomeOutlinedIcon />,
//         title: 'Dashboard',
//     },
//     {
//         id: 2,
//         icon: <PeopleOutlinedIcon />,
//         title: 'User',
//     },
// ];

function SideBar(props) {
    const [open, setOpen] = useState(true);
    const [isActive, setIsActive] = useState('Dashboard');

    const sideContainerVariants = {
        true: {
            width: '15rem',
        },
        false: {
            transition: {
                delay: 0.6,
            },
            marginLeft: '-8rem',
        },
    };

    const sidebarVariants = {
        true: {},
        false: {
            width: '3.3rem',
            transition: {
                delay: 0.4,
            },
            stiffness: 700,
            damping: 30,
        },
    };

    return (
        <motion.div
            layout
            data-open={open}
            initial={`${open}`}
            animate={`${open}`}
            variants={sideContainerVariants}
            className="admin__sidebar--container"
        >
            <motion.div
                layout
                initial={`${open}`}
                animate={`${open}`}
                variants={sidebarVariants}
                className="admin__sidebar--container-content"
            >
                <HeaderSideBar open={open} setOpen={setOpen} />

                {/* item */}
                <div className="admin__sidebar--container-content-groups">
                    <div className="admin__sidebar--container-content-group">
                        <motion.h3
                            animate={{ opacity: open ? 1 : 0, height: open ? 'auto' : 0 }}
                            className="admin__sidebar--container-content-h3"
                        >
                            ANALYTIC
                        </motion.h3>

                        <ItemSideBar
                            icon={<HomeOutlinedIcon />}
                            title="Dashboard"
                            checkActive={isActive === 'Dashboard' ? 'sidebar-active' : ''}
                            to="/dashboard"
                            isActive={isActive}
                            setIsActive={setIsActive}
                        />

                        <ItemSideBar
                            icon={<PeopleOutlinedIcon />}
                            title="User"
                            checkActive={isActive === 'User' ? 'sidebar-active' : ''}
                            to="/user"
                            isActive={isActive}
                            setIsActive={setIsActive}
                        />

                        {/* <ItemSideBar
                            icon={<CarRentalOutlinedIcon />}
                            title="Car"
                            checkActive={isActive === 'Car' ? 'sidebar-active' : ''}
                            to="/user"
                            isActive={isActive}
                            setIsActive={setIsActive}
                        />

                        <ItemSideBar
                            icon={<LocalParkingOutlinedIcon />}
                            title="Parking"
                            checkActive={isActive === 'Parking' ? 'sidebar-active' : ''}
                            to="/park"
                            isActive={isActive}
                            setIsActive={setIsActive}
                        /> */}
                        {/* {listSideBar.map((item) => {
                            console.log('active ne:', isActive);

                            console.log('title ne:', item.title);

                            return (
                                <ItemSideBar
                                    key={item.id}
                                    icon={item.icon}
                                    title={item.title}
                                    // onClick={(item) => handleItemClick(item.title)}
                                    isActive={isActive}
                                    setIsActive={setIsActive}
                                />
                            );
                        })} */}
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}

export default SideBar;
