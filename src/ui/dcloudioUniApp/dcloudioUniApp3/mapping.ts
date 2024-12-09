import animationView from './animation-view.json'
import audio from './audio.json'
import button from './button.json'
import camera from './camera.json'
import canvas from './canvas.json'
import checkboxGroup from './checkbox-group.json'
import checkbox from './checkbox.json'
import coverImage from './cover-image.json'
import coverView from './cover-view.json'
import form from './form.json'
import icon from './icon.json'
import image from './image.json'
import input from './input.json'
import label from './label.json'
import livePlayer from './live-player.json'
import livePusher from './live-pusher.json'
import map from './map.json'
import matchMedia from './match-media.json'
import movableArea from './movable-area.json'
import movableView from './movable-view.json'
import navigator from './navigator.json'
import pickerViewColumn from './picker-view-column.json'
import pickerView from './picker-view.json'
import picker from './picker.json'
import progress from './progress.json'
import radioGroup from './radio-group.json'
import radio from './radio.json'
import richText from './rich-text.json'
import scrollView from './scroll-view.json'
import slider from './slider.json'
import swiper from './swiper.json'
import Switch from './switch.json'
import text from './text.json'
import textarea from './textarea.json'
import video from './video.json'
import view from './view.json'
import webView from './web-view.json'

export function getPropsMap() {
  return [
    animationView,
    audio,
    button,
    camera,
    canvas,
    checkboxGroup,
    checkbox,
    coverImage,
    coverView,
    form,
    icon,
    image,
    input,
    label,
    livePlayer,
    livePusher,
    map,
    matchMedia,
    movableArea,
    movableView,
    navigator,
    pickerViewColumn,
    pickerView,
    picker,
    progress,
    radioGroup,
    radio,
    richText,
    scrollView,
    slider,
    swiper,
    Switch,
    text,
    textarea,
    video,
    view,
    webView,
  ]
}

export function getComponentsMap() {
  return [
    [animationView, animationView.name, `<${animationView.name}></${animationView.name}`],
    [audio, audio.name, `<${audio.name}></${audio.name}`],
    [button, button.name, `<${button.name}></${button.name}`],
    [camera, camera.name, `<${camera.name}></${camera.name}`],
    [canvas, canvas.name, `<${canvas.name}></${canvas.name}`],
    [checkboxGroup, checkboxGroup.name, `<${checkboxGroup.name}></${checkboxGroup.name}`],
    [checkbox, checkbox.name, `<${checkbox.name}></${checkbox.name}`],
    [coverImage, coverImage.name, `<${coverImage.name}></${coverImage.name}`],
    [coverView, coverView.name, `<${coverView.name}></${coverView.name}`],
    [form, form.name, `<${form.name}></${form.name}`],
    [icon, icon.name, `<${icon.name}></${icon.name}`],
    [image, image.name, `<${image.name}></${image.name}`],
    [input, input.name, `<${input.name}></${input.name}`],
    [label, label.name, `<${label.name}></${label.name}`],
    [livePlayer, livePlayer.name, `<${livePlayer.name}></${livePlayer.name}`],
    [livePusher, livePusher.name, `<${livePusher.name}></${livePusher.name}`],
    [map, map.name, `<${map.name}></${map.name}`],
    [matchMedia, matchMedia.name, `<${matchMedia.name}></${matchMedia.name}`],
    [movableArea, movableArea.name, `<${movableArea.name}></${movableArea.name}`],
    [movableView, movableView.name, `<${movableView.name}></${movableView.name}`],
    [navigator, navigator.name, `<${navigator.name}></${navigator.name}`],
    [pickerViewColumn, pickerViewColumn.name, `<${pickerViewColumn.name}></${pickerViewColumn.name}`],
    [pickerView, pickerView.name, `<${pickerView.name}></${pickerView.name}`],
    [picker, picker.name, `<${picker.name}></${picker.name}`],
    [progress, progress.name, `<${progress.name}></${progress.name}`],
    [radioGroup, radioGroup.name, `<${radioGroup.name}></${radioGroup.name}`],
    [radio, radio.name, `<${radio.name}></${radio.name}`],
    [richText, richText.name, `<${richText.name}></${richText.name}`],
    [scrollView, scrollView.name, `<${scrollView.name}></${scrollView.name}`],
    [slider, slider.name, `<${slider.name}></${slider.name}`],
    [swiper, swiper.name, `<${swiper.name}></${swiper.name}`],
    [Switch, Switch.name, `<${Switch.name}></${Switch.name}`],
    [text, text.name, `<${text.name}></${text.name}`],
    [textarea, textarea.name, `<${textarea.name}></${textarea.name}`],
    [video, video.name, `<${video.name}></${video.name}`],
    [view, view.name, `<${view.name}></${view.name}`],
    [webView, webView.name, `<${webView.name}></${webView.name}`],
  ]
}
