import { CustomerServiceOutlined } from '@ant-design/icons';
import Photos from ".";
export const photosRoute = [
  {
    key: "/photos",
    Element: Photos,
    label: "Xizmatlar",
    icon: CustomerServiceOutlined,
    children: [],
    visible: true,
    access: "main",
  },
];
