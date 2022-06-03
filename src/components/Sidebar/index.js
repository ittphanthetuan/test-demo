import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ListGroup, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import paths from '../../router/paths';
import WrapperSidebar from './WrapperSidebar';

function Sidebar() {
  const location = useLocation();
  const [isShow, setIsShow] = useState(false)

  const checkIsActive = (path) => {
    if (path === location.pathname)
      return 'active'
    return '';
  }

  const renderSidebar = () => {
    const menus = [
      <ListGroup.Item className={checkIsActive('/')} as={Link} to='/' onClick={toggleIsShow}>
        Home
      </ListGroup.Item>
    ];
    
    paths.forEach(item => {
      if (item.path) {
        menus.push(
          <ListGroup.Item className={checkIsActive(item.path)} as={Link} to={item.path} onClick={toggleIsShow}>
              {item.label}
          </ListGroup.Item>
        )
      } else if (item.children || item.label) {
        menus.push(
          <ListGroup.Item variant="primary">{item.label}</ListGroup.Item>
        )
        item.children && item.children.forEach(child => {
          if (child.path) {
            menus.push(
              <ListGroup.Item className={`child-item ${checkIsActive(child.path)}`} as={Link} to={child.path} onClick={toggleIsShow}>
                  {child.label}
              </ListGroup.Item>
            )
          }
        })
      }
    })
    return <ListGroup>{menus}</ListGroup>;
  }

  const toggleIsShow = () => setIsShow(!isShow)

  return (
    <WrapperSidebar>
      {!isShow && <Button onClick={toggleIsShow}>Toggle</Button>}
      {isShow && renderSidebar()}
    </WrapperSidebar>
  )
}

export default Sidebar;
