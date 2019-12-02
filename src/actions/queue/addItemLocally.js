export const QUEUE_ADD_ITEM_LOCALLY = 'QUEUE_ADD_ITEM_LOCALLY'

export default function addItemLocally(item) {
  return {
    type: QUEUE_ADD_ITEM_LOCALLY,
    item
  }
}