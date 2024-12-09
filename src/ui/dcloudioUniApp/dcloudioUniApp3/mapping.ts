import animation-view from './animation-view.json'
import audio from './audio.json'
import button from './button.json'
import camera from './camera.json'
import canvas from './canvas.json'
import checkbox-group from './checkbox-group.json'
import checkbox from './checkbox.json'
import cover-image from './cover-image.json'
import cover-view from './cover-view.json'
import form from './form.json'
import icon from './icon.json'
import image from './image.json'
import input from './input.json'
import label from './label.json'
import live-player from './live-player.json'
import live-pusher from './live-pusher.json'
import map from './map.json'
import match-media from './match-media.json'
import movable-area from './movable-area.json'
import movable-view from './movable-view.json'
import navigator from './navigator.json'
import picker-view-column from './picker-view-column.json'
import picker-view from './picker-view.json'
import picker from './picker.json'
import progress from './progress.json'
import radio-group from './radio-group.json'
import radio from './radio.json'
import rich-text from './rich-text.json'
import scroll-view from './scroll-view.json'
import slider from './slider.json'
import swiper from './swiper.json'
import switch from './switch.json'
import text from './text.json'
import textarea from './textarea.json'
import video from './video.json'
import view from './view.json'
import web-view from './web-view.json'

export function getPropsMap() {
  return [
    animation-view,
    audio,
    button,
    camera,
    canvas,
    checkbox-group,
    checkbox,
    cover-image,
    cover-view,
    form,
    icon,
    image,
    input,
    label,
    live-player,
    live-pusher,
    map,
    match-media,
    movable-area,
    movable-view,
    navigator,
    picker-view-column,
    picker-view,
    picker,
    progress,
    radio-group,
    radio,
    rich-text,
    scroll-view,
    slider,
    swiper,
    switch,
    text,
    textarea,
    video,
    view,
    web-view,
  ]
}

export function getComponentsMap() {
  return [
    [animation-view, animation-view.name, `<${animation-view.name}></${animation-view.name}`],
    [audio, audio.name, `<${audio.name}></${audio.name}`],
    [button, button.name, `<${button.name}></${button.name}`],
    [camera, camera.name, `<${camera.name}></${camera.name}`],
    [canvas, canvas.name, `<${canvas.name}></${canvas.name}`],
    [checkbox-group, checkbox-group.name, `<${checkbox-group.name}></${checkbox-group.name}`],
    [checkbox, checkbox.name, `<${checkbox.name}></${checkbox.name}`],
    [cover-image, cover-image.name, `<${cover-image.name}></${cover-image.name}`],
    [cover-view, cover-view.name, `<${cover-view.name}></${cover-view.name}`],
    [form, form.name, `<${form.name}></${form.name}`],
    [icon, icon.name, `<${icon.name}></${icon.name}`],
    [image, image.name, `<${image.name}></${image.name}`],
    [input, input.name, `<${input.name}></${input.name}`],
    [label, label.name, `<${label.name}></${label.name}`],
    [live-player, live-player.name, `<${live-player.name}></${live-player.name}`],
    [live-pusher, live-pusher.name, `<${live-pusher.name}></${live-pusher.name}`],
    [map, map.name, `<${map.name}></${map.name}`],
    [match-media, match-media.name, `<${match-media.name}></${match-media.name}`],
    [movable-area, movable-area.name, `<${movable-area.name}></${movable-area.name}`],
    [movable-view, movable-view.name, `<${movable-view.name}></${movable-view.name}`],
    [navigator, navigator.name, `<${navigator.name}></${navigator.name}`],
    [picker-view-column, picker-view-column.name, `<${picker-view-column.name}></${picker-view-column.name}`],
    [picker-view, picker-view.name, `<${picker-view.name}></${picker-view.name}`],
    [picker, picker.name, `<${picker.name}></${picker.name}`],
    [progress, progress.name, `<${progress.name}></${progress.name}`],
    [radio-group, radio-group.name, `<${radio-group.name}></${radio-group.name}`],
    [radio, radio.name, `<${radio.name}></${radio.name}`],
    [rich-text, rich-text.name, `<${rich-text.name}></${rich-text.name}`],
    [scroll-view, scroll-view.name, `<${scroll-view.name}></${scroll-view.name}`],
    [slider, slider.name, `<${slider.name}></${slider.name}`],
    [swiper, swiper.name, `<${swiper.name}></${swiper.name}`],
    [switch, switch.name, `<${switch.name}></${switch.name}`],
    [text, text.name, `<${text.name}></${text.name}`],
    [textarea, textarea.name, `<${textarea.name}></${textarea.name}`],
    [video, video.name, `<${video.name}></${video.name}`],
    [view, view.name, `<${view.name}></${view.name}`],
    [web-view, web-view.name, `<${web-view.name}></${web-view.name}`],
  ]
}