import { useRoutes } from 'react-router-dom';
import paths from './paths';

function Router() {

  const getRouters = () => {
    const routers = []
    paths.forEach(item => {
      if (item.path) {
        routers.push({
          path: item.path,
          element: item.element
        })
      } else if (item.children) {
        item.children.forEach(child => {
          if (child.path) {
            routers.push({
              path: child.path,
              element: child.element
            })
          }
        })
      }
    })
    return routers;
  }

  return useRoutes(getRouters())
}

export default Router;
