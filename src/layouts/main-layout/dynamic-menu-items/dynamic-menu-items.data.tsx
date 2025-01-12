import {
  UIBadgeIcon,
  UIEventIcon,
  UIForumIcon,
  UIGroupsIcon,
  UIMarketplaceIcon,
  UIMemberIcon,
  UINewsFeedIcon,
  UIOverviewIcon,
  UIQuestIcon,
  UIStreamIcon,
} from "@/assets/ui-icons";
import { ROUTES } from "@/constants/routes.constant";

export const primarySidebarMenuItemsData = [
  {
    _id: 1,
    icon: UINewsFeedIcon,
    name: "NewsFeed",
    route: ROUTES?.HOME,
  },
  {
    _id: 2,
    icon: UIOverviewIcon,
    name: "Overview",
    route: ROUTES?.OVERVIEW,
  },
  {
    _id: 3,
    icon: UIGroupsIcon,
    name: "Groups",
    route: ROUTES?.GROUPS,
  },
  {
    _id: 4,
    icon: UIMemberIcon,
    name: "Members",
    route: ROUTES?.MEMBERS,
  },
  {
    _id: 5,
    icon: UIBadgeIcon,
    name: "Badges",
    route: ROUTES?.BADGES,
  },
  {
    _id: 6,
    icon: UIQuestIcon,
    name: "Quest",
    route: ROUTES?.QUEST,
  },
  {
    _id: 7,
    icon: UIStreamIcon,
    name: "Streams",
    route: ROUTES?.STREAMS,
  },
  {
    _id: 8,
    icon: UIEventIcon,
    name: "Events",
    route: ROUTES?.EVENTS,
  },
  {
    _id: 9,
    icon: UIForumIcon,
    name: "Forums",
    route: ROUTES?.FORUMS,
  },
  {
    _id: 10,
    icon: UIMarketplaceIcon,
    name: "Marketplace",
    route: ROUTES?.MARKETPLACE,
  },
];
