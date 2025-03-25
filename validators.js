import { NAV_ITEMS, HOURS_IN_DAY, MIDNIGHT_HOUR, BUTTON_TYPES } from "./constants"

export const isPageValid = (page) => {
  return NAV_ITEMS.some(navItem => navItem.page === page)
}

export const isNavItemValid = (navItem) => {
  return NAV_ITEMS.includes(navItem)
}

export const isButtonTypeValid = (type) => {
  // return BUTTON_TYPES.includes(type)
  return Object.values(BUTTON_TYPES).includes(type)
}

export const isTimelineItemValid = ({ hour }) => {
  return isHourValid(hour)
}

export const validateActivities = (activities) => {
  return activities.every(isActivityValid)
}

export const isActivityValid = ({ id, name, secondsToComplete }) => {
  if(isNull(id)) {
    return true
  }

  return [
    isNotEmptyString(id),
    isNotEmptyString(name),
    isNumber(secondsToComplete)
  ].every(Boolean)

  // return isNotEmptyString(activity)
}

const isNotEmptyString = (value) => {
  return isString(value) && value.length > 0
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

export const isSelectValueValid = (value) => {
  return isNotEmptyString(value) || isNumberOrNull(value)
}

export const isNumberOrNull = (value) => {
  return isNumber(value) || isNull(value)
}

export const isUndefined = (value) => {
  return value === undefined
}

export const isNull = (value) => {
  return value === null
}

export const isNumber = (value) => {
  return typeof value === 'number'
}

const isSelectOptionValid = ({ value, label }) => {
  return (isNumber(value) || isNotEmptyString(value)) && isNotEmptyString(label)
}


const isBetween = (value, start, end) => {
  return value >= start && value <= end
}

const isString = (value) => {
  return typeof value === 'string'
}

