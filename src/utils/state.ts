import { noop } from './utils'
import { CommonGestureState, Coordinates, State, DistanceAngle } from '../types'

export function getInitialState(): State {
  // common initial state for all gestures
  const initialCommon: CommonGestureState = {
    _active: false,
    _blocked: false,
    _intentional: [false, false],
    _movement: [0, 0],
    event: undefined,
    // currentTarget: undefined,
    // pointerId: undefined,
    values: [0, 0],
    delta: [0, 0],
    movement: [0, 0],
    offset: [0, 0],
    direction: [0, 0],
    initial: [0, 0],
    previous: [0, 0],
    first: false,
    last: false,
    active: false,
    timeStamp: undefined,
    startTime: undefined,
    elapsedTime: 0,
    cancel: noop,
    canceled: false,
    memo: undefined,
    args: undefined,
  }

  // initial state for coordinates-based gestures
  const initialCoordinates = { axis: undefined, xy: [0, 0], vxvy: [0, 0], velocity: 0, distance: 0 } as Coordinates

  // initial state for distance and angle-based gestures (pinch)
  const initialDistanceAngle = { da: [0, 0], vdva: [0, 0], origin: undefined, turns: 0 } as DistanceAngle

  // initial state object (used by the gesture controller)
  return {
    shared: {
      hovering: false,
      scrolling: false,
      wheeling: false,
      dragging: false,
      moving: false,
      pinching: false,
      touches: 0,
      buttons: 0,
      down: false,
      shiftKey: false,
      altKey: false,
      metaKey: false,
      ctrlKey: false,
    },
    drag: {
      ...initialCommon,
      ...initialCoordinates,
      _isClick: true,
      _delayedEvent: false,
      click: false,
      swipe: [0, 0],
    },
    pinch: { ...initialCommon, ...initialDistanceAngle },
    wheel: { ...initialCommon, ...initialCoordinates },
    move: { ...initialCommon, ...initialCoordinates },
    scroll: { ...initialCommon, ...initialCoordinates },
  }
}
