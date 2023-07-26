import React from 'react';
import { Link, Route, Routes, useNavigate } from 'react-router-dom'
import { HomeIcon, RectangleGroupIcon, UserIcon, Cog8ToothIcon, ChartBarIcon, ChartPieIcon, DocumentIcon, CalendarIcon, Bars3Icon } from '@heroicons/react/24/outline'
import { Sidebar, Menu, MenuItem, SubMenu, useProSidebar } from 'react-pro-sidebar'

const SidebarComponent = () => {
    const { collapseSidebar } = useProSidebar();

    const [sidebarShow, setSidebarShow] = React.useState(true);

    const clickSideBar = () => {
        setSidebarShow(!sidebarShow);
    }

    return (
        <>
            <div className='centerItems'>
                <div className='btn-menu' onClick={clickSideBar}>
                    <Bars3Icon />
                </div>
            </div>
            <div id="sidebar" className={`box sidebar ${sidebarShow == true ? 'show' : 'hidden'}`}>

                {/* <button onClick={() => collapseSidebar()}>Collapse</button> */}
                <Sidebar width="100%" rootStyles={{ border: 'none' }}>
                    <Menu>
                        <p className='menu-title'>General</p>
                        <MenuItem icon={<ChartBarIcon />} component={<Link to="/Dashboard" />}> Dashboard </MenuItem>
                        <MenuItem icon={<HomeIcon />} component={<Link to="/Home" />}> Home </MenuItem>
                        <MenuItem icon={<UserIcon />} component={<Link to="/Account" />}> Account </MenuItem>
                        <MenuItem icon={<Cog8ToothIcon />} component={<Link to="/Settings" />}> Settings </MenuItem>
                        <br></br>
                        <br></br>
                        <p className='menu-title'>Extras</p>
                        <SubMenu icon={<ChartPieIcon />} label="Charts">
                            <MenuItem> Pie charts </MenuItem>
                            <MenuItem> Line charts </MenuItem>
                            <MenuItem> Pie charts </MenuItem>
                            <MenuItem> Line charts </MenuItem>
                            <MenuItem> Pie charts </MenuItem>
                            <MenuItem> Line charts </MenuItem>
                        </SubMenu>
                        <MenuItem icon={<DocumentIcon />}> Documentation </MenuItem>
                        <MenuItem icon={<CalendarIcon />}> Calendar </MenuItem>
                    </Menu>
                </Sidebar>
            </div>
        </>
    );
};

export default SidebarComponent;