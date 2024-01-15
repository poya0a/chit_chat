import React from 'react';
import menu from '../../assets/images/icons/menu.svg';

const Menu = () => {
    return (
        <div className='menuWrap'>
            <div className="workSpaceWrap">
                <button className='menuToggleButton'>
                    <img src={menu} alt="MENU" />
                </button>
                <button className='workSpace'>
                    <p>BRIT</p>
                </button>
            </div>
            <div className="addordionMenuWrap">
                
            </div>
        </div>
    );
};

export default Menu;