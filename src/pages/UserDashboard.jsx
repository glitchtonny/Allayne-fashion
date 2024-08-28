// import React from 'react';
// import './UserDashboard.css';

// function UserDashboard() {
//   const handleLogout = () => {

//   };

//   return (
//     <div className="container">
//       <div className="sidebar">
//         <ul>
//           <li>
//             <a href="#">
//               <span className="icon">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="24"
//                   height="24"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 >
//                   <path d="M3 9l9-7 9 7v10a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9z" />
//                 </svg>
//               </span>
//               Products
//             </a>
//           </li>
//           <li>
//             <a href="#">
//               <span className="icon">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="24"
//                   height="24"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 >
//                   <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
//                   <circle cx="12" cy="7" r="4" />
//                 </svg>
//               </span>
//               Order
//             </a>
//           </li>
//           <li>
//             <a href="/cartpage">
//               <span className="icon">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="24"
//                   height="24"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 >
//                   <circle cx="9" cy="21" r="1" />
//                   <circle cx="20" cy="21" r="1" />
//                   <path d="M1 1h4l.09.27A5.97 5.97 0 0 1 10 7h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2H3" />
//                 </svg>
//               </span>
//               Cart
//             </a>
//           </li>
//         </ul>
//       </div>
//       <div className="content">
//         <h1>Users Dashboard</h1>
//         <div className="profile">
//           <div className="profile-img">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="64"
//               height="64"
//               viewBox="0 0 24 24"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="2"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               className="feather feather-user"
//             >
//               <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
//               <circle cx="12" cy="7" r="4" />
//             </svg>
//           </div>
//           <div className="profile-details">
//             <div>Name</div>
//             <div>Email</div>
//             <div>phone number</div>
//           </div>
//         </div>
//         <button className="logout-btn" onClick={handleLogout}>
//           LOG OUT
//         </button>
//       </div>
//     </div>
//   );
// }

// export default UserDashboard;









import React, { useState, useEffect } from 'react';
import './UserDashboard.css';

function UserDashboard() {
  const [user, setUser] = useState({});

  useEffect(() => {
    // Simulate fetching user data after login
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  const handleLogout = () => {
    // Clear user data and redirect to login
    localStorage.removeItem('user');
    window.location.href = '/login';
  };

  return (
    <div className="container">
      <div className="sidebar">
        <ul>
          <li>
            <a href="#">
              <span className="icon">
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 9l9-7 9 7v10a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9z" />
                </svg>
              </span>
              Products
            </a>
          </li>
          <li>
            <a href="#">
              <span className="icon">
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </span>
              Order
            </a>
          </li>
          <li>
            <a href="/cartpage">
              <span className="icon">
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="9" cy="21" r="1" />
                  <circle cx="20" cy="21" r="1" />
                  <path d="M1 1h4l.09.27A5.97 5.97 0 0 1 10 7h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2H3" />
                </svg>
                </span>
              Cart
            </a>
          </li>
        </ul>
      </div>
      <div className="content">
        <h1>User Dashboard</h1>
        <div className="profile">
          <div className="profile-img">
          <svg
              xmlns="http://www.w3.org/2000/svg"
              width="64"
              height="64"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-user"
            >
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </div>
          <div className="profile-details">
            <div>Name: {user.username}</div>
            <div>Email: {user.email}</div>
            <div>Phone Number: {user.phone_number}</div>
          </div>
        </div>
        <button className="logout-btn" onClick={handleLogout}>
          LOG OUT
        </button>
      </div>
    </div>
  );
}

export default UserDashboard;
