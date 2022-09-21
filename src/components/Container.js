import { CONTAINER_WIDTH } from "../utils/utils";

const Container = ({ children, style }) => (
  <div style={{ width: CONTAINER_WIDTH, ...style }}>{children}</div>
);

export default Container;
