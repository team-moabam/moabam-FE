export interface Route {
  path: string;
  navBarRequired: boolean;
  element: React.ReactNode;
  pageName?: string;
}
