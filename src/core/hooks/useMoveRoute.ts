import { useLocation, useNavigate } from 'react-router-dom';
import { routes, RouteNames, ParamNames, PARAM_NAMES } from '../routes';

type Parameters = Partial<Record<ParamNames, string | number>>;

const isValidParamName = (paramName: string): paramName is ParamNames =>
  PARAM_NAMES.some((name) => name === paramName);

const parseNextLocation = ({
  currentPath,
  nextPath,
  params
}: {
  currentPath: string;
  nextPath: string;
  params: Parameters;
}): string => {
  const currentPathSegments = currentPath.split('/');
  const nextPathSegments = nextPath.split('/');

  let isSamePath = true;

  // 새로운 경로를 생성하는 reduce 함수
  return nextPathSegments.reduce((newPath, nextSeg, index) => {
    const currentSeg = currentPathSegments[index];

    if (nextSeg === currentSeg) return `${newPath}/${nextSeg}`;
    if (nextSeg[0] === ':') {
      const paramName = nextSeg.substring(1);
      const parameter = isValidParamName(paramName) && params[paramName];
      const segment = parameter || (isSamePath && currentSeg);

      if (!segment) {
        throw new Error(`To navigate the route, put '${paramName}' in params.`);
      }

      return `${newPath}/${segment}`;
    }

    isSamePath = false;
    return `${newPath}/${nextSeg}`;
  }, '');
};

const useMoveRoute = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const moveTo = (nextRoute: RouteNames, params: Parameters = {}) => {
    const nextLocation = parseNextLocation({
      currentPath: pathname.substring(1),
      nextPath: routes[nextRoute].path,
      params
    });
    navigate(nextLocation);
  };

  return moveTo;
};

export default useMoveRoute;
