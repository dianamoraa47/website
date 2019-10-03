import React from 'react'
class Photo extends React.Component {
    render(){
        return (
        <a href="this.props.photo.url"><img src="this.props.photo.url" alt="" /></a>

        )
    }
}
export default Photo;