import { ProfileOutlined } from '@ant-design/icons';
import Users from ".";

export const usersRoute = [
  {
    key: "/users",
    Element: Users,
    label: "Users",
    icon: ProfileOutlined,
    children: [],
    visible: true,
    access: "main",
  },
];
