// Icons — minimal stroke-based SVG icons for Espumatex
const Icon = ({ d, size = 18, sw = 1.6, fill, ...rest }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={fill || "none"} stroke="currentColor" strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round" {...rest}>
    <path d={d} />
  </svg>
);

const IconSearch = (p) => <Icon {...p} d="M11 4a7 7 0 1 1 0 14 7 7 0 0 1 0-14zm9 16-4.35-4.35" />;
const IconCart = (p) => <Icon {...p} d="M3 4h2l2.5 11h11l2-8h-13M9 20a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm9 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />;
const IconUser = (p) => <Icon {...p} d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm-7 9a7 7 0 0 1 14 0" />;
const IconHeart = (p) => <Icon {...p} d="M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.5-7 10-7 10z" />;
const IconMenu = (p) => <Icon {...p} d="M4 6h16M4 12h16M4 18h16" />;
const IconClose = (p) => <Icon {...p} d="M6 6l12 12M18 6L6 18" />;
const IconChevDown = (p) => <Icon {...p} d="M6 9l6 6 6-6" />;
const IconChevRight = (p) => <Icon {...p} d="M9 6l6 6-6 6" />;
const IconChevLeft = (p) => <Icon {...p} d="M15 6l-6 6 6 6" />;
const IconPlus = (p) => <Icon {...p} d="M12 5v14M5 12h14" />;
const IconMinus = (p) => <Icon {...p} d="M5 12h14" />;
const IconCheck = (p) => <Icon {...p} d="M5 13l4 4L19 7" />;
const IconFilter = (p) => <Icon {...p} d="M3 5h18M6 12h12M10 19h4" />;
const IconGrid = (p) => <Icon {...p} d="M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z" />;
const IconRuler = (p) => <Icon {...p} d="M3 17 17 3l4 4L7 21l-4-4zM7 13l2 2M11 9l2 2M15 5l2 2" />;
const IconTruck = (p) => <Icon {...p} d="M3 7h11v9H3zM14 11h4l3 3v2h-7M7 19a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm10 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />;
const IconShield = (p) => <Icon {...p} d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6l-8-3z" />;
const IconBox = (p) => <Icon {...p} d="M3 7l9-4 9 4v10l-9 4-9-4V7zM3 7l9 4 9-4M12 11v10" />;
const IconScissors = (p) => <Icon {...p} d="M6 6a2 2 0 1 1 4 0 2 2 0 0 1-4 0zM6 18a2 2 0 1 1 4 0 2 2 0 0 1-4 0zM8 8l12 12M8 16l12-12" />;
const IconStar = (p) => <Icon {...p} d="m12 3 2.6 5.5 6 .9-4.4 4.2 1 6-5.2-2.8-5.2 2.8 1-6L3.4 9.4l6-.9L12 3z" />;
const IconArrowRight = (p) => <Icon {...p} d="M5 12h14M13 6l6 6-6 6" />;
const IconLayers = (p) => <Icon {...p} d="m12 3 9 5-9 5-9-5 9-5zM3 13l9 5 9-5M3 18l9 5 9-5" />;
const IconBolt = (p) => <Icon {...p} d="M13 2 4 14h6l-1 8 9-12h-6l1-8z" />;

window.IconSearch = IconSearch;
window.IconCart = IconCart;
window.IconUser = IconUser;
window.IconHeart = IconHeart;
window.IconMenu = IconMenu;
window.IconClose = IconClose;
window.IconChevDown = IconChevDown;
window.IconChevRight = IconChevRight;
window.IconChevLeft = IconChevLeft;
window.IconPlus = IconPlus;
window.IconMinus = IconMinus;
window.IconCheck = IconCheck;
window.IconFilter = IconFilter;
window.IconGrid = IconGrid;
window.IconRuler = IconRuler;
window.IconTruck = IconTruck;
window.IconShield = IconShield;
window.IconBox = IconBox;
window.IconScissors = IconScissors;
window.IconStar = IconStar;
window.IconArrowRight = IconArrowRight;
window.IconLayers = IconLayers;
window.IconBolt = IconBolt;
