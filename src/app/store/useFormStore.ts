import { create } from 'zustand'
import { FormSchema } from '@/validators/FormValidator'
import { z } from 'zod'
import { persist } from 'zustand/middleware'
import { STORAGE_KEYS } from '@/constants/form'

type FormData = z.infer<typeof FormSchema>

interface FormStore {
  data: FormData
  setAll: (values: FormData) => void
  updateField: (field: keyof FormData, value: FormData[keyof FormData]) => void
  resetForm: () => void
}

const initialState: FormData = {
  name: '',
  email: '',
  phone: '',
  position: '',
  description: ''
}

export const useFormStore = create<FormStore>()(
  persist(
    (set) => ({
      data: initialState,
      setAll: (values) => set({ data: values }),
      updateField: (field, value) =>
        set((state) => ({
          data: { ...state.data, [field]: value }
        })),
      resetForm: () => set({ data: initialState })
    }),
    {
      name: STORAGE_KEYS.FORM_DATA
    }
  )
)
