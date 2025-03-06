import { NAV_ITEMS, HOURS_IN_DAY } from "./constants"

export const isPageValid = (pages) => {
  return Object.keys(NAV_ITEMS).includes(pages)
}

export const isTimelineItemValid = ({ hour }) => {
  return typeof hour === 'number' && hour >= 0 && hour < HOURS_IN_DAY
}