import { NAV_ITEMS, HOURS_IN_DAY, MIDNIGHT_HOUR } from "./constants"

export const isPageValid = (pages) => {
  return Object.keys(NAV_ITEMS).includes(pages)
}

export const isTimelineItemValid = ({ hour }) => {
  return typeof hour === 'number' && hour >= MIDNIGHT_HOUR && hour < HOURS_IN_DAY
}