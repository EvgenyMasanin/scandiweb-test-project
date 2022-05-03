import { ChildProps } from "@apollo/client/react/hoc";

export type GQLDataProp<T extends object> = ChildProps<unknown, T>['data']
