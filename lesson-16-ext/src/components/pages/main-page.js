import React    from 'react';
import MenuList from '../menu-list';

const MainPage = ({courseId}) => {
  let id = 0;
  if (courseId) {
    id = parseInt(courseId)
  }
  return (
    <MenuList courseId={id}/>
  )
};

export default MainPage;
