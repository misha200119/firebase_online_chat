import * as React$1 from 'react';
import React__default, { HTMLAttributes, RefObject, ComponentProps } from 'react';

declare module 'mdb-react-ui-kit'{
type BaseComponent = Pick<
React.HTMLAttributes<HTMLElement>,
| 'className'
| 'id'
| 'style'
| 'onClick'
| 'onMouseUp'
| 'onMouseMove'
| 'onMouseDown'
| 'onMouseEnter'
| 'onMouseLeave'
| 'onMouseOver'
| 'onMouseOut'
| 'onKeyDown'
| 'onKeyUp'
| 'onTouchStart'
| 'onTouchMove'
| 'onTouchEnd'
| 'onScroll'
| 'onDrop'
> & {
  [rest: string]: any;
};

type backgroundColor =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'danger'
  | 'warning'
  | 'info'
  | 'light'
  | 'dark'
  | 'white'
  | 'transparent';

type textColor =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'info'
  | 'warning'
  | 'danger'
  | 'light'
  | 'dark'
  | 'body'
  | 'muted'
  | 'white'
  | 'black-50'
  | 'white-50';

type size = 'sm' | 'lg';

type placement =
  | 'top'
  | 'auto'
  | 'auto-start'
  | 'auto-end'
  | 'bottom'
  | 'right'
  | 'left'
  | 'top-start'
  | 'top-end'
  | 'bottom-start'
  | 'bottom-end'
  | 'right-start'
  | 'right-end'
  | 'left-start'
  | 'left-end';

interface ContainerProps extends BaseComponent {
  breakpoint?: string;
  fluid?: boolean;
  tag?: React.ComponentProps<any>;
}

const MDBContainer: React$1.FunctionComponent<ContainerProps>;

interface ColumnProps extends BaseComponent {
  center?: boolean;
  end?: boolean;
  lg?: string | number;
  md?: string | number;
  offsetSm?: string | number;
  offsetMd?: string | number;
  offsetLg?: string | number;
  order?: string | number;
  size?: string | number;
  sm?: string | number;
  start?: boolean;
  tag?: React.ComponentProps<any>;
  xl?: string | number;
  xxl?: string | number;
  xs?: string | number;
}

const MDBCol: React$1.FunctionComponent<ColumnProps>;

interface BadgeProps extends BaseComponent {
  color?: backgroundColor;
  dot?: boolean;
  notification?: boolean;
  pill?: boolean;
  ref?: React__default.ForwardedRef<HTMLAllCollection>;
  tag?: React__default.ComponentProps<any>;
}

const MDBBadge: React$1.FunctionComponent<BadgeProps>;

type btnProps = React.ButtonHTMLAttributes<HTMLButtonElement>;
type anchorProps = React.AnchorHTMLAttributes<HTMLAnchorElement>;
type joinedTypes = btnProps & anchorProps;
interface ButtonProps extends Omit<joinedTypes, 'size' | 'color'> {
  active?: boolean;
  block?: boolean;
  color?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'light' | 'dark' | 'muted' | 'white' | 'info' | 'none' | 'link';
  floating?: boolean;
  noRipple?: boolean;
  outline?: boolean;
  rippleUnbound?: boolean;
  rippleColor?: string;
  rippleRadius?: number;
  rippleDuration?: number;
  rippleCentered?: boolean;
  ref?: React.ForwardedRef<HTMLAllCollection>;
  rounded?: boolean;
  size?: 'sm' | 'lg';
  toggle?: boolean;
  target?: string;
  tag?: React.ComponentProps<any>;
  to?: string;
}

const MDBBtn: React$1.FunctionComponent<ButtonProps>;

interface ButtonGroupProps extends BaseComponent {
  ref?: React.ForwardedRef<HTMLAllCollection>;
  size?: size;
  shadow?: '0' | '1' | '2' | '3' | '4' | '5';
  toolbar?: boolean;
  vertical?: boolean;
  tag?: React.ComponentProps<any>;
}

const MDBBtnGroup: React$1.FunctionComponent<ButtonGroupProps>;

interface SpinnerProps extends BaseComponent {
  color?: textColor;
  grow?: boolean;
  size?: size;
  ref?: React.ForwardedRef<HTMLAllCollection>;
  tag?: React.ComponentProps<any>;
}

const MDBSpinner: React$1.FunctionComponent<SpinnerProps>;

interface CardProps extends BaseComponent {
  alignment?: string;
  border?: string;
  background?: backgroundColor;
  shadow?: '0' | '1' | '2' | '3' | '4' | '5';
  ref?: React.ForwardedRef<HTMLAllCollection>;
  tag?: React.ComponentProps<any>;
}

const MDBCard: React$1.FunctionComponent<CardProps>;

interface CardHeaderProps extends BaseComponent {
  border?: string;
  background?: backgroundColor;
  ref?: React.ForwardedRef<HTMLAllCollection>;
  tag?: React.ComponentProps<any>;
}

const MDBCardHeader: React$1.FunctionComponent<CardHeaderProps>;

interface CardSubTitleProps extends BaseComponent {
  tag?: React.ComponentProps<any>;
  ref?: React.ForwardedRef<HTMLAllCollection>;
}

const MDBCardSubTitle: React$1.FunctionComponent<CardSubTitleProps>;

interface CardTitleProps extends BaseComponent {
  tag?: React.ComponentProps<any>;
  ref?: React.ForwardedRef<HTMLAllCollection>;
}

const MDBCardTitle: React$1.FunctionComponent<CardTitleProps>;

interface CardTextProps extends BaseComponent {
  tag?: React.ComponentProps<any>;
  ref?: React.ForwardedRef<HTMLAllCollection>;
}

const MDBCardText: React$1.FunctionComponent<CardTextProps>;

interface CardBodyProps extends BaseComponent {
  tag?: React.ComponentProps<any>;
  ref?: React.ForwardedRef<HTMLAllCollection>;
}

const MDBCardBody: React$1.FunctionComponent<CardBodyProps>;

interface CardFooterProps extends BaseComponent {
  border?: string;
  background?: backgroundColor;
  ref?: React.ForwardedRef<HTMLAllCollection>;
  tag?: React.ComponentProps<any>;
}

const MDBCardFooter: React$1.FunctionComponent<CardFooterProps>;

interface CardImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  position?: string;
  overlay?: boolean;
  fluid?: boolean;
}

const MDBCardImage: React$1.FunctionComponent<CardImageProps>;

interface CardOverlayProps extends BaseComponent {
  tag?: React.ComponentProps<any>;
  ref?: React.ForwardedRef<HTMLAllCollection>;
}

const MDBCardOverlay: React$1.FunctionComponent<CardOverlayProps>;

type CardLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement>;

const MDBCardLink: React$1.FunctionComponent<CardLinkProps>;

interface CardGroupProps extends BaseComponent {
  tag?: React.ComponentProps<any>;
  ref?: React.ForwardedRef<HTMLAllCollection>;
}

const MDBCardGroup: React$1.FunctionComponent<CardGroupProps>;

interface ListGroupProps extends BaseComponent {
  horizontal?: boolean;
  horizontalSize?: string;
  flush?: boolean;
  ref?: React__default.ForwardedRef<HTMLAllCollection>;
  tag?: React__default.ComponentProps<any>;
}

const MDBListGroup: React$1.FunctionComponent<ListGroupProps>;

interface ListGroupItemProps extends BaseComponent {
  action?: boolean;
  color?: backgroundColor;
  disabled?: boolean;
  tag?: React__default.ComponentProps<any>;
}

const MDBListGroupItem: React$1.FunctionComponent<ListGroupItemProps>;

interface TooltipProps extends BaseComponent {
  disableMouseDown?: boolean;
  options?: Record<string, unknown>;
  placement?: placement;
  tag?: React.ComponentProps<any>;
  tooltipTag?: React.ComponentProps<any>;
  title?: React.ReactNode;
  wrapperProps?: Record<string, unknown>;
  wrapperClass?: string;
  onShow?: () => any;
  onHide?: () => any;
}

const MDBTooltip: React$1.FunctionComponent<TooltipProps>;

interface RowProps extends BaseComponent {
  around?: boolean;
  between?: boolean;
  bottom?: boolean;
  center?: boolean;
  end?: boolean;
  evenly?: boolean;
  middle?: boolean;
  start?: boolean;
  tag?: React.ComponentProps<any>;
  top?: boolean;
}

const MDBRow: React$1.FunctionComponent<RowProps>;

type IconProps = {
  animate?: 'beat' | 'fade' | 'beat-fade' | 'bounce' | 'shake' | 'flip' | 'spin' | 'pulse';
  className?: string;
  iconType?: string;
  fab?: boolean;
  far?: boolean;
  fas?: boolean;
  fal?: boolean;
  flag?: string;
  size?: '1x' | '2x' | '3x' | '4x' | '5x' | '6x' | '7x' | '8x' | '9x' | '10x' | '2xs' | 'xs' | 'sm' | 'lg' | 'xl' | '2xl';
  color?: textColor;
  icon?: string;
  border?: boolean;
  rotate?: '90' | '180' | '270' | 'by';
  pull?: 'left' | 'right';
  spin?: boolean;
  list?: boolean;
  fixed?: boolean;
  pulse?: boolean;
  flip?: 'horizontal' | 'vertical' | 'both';
  inverse?: boolean;
  stack?: '1x' | '2x';
  style?: React.CSSProperties;
  [rest: string]: any;
};

const MDBIcon: React$1.FunctionComponent<IconProps>;

type TypographyProps = BaseComponent & {
  blockquote?: boolean;
  color?: textColor;
  listUnStyled?: boolean;
  listInLine?: boolean;
  note?: boolean;
  noteColor?: backgroundColor;
  ref?: React.ForwardedRef<HTMLAllCollection>;
  tag?: React.ComponentProps<any>;
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
};

const MDBTypography: React$1.FunctionComponent<TypographyProps>;

interface BreadcrumbProps extends BaseComponent {
  bold?: boolean;
  tag?: React.ComponentProps<any>;
  color?: textColor;
  uppercase?: boolean;
  ref?: React.Ref<HTMLOListElement>;
}

const MDBBreadcrumb: React$1.FunctionComponent<BreadcrumbProps>;

interface BreadcrumbItemProp extends BaseComponent {
  active?: boolean;
  current?: 'page' | 'step' | 'location';
  ref?: React.Ref<HTMLLIElement>;
}

const MDBBreadcrumbItem: React$1.FunctionComponent<BreadcrumbItemProp>;

interface NavbarProps extends Omit<React.AllHTMLAttributes<HTMLElement>, 'scrolling'> {
  tag?: React.ComponentProps<any>;
  light?: boolean;
  dark?: boolean;
  color?: 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dark' | 'body' | 'muted' | 'white' | 'black-50' | 'white-50';
  expand?: string | boolean;
  bgColor?: 'white' | 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dark';
  fixed?: string;
  sticky?: boolean;
  transparent?: boolean;
  scrollingNavbarOffset?: number;
  scrolling?: boolean;
  ref?: React.Ref<any>;
}

const MDBNavbar: React$1.FunctionComponent<NavbarProps>;

interface NavbarLinkProps extends React.AllHTMLAttributes<HTMLElement> {
  tag?: React.ComponentProps<any>;
  active?: boolean;
  disabled?: boolean;
  ref?: React.Ref<any>;
}

const MDBNavbarLink: React$1.FunctionComponent<NavbarLinkProps>;

interface NavbarBrandProps extends React.AllHTMLAttributes<HTMLElement> {
  tag?: React.ComponentProps<any>;
  ref?: React.Ref<any>;
}

const MDBNavbarBrand: React$1.FunctionComponent<NavbarBrandProps>;

interface NavbarItemProps extends React.AllHTMLAttributes<HTMLElement> {
  active?: boolean;
  text?: boolean;
  tag?: React.ComponentProps<any>;
  ref?: React.Ref<any>;
}

const MDBNavbarItem: React$1.FunctionComponent<NavbarItemProps>;

interface NavbarNavProps extends React.AllHTMLAttributes<HTMLElement> {
  tag?: React.ComponentProps<any>;
  right?: boolean;
  fullWidth?: boolean;
  left?: boolean;
  ref?: React.Ref<any>;
}

const MDBNavbarNav: React$1.FunctionComponent<NavbarNavProps>;

interface NavbarTogglerProps extends React.AllHTMLAttributes<HTMLElement> {
  tag?: React.ComponentProps<any>;
  ref?: React.Ref<any>;
}

const MDBNavbarToggler: React$1.FunctionComponent<NavbarTogglerProps>;

interface FooterProps extends BaseComponent {
  color?: textColor;
  tag?: React.ComponentProps<any>;
  bgColor?: backgroundColor;
  ref?: React.Ref<HTMLDivElement>;
}

const MDBFooter: React$1.FunctionComponent<FooterProps>;

interface PaginationProps extends BaseComponent {
  center?: boolean;
  end?: boolean;
  start?: boolean;
  size?: size;
  circle?: boolean;
  ref?: React.Ref<HTMLUListElement>;
}

const MDBPagination: React$1.FunctionComponent<PaginationProps>;

interface PaginationLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  ref?: React.Ref<HTMLAnchorElement>;
  tag?: React.ComponentProps<any>;
}

const MDBPaginationLink: React$1.FunctionComponent<PaginationLinkProps>;

interface PaginationItemProps extends BaseComponent {
  active?: boolean;
  disabled?: boolean;
  ref?: React.Ref<HTMLLIElement>;
}

const MDBPaginationItem: React$1.FunctionComponent<PaginationItemProps>;

interface TableProps extends Omit<React.TableHTMLAttributes<HTMLTableElement>, 'align'> {
  align?: 'top' | 'middle' | 'bottom';
  borderColor?: textColor;
  color?: backgroundColor;
  bordered?: boolean;
  borderless?: boolean;
  small?: boolean;
  hover?: boolean;
  classNameResponsive?: string;
  striped?: boolean;
  responsive?: string | boolean;
}

const MDBTable: React$1.FunctionComponent<TableProps>;

interface TableHeadProps extends React.HTMLAttributes<HTMLElement> {
  dark?: boolean;
  light?: boolean;
}

const MDBTableHead: React$1.FunctionComponent<TableHeadProps>;

type TableBodyProps = React.HTMLAttributes<HTMLElement>;

const MDBTableBody: React$1.FunctionComponent<TableBodyProps>;

interface ProgressProps extends BaseComponent {
  height?: number | string;
  ref?: React.ForwardedRef<HTMLAllCollection>;
  tag?: React.ComponentProps<any>;
}

const MDBProgress: React$1.FunctionComponent<ProgressProps>;

interface ProgressBarProps extends BaseComponent {
  animated?: boolean;
  bgColor?: backgroundColor;
  ref?: React.ForwardedRef<HTMLAllCollection>;
  striped?: boolean;
  tag?: React.ComponentProps<any>;
  valuemax?: string | number;
  valuemin?: string | number;
  valuenow?: string | number;
  width?: string | number;
  [rest: string]: any;
}

const MDBProgressBar: React$1.FunctionComponent<ProgressBarProps>;

type InputELement = Omit<React__default.InputHTMLAttributes<HTMLInputElement>, 'size'>;
type InputProps = InputELement & {
  contrast?: boolean;
  label?: React__default.ReactNode;
  labelStyle?: React__default.CSSProperties;
  labelClass?: string;
  labelRef?: React__default.RefObject<HTMLLabelElement>;
  inputRef?: React__default.RefObject<HTMLInputElement>;
  readonly?: boolean;
  size?: string;
  wrapperTag?: React__default.ComponentProps<any>;
  wrapperClass?: string;
  wrapperStyle?: React__default.CSSProperties;
};

const MDBInput: React$1.FunctionComponent<InputProps>;

interface InputTemplateProps extends React__default.InputHTMLAttributes<HTMLInputElement> {
  btn?: boolean;
  btnColor?: string;
  disableWrapper?: boolean;
  inputRef?: React__default.MutableRefObject<any>;
  label?: React__default.ReactNode;
  labelClass?: string;
  labelStyle?: React__default.CSSProperties;
  inline?: boolean;
  toggleSwitch?: boolean;
  wrapperTag?: React__default.ComponentProps<any>;
  wrapperClass?: string;
  wrapperStyle?: React__default.CSSProperties;
}

type CheckboxProps = Omit<InputTemplateProps, 'toggleSwitch'>;

const MDBCheckbox: React$1.FunctionComponent<CheckboxProps>;

type RadioProps = Omit<InputTemplateProps, 'toggleSwitch'>;

const MDBRadio: React.FunctionComponent<RadioProps>;

interface CollapseProps extends HTMLAttributes<HTMLElement> {
  collapseRef?: RefObject<HTMLElement>;
  show?: boolean;
  tag?: ComponentProps<any>;
  navbar?: boolean;
  direction?: 'vertical' | 'horizontal';
  onShow?: () => any;
  onHide?: () => any;
}

const MDBCollapse: React$1.FunctionComponent<CollapseProps>;

interface DropdownProps extends BaseComponent {
  animation?: boolean;
  group?: boolean;
  isOpen?: boolean;
  dropup?: boolean;
  dropright?: boolean;
  dropleft?: boolean;
  options?: Record<string, unknown>;
  placement?: placement;
  tag?: React.ComponentProps<any>;
}

const MDBDropdown: React__default.FC<DropdownProps>;

interface DropdownItemProps extends React.LiHTMLAttributes<HTMLLIElement> {
  tag?: React.ComponentProps<any>;
}

const MDBDropdownItem: React$1.FunctionComponent<DropdownItemProps>;

interface DropdownMenuProps extends BaseComponent {
  dark?: boolean;
  responsive?: '' | 'start' | 'end' | 'sm-start' | 'md-start' | 'lg-start' | 'xl-start' | 'xxl-start' | 'sm-end' | 'md-end' | 'lg-end' | 'xl-end' | 'xxl-end';
  tag?: React.ComponentProps<any>;
}

const MDBDropdownMenu: React$1.FunctionComponent<DropdownMenuProps>;

interface DropdownToggleProps extends ButtonProps {
  split?: boolean;
  tag?: React.ComponentProps<any>;
}

const MDBDropdownToggle: React$1.FunctionComponent<DropdownToggleProps>;

interface DropdownLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  disableClass?: boolean;
  tag?: React.ComponentProps<any>;
}

const MDBDropdownLink: React$1.FunctionComponent<DropdownLinkProps>;

interface DropdownDividerProps extends BaseComponent {
  tag?: React.ComponentProps<any>;
}

const MDBDropdownDivider: React$1.FunctionComponent<DropdownDividerProps>;

interface DropdownHeaderProps extends React.AllHTMLAttributes<HTMLHeadingElement> {
  tag?: React.ComponentProps<any>;
}

const MDBDropdownHeader: React$1.FunctionComponent<DropdownHeaderProps>;

interface PopoverProps extends ButtonProps {
  btnChildren?: React.ReactNode;
  btnClassName?: string;
  dismiss?: boolean;
  isOpen?: boolean;
  options?: Record<string, unknown>;
  placement?: placement;
  poperStyle?: React.CSSProperties;
  popperTag?: React.ComponentProps<any>;
  tag?: React.ComponentProps<any>;
  onShow?: () => any;
  onHide?: () => any;
}

const MDBPopover: React$1.FunctionComponent<PopoverProps>;

interface PopoverBodyProps extends BaseComponent {
  tag?: React.ComponentProps<any>;
}

const MDBPopoverBody: React$1.FunctionComponent<PopoverBodyProps>;

interface PopoverHeaderProps extends React.AllHTMLAttributes<HTMLHeadElement> {
  tag?: React.ComponentProps<any>;
}

const MDBPopoverHeader: React$1.FunctionComponent<PopoverHeaderProps>;

interface ModalProps extends BaseComponent {
  animationDirection?: 'top' | 'bottom' | 'right' | 'left';
  appendToBody?: boolean;
  backdrop?: boolean;
  closeOnEsc?: boolean;
  leaveHiddenModal?: boolean;
  modalRef?: React.RefObject<HTMLElement>;
  onHide?: () => void;
  onHidePrevented?: () => any;
  onShow?: () => void;
  show?: boolean;
  setShow?: React.SetStateAction<any>;
  staticBackdrop?: boolean;
  tag?: React.ComponentProps<any>;
}

const MDBModal: React$1.FunctionComponent<ModalProps>;

interface ModalDialogProps extends BaseComponent {
  centered?: boolean;
  size?: 'sm' | 'lg' | 'xl' | 'fullscreen' | 'fullscreen-sm-down' | 'fullscreen-md-down' | 'fullscreen-lg-down' | 'fullscreen-xl-down' | 'fullscreen-xxl-down';
  scrollable?: boolean;
  ref?: React.ForwardedRef<HTMLAllCollection>;
  tag?: React.ComponentProps<any>;
}

const MDBModalDialog: React$1.FunctionComponent<ModalDialogProps>;

interface ModalContentProps extends BaseComponent {
  ref?: React.ForwardedRef<HTMLAllCollection>;
  tag?: React.ComponentProps<any>;
}

const MDBModalContent: React$1.FunctionComponent<ModalContentProps>;

interface ModalHeaderProps extends BaseComponent {
  ref?: React.ForwardedRef<HTMLAllCollection>;
  tag?: React.ComponentProps<any>;
}

const MDBModalHeader: React$1.FunctionComponent<ModalHeaderProps>;

interface ModalTitleProps extends BaseComponent {
  ref?: React.ForwardedRef<HTMLAllCollection>;
  tag?: React.ComponentProps<any>;
}

const MDBModalTitle: React$1.FunctionComponent<ModalTitleProps>;

interface ModalBodyProps extends BaseComponent {
  ref?: React.ForwardedRef<HTMLAllCollection>;
  tag?: React.ComponentProps<any>;
}

const MDBModalBody: React$1.FunctionComponent<ModalBodyProps>;

interface ModalFooterProps extends BaseComponent {
  ref?: React.ForwardedRef<HTMLAllCollection>;
  tag?: React.ComponentProps<any>;
}

const MDBModalFooter: React$1.FunctionComponent<ModalFooterProps>;

interface ScrollspyProps extends BaseComponent {
  container?: Window | React__default.MutableRefObject<any>;
  offset?: number;
}

const MDBScrollspy: React$1.FunctionComponent<ScrollspyProps>;

interface ScrollspyNavLinkProps extends BaseComponent {
  collapsible?: boolean;
  onActivate?: (id?: string) => void;
  subsections?: Array<React__default.MutableRefObject<any>>;
  targetRef: React__default.MutableRefObject<any>;
}

const MDBScrollspyNavLink: React$1.FunctionComponent<ScrollspyNavLinkProps>;

interface ScrollspySubListProps extends BaseComponent {
  collapsible?: Array<React__default.MutableRefObject<any>>;
}

const MDBScrollspySubList: React$1.FunctionComponent<ScrollspySubListProps>;

type SwitchProps = Omit<InputTemplateProps, 'toggleSwitch'>;

const MDBSwitch: React.FunctionComponent<SwitchProps>;

interface RangeProps extends Omit<React__default.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  disableTooltip?: boolean;
  label?: string;
  labelId?: string;
  labelClass?: string;
  step?: string;
  inputRef?: React__default.MutableRefObject<any>;
}

const MDBRange: React__default.FunctionComponent<RangeProps>;

interface FileProps extends Omit<React__default.InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> {
  label?: React__default.ReactNode;
  labelClass?: string;
  labelStyle?: React__default.CSSProperties;
  inputRef?: React__default.MutableRefObject<any>;
  size?: string;
}

const MDBFile: React$1.FunctionComponent<FileProps>;

type InputGroupProps = Omit<React__default.DetailedHTMLProps<React__default.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, 'ref'> & {
  noWrap?: boolean;
  noBorder?: boolean;
  ref?: React__default.ForwardedRef<HTMLAllCollection>;
  size?: string;
  tag?: React__default.ComponentProps<any>;
  textTag?: React__default.ComponentProps<any>;
  textClass?: string;
  textBefore?: React__default.ReactNode | Array<React__default.ReactNode>;
  textAfter?: React__default.ReactNode | Array<React__default.ReactNode>;
  textProps?: Record<string, unknown>;
};

const MDBInputGroup: React$1.FunctionComponent<InputGroupProps>;

interface RippleProps extends React__default.AllHTMLAttributes<HTMLElement> {
  rippleUnbound?: boolean;
  rippleColor?: string;
  rippleRadius?: number;
  rippleDuration?: number;
  rippleCentered?: boolean;
  ref?: React__default.ForwardedRef<any>;
  rippleTag?: React__default.ComponentProps<any>;
}

const MDBRipple: React$1.FunctionComponent<RippleProps>;

type ValidationProps = React__default.FormHTMLAttributes<HTMLFormElement> & {
  isValidated?: boolean;
  ref?: React__default.Ref<any>;
};

const MDBValidation: React$1.FunctionComponent<ValidationProps>;

interface TabsProps extends BaseComponent {
  fill?: boolean;
  justify?: boolean;
  pills?: boolean;
  ref?: React.Ref<any>;
}

const MDBTabs: React$1.FunctionComponent<TabsProps>;

interface TabsItemProps extends React.LiHTMLAttributes<HTMLLIElement> {
  ref?: React.Ref<any>;
}

const MDBTabsItem: React$1.FunctionComponent<TabsItemProps>;

interface TabsLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  active?: boolean;
  color?: 'primary' | 'secondary' | 'danger' | 'success' | 'warning' | 'info' | 'light' | 'dark';
  ref?: React.Ref<any>;
  onShow?: () => any;
  onHide?: () => any;
}

const MDBTabsLink: React$1.FunctionComponent<TabsLinkProps>;

interface TabsContentProps extends BaseComponent {
  tag?: React.ComponentProps<any>;
  ref?: React.Ref<any>;
}

const MDBTabsContent: React$1.FunctionComponent<TabsContentProps>;

interface TabsPaneProps extends BaseComponent {
  show?: boolean;
  tag?: React.ComponentProps<any>;
  ref?: React.Ref<any>;
}

const MDBTabsPane: React$1.FunctionComponent<TabsPaneProps>;

const MDBCarousel: React$1.FunctionComponent<{
  asyncData?: any;
  activeItem?: number;
  className?: string;
  fade?: boolean;
  keyboard?: boolean;
  onSlide?: ()=>any;
  pause?: boolean;
  showControls?: boolean;
  showIndicators?: boolean;
  touch?: boolean;
  tag?: React$1.ComponentProps<any>;
  [rest: string]: any;
}>;

const MDBCarouselInner: React$1.FunctionComponent<{
  className?: string;
  tag?: React$1.ComponentProps<any>;
  [rest: string]: any;
}>;

const MDBCarouselElement: React$1.FunctionComponent<{
  className?: string;
  tag?: React$1.ComponentProps<any>;
  [rest: string]: any;
}>;

const MDBCarouselCaption: React$1.FunctionComponent<{
  className?: string;
  tag?: React$1.ComponentProps<any>;
  [rest: string]: any;
}>;

const MDBCarouselItem: React$1.FunctionComponent<{
  className?: string;
  interval?: number;
  itemId?: number;
  tag?: React$1.ComponentProps<any>;
  [rest: string]: any;
}>;

interface AccordionProps extends BaseComponent {
  alwaysOpen?: boolean;
  flush?: boolean;
  initialActive?: number;
  onChange?: (id: number) => void;
  ref?: React__default.ForwardedRef<HTMLAllCollection>;
  tag?: React__default.ComponentProps<any>;
}

const MDBAccordion: React$1.FunctionComponent<AccordionProps>;

interface AccordionItemProps extends BaseComponent {
  bodyClassName?: string;
  bodyStyle?: React__default.CSSProperties;
  collapseId: number;
  headerClassName?: string;
  headerStyle?: React__default.CSSProperties;
  headerTitle?: React__default.ReactNode;
  ref?: React__default.ForwardedRef<HTMLAllCollection>;
  tag?: React__default.ComponentProps<any>;
}

const MDBAccordionItem: React$1.FunctionComponent<AccordionItemProps>;

type TextAreaElement = Omit<React__default.TextareaHTMLAttributes<HTMLTextAreaElement>, 'size' | 'value' | 'defaultValue'>;
type TextAreaProps = TextAreaElement & {
  contrast?: boolean;
  defaultValue?: string;
  label?: React__default.ReactNode;
  labelStyle?: React__default.CSSProperties;
  labelClass?: string;
  labelRef?: React__default.MutableRefObject<any>;
  inputRef?: React__default.MutableRefObject<any>;
  readonly?: boolean;
  size?: string;
  textarea?: boolean;
  value?: string;
  wrapperTag?: React__default.ComponentProps<any>;
  wrapperClass?: string;
  wrapperStyle?: Record<string, unknown>;
};

const MDBTextArea: React$1.FunctionComponent<TextAreaProps>;

interface ValidationItemProps extends BaseComponent {
  tag?: React__default.ComponentProps<any>;
  invalid?: boolean;
  feedback?: React__default.ReactNode;
  tooltip?: boolean;
}

const MDBValidationItem: React$1.FunctionComponent<ValidationItemProps>;
}
