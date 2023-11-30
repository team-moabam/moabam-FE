import { NavigateOptions, useLocation, useNavigate } from 'react-router-dom';
import {
  publicRoutes,
  privateRoutes,
  PublicRouteNames,
  PrivateRouteNames,
  ParamNames,
  PARAM_NAMES,
  PUBLIC_ROUTES
} from '@/core/routes';

type Parameters = Partial<Record<ParamNames, string | number>>;
type RouteNames = PrivateRouteNames | PublicRouteNames;

const isValidParamName = (paramName: string): paramName is ParamNames =>
  PARAM_NAMES.some((name) => name === paramName);

/* 
  현재 주소, 이동할 주소, params 객체을 받아서
  url에 존재하는 기존의 parameter 값을 참조하여 이동할 주소를 반환하는 함수
*/
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

  const moveTo = (
    nextRoute: RouteNames,
    params: Parameters = {},
    options?: NavigateOptions
  ) => {
    const nextLocation = parseNextLocation({
      currentPath: pathname.substring(1),
      nextPath: { ...publicRoutes, ...privateRoutes }[nextRoute].path,
      params
    });
    navigate(nextLocation, options);
  };
  return moveTo;
};

export default useMoveRoute;
