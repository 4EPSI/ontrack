import { NAV_ITEMS, HOURS_IN_DAY, MIDNIGHT_HOUR } from "./constants"

export const isPageValid = (pages) => {
  return Object.keys(NAV_ITEMS).includes(pages)
}

export const isTimelineItemValid = ({ hour }) => {
  return isHourValid(hour)
}

export const isHourValid = (hour) => {
  return isNumber(hour) && isBetween(hour, MIDNIGHT_HOUR, HOURS_IN_DAY - 1)
}

export const validateTimelineItems = (timelineItems) => {
  return timelineItems.every(isTimelineItemValid)
}

export const validateSelectOptions = (options) => {
  return options.every(isSelectOptionValid)
}


export const isUndefinedOrNull = (value) => {
  return isUndefined(value) || isNull(value)
}

export const isNumberOrNull = (value) => {
  return isNumber(value) || isNull(value)
}

const isSelectOptionValid = ({ value, label }) => {
  return isNumber(value) && isString(label)
}


const isBetween = (value, start, end) => {
  return value >= start && value <= end
}

const isNumber = (value) => {
  return typeof value === 'number'
}

const isString = (value) => {
  return typeof value === 'string'
}

const isNull = (value) => {
  return value === null
}

const isUndefined = (value) => {
  return value === undefined
}