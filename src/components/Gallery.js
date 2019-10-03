import React from 'react'
import Photo from './Photo'
class Gallery extends React.Component{
  constructor(props){
    super(props)
    this.state ={
      photo:[]
    }
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(response => response.json())
    .then(response => {
      this.setState({
        photo: response.slice(0,5)
      })
    })
    }
  render(){
    return 	(
    <section>
    <header>
      <h3>Gallery</h3>
      <p>Amazing</p>
    </header>
    <div className="content">
      <div class="gallery">
        {
          this.state.photo.map(photo =>{
            return <photo key = {photo.id} photo={photo}/>
          })
        }
      </div>
    </div>
  </section>
  )
  }
}

export default Gallery;
