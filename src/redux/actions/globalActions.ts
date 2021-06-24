/**
 * Actions used in more than one reducer
 */
import { createAction } from '@reduxjs/toolkit'

export const resetStateAction = createAction('global/resetState')
