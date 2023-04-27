import {RouteProp} from '@react-navigation/native';
import {NAV} from '_global';
export interface NavigationBasicProps {
  screen?: string | null;
}

export type NavigationBasicType = undefined | NavigationBasicProps;

export type RootNavigationProps = {
  [NAV.LOGIN]: undefined;
  [NAV.HOME]: undefined;
};

export type RootRouteProps<RouteName extends keyof RootNavigationProps> =
  RouteProp<RootNavigationProps, RouteName>;
