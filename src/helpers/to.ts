import { LocationDescriptor } from "history";
import { Link } from "react-router-dom";

/**
 * This function is made to fix problems when using materiaul-ui in combination with react-router in Typescript.
 * Example can be seen [here](https://github.com/mui-org/material-ui/issues/7877#issuecomment-407443334).
 * @example
 * <Button {...to("/page/1")} variant="flat">Click Here!</Button>
 * @param to The location you wannt to push to react-router.
 */
// tslint:disable-next-line:no-shadowed-variable
const to = (to: LocationDescriptor) => {
  // tslint:disable-next-line:no-any
  return { to, component: Link as any };
};

export default to;
