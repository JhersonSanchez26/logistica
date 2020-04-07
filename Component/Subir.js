import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import * as firebase from 'firebase'

firebase.initializeApp({
    apiKey: "AIzaSyClQ0As7KrGM4KnJWiUxhf2m0YiLhWMRxQ",
    authDomain: "appsena01-1c5be.firebaseapp.com",
    databaseURL: "https://appsena01-1c5be.firebaseio.com",
    projectId: "appsena01-1c5be",
    storageBucket: "appsena01-1c5be.appspot.com",
    messagingSenderId: "781368865870",
    appId: "1:781368865870:web:48153757fdf0b2ad0f3f1f"
})
   export default class FileUpload extends Component {
  constructor () {
    super()
    this.state = {
      uploadValue: 0
    }
  }
  handleOnChange (e) {
    const file = event.target.files[0]
    const storageRef = firebase.storage().ref(`Maestra/${file.name}`)
    const task = storageRef.put(file)
    task.on('state_changed', (snapshot) => {
      let percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
      this.setState({
        uploadValue: percentage
      })
    }, (error) => {
      console.error(error.message)
    }, () => {
      // Upload complete
      this.setState({
        picture: task.snapshot.downloadURL
      })
    })
  }
  render () {
    return (
      <div>
        <progress value={this.state.uploadValue} max='100'>
          {this.state.uploadValue} %
        </progress>
        <br />
        <input type='file' onChange={this.handleOnChange.bind(this)}/>
        <br />
        <img width='90' src={this.state.picture} />
      </div>
    )
  }
}
ReactDOM.render(<FileUpload />, document.getElementById('root'))