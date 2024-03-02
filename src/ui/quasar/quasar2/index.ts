import { componentsReducer, propsReducer } from '../../utils'
import QAjaxBar from './QAjaxBar.json'
import QAvatar from './QAvatar.json'
import QBadge from './QBadge.json'
import QBanner from './QBanner.json'
import QBar from './QBar.json'
import QBreadcrumbs from './QBreadcrumbs.json'
import QBtn from './QBtn.json'
import QBtnDropdown from './QBtnDropdown.json'
import QBtnGroup from './QBtnGroup.json'
import QBtnToggle from './QBtnToggle.json'
import QCard from './QCard.json'
import QCarousel from './QCarousel.json'
import QCheckbox from './QCheckbox.json'
import QChip from './QChip.json'
import QCircularProgress from './QCircularProgress.json'
import QColor from './QColor.json'
import QDate from './QDate.json'
import QDialog from './QDialog.json'
import QDrawer from './QDrawer.json'
import QEditor from './QEditor.json'
import QExpansionItem from './QExpansionItem.json'
import QFab from './QFab.json'
import QField from './QField.json'
import QFile from './QFile.json'
import QFooter from './QFooter.json'
import QForm from './QForm.json'
import QHeader from './QHeader.json'
import QIcon from './QIcon.json'
import QImg from './QImg.json'
import QInfiniteScroll from './QInfiniteScroll.json'
import QInnerLoading from './QInnerLoading.json'
import QInput from './QInput.json'
import QIntersection from './QIntersection.json'
import QItem from './QItem.json'
import QKnob from './QKnob.json'
import QLayout from './QLayout.json'
import QLinearProgress from './QLinearProgress.json'
import QMarkupTable from './QMarkupTable.json'
import QMenu from './QMenu.json'
import QNoSsr from './QNoSsr.json'
import QOptionGroup from './QOptionGroup.json'
import QPage from './QPage.json'
import QPageScroller from './QPageScroller.json'
import QPageSticky from './QPageSticky.json'
import QPagination from './QPagination.json'
import QParallax from './QParallax.json'
import QPopupEdit from './QPopupEdit.json'
import QPopupProxy from './QPopupProxy.json'
import QPullToRefresh from './QPullToRefresh.json'
import QRadio from './QRadio.json'
import QRange from './QRange.json'
import QRating from './QRating.json'
import QResizeObserver from './QResizeObserver.json'
import QResponsive from './QResponsive.json'
import QScrollArea from './QScrollArea.json'
import QScrollObserver from './QScrollObserver.json'
import QSelect from './QSelect.json'
import QSeparator from './QSeparator.json'
import QSkeleton from './QSkeleton.json'
import QSlideItem from './QSlideItem.json'
import QSlideTransition from './QSlideTransition.json'
import QSlider from './QSlider.json'
import QSpace from './QSpace.json'
import QSpinner from './QSpinner.json'
import QSplitter from './QSplitter.json'
import QStepper from './QStepper.json'
import QTabPanels from './QTabPanels.json'
import QTable from './QTable.json'
import QTabs from './QTabs.json'
import QTime from './QTime.json'
import QTimeline from './QTimeline.json'
import QToggle from './QToggle.json'
import QToolbar from './QToolbar.json'
import QTooltip from './QTooltip.json'
import QTree from './QTree.json'
import QUploader from './QUploader.json'
import QVideo from './QVideo.json'
import QVirtualScroll from './QVirtualScroll.json'

export function quasar2() {
  const map: any = [
    QAjaxBar,
    QAvatar,
    QBadge,
    QBanner,
    QBar,
    QBreadcrumbs,
    QBtn,
    QBtnDropdown,
    QBtnGroup,
    QBtnToggle,
    QCard,
    QCarousel,
    QCheckbox,
    QChip,
    QCircularProgress,
    QColor,
    QDate,
    QDialog,
    QDrawer,
    QEditor,
    QExpansionItem,
    QFab,
    QField,
    QFile,
    QFooter,
    QForm,
    QHeader,
    QIcon,
    QImg,
    QInfiniteScroll,
    QInnerLoading,
    QInput,
    QIntersection,
    QItem,
    QKnob,
    QLayout,
    QLinearProgress,
    QMarkupTable,
    QMenu,
    QNoSsr,
    QOptionGroup,
    QPage,
    QPageScroller,
    QPageSticky,
    QPagination,
    QParallax,
    QPopupEdit,
    QPopupProxy,
    QPullToRefresh,
    QRadio,
    QRange,
    QRating,
    QResizeObserver,
    QResponsive,
    QScrollArea,
    QScrollObserver,
    QSelect,
    QSeparator,
    QSkeleton,
    QSlideItem,
    QSlideTransition,
    QSlider,
    QSpace,
    QSpinner,
    QSplitter,
    QStepper,
    QTabPanels,
    QTable,
    QTabs,
    QTime,
    QTimeline,
    QToggle,
    QToolbar,
    QTooltip,
    QTree,
    QUploader,
    QVideo,
    QVirtualScroll,
  ]

  return propsReducer('quasar', map, 'q')
}

export function quasar2Components() {
  const map = [
    [QAjaxBar, QAjaxBar.name, '<q-ajax-bar></q-ajax-bar>'],
    [QAvatar, QAvatar.name, '<q-avatar></q-avatar>'],
    [QBadge, QBadge.name, '<q-badge></q-badge>'],
    [QBanner, QBanner.name, '<q-banner></q-banner>'],
    [QBar, QBar.name, '<q-bar></q-bar>'],
    [QBreadcrumbs, QBreadcrumbs.name, '<q-breadcrumbs></q-breadcrumbs>'],
    [QBtn, QBtn.name, '<q-btn></q-btn>'],
    [QBtnDropdown, QBtnDropdown.name, '<q-btn-dropdown></q-btn-dropdown>'],
    [QBtnGroup, QBtnGroup.name, '<q-btn-group></q-btn-group>'],
    [QBtnToggle, QBtnToggle.name, '<q-btn-toggle></q-btn-toggle>'],
    [QCard, QCard.name, '<q-card></q-card>'],
    [QCarousel, QCarousel.name, '<q-carousel></q-carousel>'],
    [QCheckbox, QCheckbox.name, '<q-checkbox></q-checkbox>'],
    [QChip, QChip.name, '<q-chip></q-chip>'],
    [QCircularProgress, QCircularProgress.name, '<q-circular-progress></q-circular-progress>'],
    [QColor, QColor.name, '<q-color></q-color>'],
    [QDate, QDate.name, '<q-date></q-date>'],
    [QDialog, QDialog.name, '<q-dialog></q-dialog>'],
    [QDrawer, QDrawer.name, '<q-drawer></q-drawer>'],
    [QEditor, QEditor.name, '<q-editor></q-editor>'],
    [QExpansionItem, QExpansionItem.name, '<q-expansion-item></q-expansion-item>'],
    [QFab, QFab.name, '<q-fab></q-fab>'],
    [QField, QField.name, '<q-field></q-field>'],
    [QFile, QFile.name, '<q-file></q-file>'],
    [QFooter, QFooter.name, '<q-footer></q-footer>'],
    [QForm, QForm.name, '<q-form></q-form>'],
    [QHeader, QHeader.name, '<q-header></q-header>'],
    [QIcon, QIcon.name, '<q-icon></q-icon>'],
    [QImg, QImg.name, '<q-img></q-img>'],
    [QInfiniteScroll, QInfiniteScroll.name, '<q-infinite-scroll></q-infinite-scroll>'],
    [QInnerLoading, QInnerLoading.name, '<q-inner-loading></q-inner-loading>'],
    [QInput, QInput.name, '<q-input></q-input>'],
    [QIntersection, QIntersection.name, '<q-intersection></q-intersection>'],
    [QItem, QItem.name, '<q-item></q-item>'],
    [QKnob, QKnob.name, '<q-knob></q-knob>'],
    [QLayout, QLayout.name, '<q-layout></q-layout>'],
    [QLinearProgress, QLinearProgress.name, '<q-linear-progress></q-linear-progress>'],
    [QMarkupTable, QMarkupTable.name, '<q-markup-table></q-markup-table>'],
    [QMenu, QMenu.name, '<q-menu></q-menu>'],
    [QNoSsr, QNoSsr.name, '<q-no-ssr></q-no-ssr>'],
    [QOptionGroup, QOptionGroup.name, '<q-option-group></q-option-group>'],
    [QPage, QPage.name, '<q-page></q-page>'],
    [QPageScroller, QPageScroller.name, '<q-page-scroller></q-page-scroller>'],
    [QPageSticky, QPageSticky.name, '<q-page-sticky></q-page-sticky>'],
    [QPagination, QPagination.name, '<q-pagination></q-pagination>'],
    [QParallax, QParallax.name, '<q-parallax></q-parallax>'],
    [QPopupEdit, QPopupEdit.name, '<q-popup-edit></q-popup-edit>'],
    [QPopupProxy, QPopupProxy.name, '<q-popup-proxy></q-popup-proxy>'],
    [QPullToRefresh, QPullToRefresh.name, '<q-pull-to-refresh></q-pull-to-refresh>'],
    [QRadio, QRadio.name, '<q-radio></q-radio>'],
    [QRange, QRange.name, '<q-range></q-range>'],
    [QRating, QRating.name, '<q-rating></q-rating>'],
    [QResizeObserver, QResizeObserver.name, '<q-resize-observer></q-resize-observer>'],
    [QResponsive, QResponsive.name, '<q-responsive></q-responsive>'],
    [QScrollArea, QScrollArea.name, '<q-scroll-area></q-scroll-area>'],
    [QScrollObserver, QScrollObserver.name, '<q-scroll-observer></q-scroll-observer>'],
    [QSelect, QSelect.name, '<q-select></q-select>'],
    [QSeparator, QSeparator.name, '<q-separator></q-separator>'],
    [QSkeleton, QSkeleton.name, '<q-skeleton></q-skeleton>'],
    [QSlideItem, QSlideItem.name, '<q-slide-item></q-slide-item>'],
    [QSlideTransition, QSlideTransition.name, '<q-slide-transition></q-slide-transition>'],
    [QSlider, QSlider.name, '<q-slider></q-slider>'],
    [QSpace, QSpace.name, '<q-space></q-space>'],
    [QSpinner, QSpinner.name, '<q-spinner></q-spinner>'],
    [QSplitter, QSplitter.name, '<q-splitter></q-splitter>'],
    [QStepper, QStepper.name, '<q-stepper></q-stepper>'],
    [QTabPanels, QTabPanels.name, '<q-tab-panels></q-tab-panels>'],
    [QTable, QTable.name, '<q-table></q-table>'],
    [QTabs, QTabs.name, '<q-tabs></q-tabs>'],
    [QTime, QTime.name, '<q-time></q-time>'],
    [QTimeline, QTimeline.name, '<q-timeline></q-timeline>'],
    [QToggle, QToggle.name, '<q-toggle></q-toggle>'],
    [QToolbar, QToolbar.name, '<q-toolbar></q-toolbar>'],
    [QTooltip, QTooltip.name, '<q-tooltip></q-tooltip>'],
    [QTree, QTree.name, '<q-tree></q-tree>'],
    [QUploader, QUploader.name, '<q-uploader></q-uploader>'],
    [QVideo, QVideo.name, '<q-video></q-video>'],
    [QVirtualScroll, QVirtualScroll.name, '<q-virtual-scroll></q-virtual-scroll>'],
  ]
  return componentsReducer(map, true, 'q', 'quasar')
}
