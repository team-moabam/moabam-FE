import { useLocation, useParams } from 'react-router-dom';
import { routes as routeMap } from '../routes';

const isParameterSegment = (segment: string) => segment[0] === ':';

const isMatchPath = (path: string, target: string) => {
  if (path === target) return true;

  const pathSegments = path.split('/');
  const targetSegments = target.split('/');
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
  const routes = Object.values(routeMap);
  const params = useParams();
  const { pathname, search } = useLocation();

  for (const route of routes) {
    if (isMatchPath(`/${route.path}`, pathname)) {
      return {
        ...route,
        location: pathname,
        params,
        search: parseQueryString(search)
      };
    }
  }

  return { ...routeMap.notFound, location: pathname, params: {}, search: {} };
};

export default useRouteData;
