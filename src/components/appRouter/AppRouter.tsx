export const x = 4;
// import React, { FC, memo } from 'react';
// import { useSelector } from 'react-redux';
// import { Navigate, Route, Routes } from 'react-router-dom';
// import { nanoid } from 'nanoid';
// import { selectors } from '../../store/slices/userSlice';
// import { privateRoutes, publicRoutes } from '../../utils/routes';
// import { NotFound } from '../../pages/notFound';
// import {
//   ROOT_PATH,
//   WRONG_PATH,
//   HOME_ROUTE,
// } from '../../utils/constansts';

// export const AppRouter: FC<{}> = memo(() => {
//   const isLoggedIn = useSelector(selectors.getIsLoggedIn);

//   return (
//     isLoggedIn
//       ? (
//         <Routes>
//           <Route path={ROOT_PATH} element={<Navigate to={HOME_ROUTE} replace />} />
//           {privateRoutes.map(({ path, component }) => (
//             <Route
//               path={path}
//               element={component}
//               key={nanoid()}
//             />
//           ))}
//           <Route path={WRONG_PATH} element={<NotFound />} />
//         </Routes>
//       )
//       : (
//         <Routes>
//           <Route path={ROOT_PATH} element={<Navigate to={HOME_ROUTE} replace />} />
//           {publicRoutes.map(({ path, component }) => (
//             <Route
//               path={path}
//               element={component}
//               key={nanoid()}
//             />
//           ))}
//           <Route path={WRONG_PATH} element={<NotFound />} />
//         </Routes>
//       )
//   );
// });
