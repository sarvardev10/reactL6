import { UserOutlined } from '@ant-design/icons';
import Todos from ".";

export const todosRoute = [
  {
    key: "/todos",
    Element: Todos,
    label: "Single ",
    icon: UserOutlined,
    children: [],
    visible: true,
    access: "main",
  },
];
