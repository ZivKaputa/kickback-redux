export const QUEUE_DELETE_ITEM_LOCALLY = 'QUEUE_DELETE_ITEM_LOCALLY'

export default function deleteItemLocally(deleteItemId) {
  return {
    type: QUEUE_DELETE_ITEM_LOCALLY,
    deleteItemId
  }
}