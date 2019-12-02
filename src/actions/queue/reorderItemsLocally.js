export const QUEUE_REORDER_ITEMS_LOCALLY = 'QUEUE_REORDER_ITEMS_LOCALLY'

export default function reorderItemsLocally(fromId, toId) {
  return {
    type: QUEUE_REORDER_ITEMS_LOCALLY,
    fromId,
    toId
  }
}