import React from 'react'
import { RouteHandler } from 'react-router'

function getUser() {
  return userStore.getCurrentUser()
}

function getDevices() {
  return deviceStore.getDeviceList()
}

class Main extends React.Component {
  constructor() {
    super()

    this.state = {
      currentUser: getUser(),
      devices: getDevices()
    }
  }

  render() {
    return (
      <div>
        // Add navbar
        <div className="container">
          <RouteHandler {...this.state} />
        </div>
      </div>
    )
  }
}

export default Main