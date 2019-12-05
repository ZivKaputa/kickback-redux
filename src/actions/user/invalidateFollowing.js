export const FOLLOWING_INVALIDATE_RESULTS = 'FOLLOWING_INVALIDATE_RESULTS'

export default function invalidateFollowing() {
  return {
    type: FOLLOWING_INVALIDATE_RESULTS,
  }
}