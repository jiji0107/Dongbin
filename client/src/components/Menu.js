import React from 'react';
import { NavLink } from 'react-router-dom';
import profile from '../upload/profile.jpg'

const Menu = () => {
    const activeStyle = {
        color: 'blue',
        fontSize: '1.5rem'
    };

    return (
        <div>
            <ul>
           
                <li><NavLink exact to="/" activeStyle={activeStyle}>메인</NavLink></li>
                <li><NavLink exact to="/about" activeStyle={activeStyle}>공연일정</NavLink></li>
                <li><NavLink to="/about/foo" activeStyle={activeStyle}>공지&amp;이벤트</NavLink></li>
                <li><NavLink to="/posts" activeStyle={activeStyle}>문의사항</NavLink></li>
                <li><NavLink to="/mypage" activeStyle={activeStyle}>마이페이지</NavLink></li>
                <li><img src={profile} alt="이미지 없음" width="64" height="64" /></li>
             
            </ul>
            <hr />
        </div>
    );
};

export default Menu;