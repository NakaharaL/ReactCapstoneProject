import { Outlet } from 'react-router-dom';

const Navigation = () => {
    return (
      <div>
        <div>
          <h1>Hi, I'm the navigation bar!</h1>
        </div>
        <Outlet />
      </div>
    )
  }

  export default Navigation