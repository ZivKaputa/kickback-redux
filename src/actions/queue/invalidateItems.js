export const QUEUE_INVALIDATE_ITEMS = 'QUEUE_INVALIDATE_ITEMS'

export default function invalidateItems() {
  return {
    type: QUEUE_INVALIDATE_ITEMS,
  }
}