const menuLoaded = (newMenu) => {
  return {
    type: 'MENU_LOADED',
    payload: newMenu
  }
};

const courseLoaded = (newCourse) => {
  return {
    type: 'COURSE_LOADED',
    payload: newCourse
  }
};

const menuRequested = () => {
  return {
    type: 'MENU_REQUESTED',
  }
};


const restoServiceFailed = (error) => {
  return {
    type: 'RESTO_QUERY_FAILED',
    failed: error
  }
};

export {
  menuLoaded,
  menuRequested,
  restoServiceFailed
}