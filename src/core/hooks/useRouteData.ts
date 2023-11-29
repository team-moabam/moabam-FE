import { useLocation, useParams } from 'react-router-dom';
import { publicRoutes, privateRoutes, notFoundRoute } from '@/core/routes';

const isParameterSegment = (segment: string) => segment[0] === ':';

const isCurrentPath = (path: string, currentPath: string) => {
  if (path === currentPath) return true;

  const pathSegments = path.split('/');
  const targetSegments = currentPath.split('/');
  if (pathSegments.length !== targetSegments.length) return false;

  return pathSegments.every(
    (pathSegment, index) =>
      pathSegment === targetSegments[index] || isParameterSegment(pathSegment)
  );
};

const parseQueryString = (queryString: string) => {
  if (!queryString) return {};
  return queryString
    .substring(1)
    .split('&')
    .reduce((queryObj, queryItem) => {
      const [key, value] = queryItem.split('=');
      return { ...queryObj, [key]: value };
    }, {});
};

const useRouteData = () => {
  const params = useParams();
  const { pathname, search } = useLocation();

  for (const route of Object.values(privateRoutes)) {
    if (isCurrentPath(`/${route.path}`, pathname)) {
      return {
        ...route,
        location: pathname,
        params,
        search: parseQueryString(search),
        authRequired: true
      };
    }
  }

  for (const route of Object.values(publicRoutes)) {
    if (isCurrentPath(`/join/${route.path}`, pathname)) {
      return {
        ...route,
        location: pathname,
        params,
        search: parseQueryString(search),
        authRequired: false
      };
    }
  }

  return {
    ...notFoundRoute,
    location: pathname,
    params: {},
    search: {},
    authRequired: false
  };
};

export default useRouteData;
