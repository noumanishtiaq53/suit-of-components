import {
  UIChatIcon,
  UINotificationsIcon,
  UISentimentSatisfiedAltIcon,
  UIStorefrontIcon,
} from "@/assets/ui-icons";
import { ROUTES } from "@/constants/routes.constant";

export const primaryMenuItemsData = [
  {
    _id: 1,
    name: "Home",
    route: ROUTES?.HOME,
  },
  {
    _id: 2,
    name: "Careers",
    route: ROUTES?.CAREER,
  },
  {
    _id: 3,
    name: "Faqs",
    route: ROUTES?.FAQ,
  },
];

export const onlyIconMenuItemsData = [
  {
    _id: 1,
    icon: UIStorefrontIcon,
    route: ROUTES?.HOME,
  },
  {
    _id: 2,
    icon: UIChatIcon,
    route: ROUTES?.CAREER,
  },
  {
    _id: 3,
    icon: UISentimentSatisfiedAltIcon,
    route: ROUTES?.FAQ,
  },
  {
    _id: 4,
    icon: UINotificationsIcon,
    route: ROUTES?.FAQ,
  },
];

