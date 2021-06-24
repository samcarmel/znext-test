import {
  Action,
  applyMiddleware,
  compose,
  createStore,
  getDefaultMiddleware,
  Store,
} from '@reduxjs/toolkit'
import { rootReducer } from './rootReducer'
import { Persistor, persistStore } from 'redux-persist'
import storageSession from 'redux-persist/lib/storage/session'
import { AppState, initalAppState } from './app/appReducer'

const makeStore = (initialState: InitialState) => {
  let store: Store<
    {
      app: AppState
    },
    Action
  > & {
    dispatch: unknown
  } & {
    __PERSISTOR?: Persistor
  }

  const isClient = typeof window !== 'undefined'

  const enhancers = []
  const middleware = [
    ...getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }),
  ]

  if (process.env.NODE_ENV === 'development' && isClient) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__

    if (typeof devToolsExtension === 'function') {
      enhancers.push(devToolsExtension())
    }
  }

  const composedEnhancers = compose(
    applyMiddleware(...middleware),
    ...enhancers
  )

  // add redux-persist in dev move so its easier to build.
  if (process.env.NEXT_PUBLIC_USE_REDUX_PERSIST === 'yes' && isClient) {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const { persistReducer } = require('redux-persist')

    const persistConfig = {
      key: 'root',
      storage: storageSession,
      blacklist: [],
    }

    store = createStore(
      persistReducer(persistConfig, rootReducer),
      initialState,
      composedEnhancers
    )

    store.__PERSISTOR = persistStore(store)
  } else {
    store = createStore(rootReducer, initialState, composedEnhancers)
  }

  return store
}

interface InitialState {
  app: AppState
}

const initialState: InitialState = {
  app: initalAppState,
}

export const store = makeStore(initialState)
