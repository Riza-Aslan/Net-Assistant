import { create } from 'zustand'
import { useEffect } from 'react'

interface HAState {
  entity_id: string
  state: string
  attributes: Record<string, any>
}

interface HAStore {
  states: HAState[]
  lastUpdated: number
  fetchStates: () => Promise<void>
}

export const useHAStore = create<HAStore>()((set) => ({
  states: [],
  lastUpdated: 0,
  fetchStates: async () => {
    try {
      const res = await fetch('http://localhost:8099/api/v1/ha/states') // Try relative in production
      if (res.ok) {
        const data = await res.json()
        set({ states: data, lastUpdated: Date.now() })
      }
    } catch (e) {
      console.error('Failed to fetch HA states:', e)
    }
  }
}))

export function useHAPoller(intervalMs = 5000) {
  const fetchStates = useHAStore((s: HAStore) => s.fetchStates)

  useEffect(() => {
    fetchStates()
    const timer = setInterval(fetchStates, intervalMs)
    return () => clearInterval(timer)
  }, [fetchStates, intervalMs])
}

export function useHAEntity(entityId?: string): HAState | undefined {
  return useHAStore((s: HAStore) => s.states.find(x => x.entity_id === entityId))
}
