export const CHAT_INVALIDATE_RESULTS = 'CHAT_INVALIDATE_RESULTS'

export default function invalidateChat() {
  return {
    type: CHAT_INVALIDATE_RESULTS,
  }
}