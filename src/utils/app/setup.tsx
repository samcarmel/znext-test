import { PersistGate } from 'redux-persist/integration/react'
import { store } from '../../redux/store'

export const addPersistGate = (component: React.ReactNode): JSX.Element => {
  if (store.__PERSISTOR) {
    return (
      <PersistGate persistor={store.__PERSISTOR} loading={null}>
        {component}
      </PersistGate>
    )
  } else {
    return <>{component}</>
  }
}
