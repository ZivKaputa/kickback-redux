import React, { Component } from 'react'
import { Draggable } from 'react-beautiful-dnd'
import PropTypes from 'prop-types'
import { MDBIcon } from "mdbreact"
import './KBQueueItem.scss'

const DEFAULT_ALBUM_IMAGE = "http://cdn.last.fm/flatness/responsive/2/noimage/default_album_300_g4.png"

class KBQueueItem extends Component {

  render() {
    return (
      <Draggable draggableId={this.props.track.song_id.toString()} index={this.props.index}>
        {(provided, snapshot) => {

          let draggingClass = snapshot.isDragging ? 'kb-queue-item-container-dragging' : ''

          return (
            <div
              {...provided.draggableProps}
              ref={provided.innerRef}
              className='kb-queue-item'
            >
              <div className={'kb-queue-item-container ' + draggingClass}>
                <div className='kb-queue-item-image-container'>
                  <img className='kb-queue-item-image' src={this.props.track.album_image || DEFAULT_ALBUM_IMAGE}/>
                </div>
                <div className='kb-queue-item-info-container'>
                  <div className='kb-queue-item-info-pad'/>
                  <div className='kb-queue-item-name'>
                    {this.props.track.name}
                  </div>
                  <div className='kb-queue-item-details'>
                    {this.props.track.artists.join(", ").substring(0,50)} • {this.props.track.album.substring(0,50)}
                  </div>
                  <div className='kb-queue-item-info-pad'/>
                </div>
                {this.props.isAdmin ? (
                  <div {...provided.dragHandleProps} className='kb-queue-item-drag-handle'>
                    <MDBIcon icon="grip-lines"/>
                  </div>
                ) : null}
                {this.props.isAdmin ? (
                  <div className='kb-queue-item-delete' onClick={() => this.props.onDelete(this.props.index)}>
                    <MDBIcon icon="minus-circle"/>
                  </div>
                ) : null}
              </div>
            </div>
          )
        }}
      </Draggable>
    )
  }

}

KBQueueItem.propTypes = {
  track: PropTypes.object,
  index: PropTypes.number,
  isAdmin: PropTypes.bool
}

export default KBQueueItem