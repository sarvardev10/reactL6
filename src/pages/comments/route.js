import Comments from ".";
import { UnorderedListOutlined, ShoppingCartOutlined } from '@ant-design/icons';
export const commentsRoute = [
  {
    key: "/comments",
    Element: Comments,
    label: "Buyurtmalar",
    icon:   UnorderedListOutlined, ShoppingCartOutlined ,
    children: [],
    visible: true,
    access: "main",
  },
];
