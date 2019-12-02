import { QUEUE_INVALIDATE_ITEMS } from '../../actions/queue/invalidateItems.js'
import { QUEUE_RECEIVE_ITEMS } from '../../actions/queue/receiveItems.js'
import { QUEUE_REQUEST_ITEMS } from '../../actions/queue/requestItems.js'
import { QUEUE_ADD_ITEM_LOCALLY } from '../../actions/queue/addItemLocally.js'
import { QUEUE_DELETE_ITEM_LOCALLY } from '../../actions/queue/deleteItemLocally.js'
import { QUEUE_REORDER_ITEMS_LOCALLY } from '../../actions/queue/reorderItemsLocally.js'

const DEFAULT_STATE = {
  isFetching: false,
  didInvalidate: false,
  lastUpdated: 0,
  lastRequestedAt: 0,
  lastSuccesfullyRequestedAt: 0,
  items: []
}

export default function data(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case QUEUE_DELETE_ITEM_LOCALLY:
      let newItemsDelete = Array.from(state.items)
      newItemsDelete.splice(action.deleteItemId, 1)
      return {...state, didInvalidate: true, items: newItemsDelete}
    case QUEUE_REORDER_ITEMS_LOCALLY:
      let newItemsReorder = Array.from(state.items)
      let movedItemReorder = newItemsReorder[action.fromId]
      newItemsReorder.splice(action.fromId, 1)
      newItemsReorder.splice(action.toId, 0, movedItemReorder)
      return {...state, didInvalidate: true, items: newItemsReorder}
    case QUEUE_ADD_ITEM_LOCALLY:
      return {...state, didInvalidate: true, items:[...state.items, action.item]}
    case QUEUE_INVALIDATE_ITEMS:
      return {...state, didInvalidate: true}
    case QUEUE_RECEIVE_ITEMS:
      if (action.requestedAt === state.lastRequestedAt) {
        return {
          ...state,
          didInvalidate: false,
          isFetching: false,
          items: action.items,
          lastUpdated: action.receivedAt,
          lastSuccesfullyRequestedAt: action.requestedAt
        }
      } else {
        return state
      }
    case QUEUE_REQUEST_ITEMS:
      return {
        ...state,
        didInvalidate: false,
        isFetching: false,
        lastRequestedAt: action.requestedAt
      }
    default:
      return state
  }
}