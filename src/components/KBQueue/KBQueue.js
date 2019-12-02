import React, { Component } from "react"
import PropTypes from 'prop-types'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import KBQueueItem from '../KBQueueItem'
import KBQueueNowPlaying from '../KBQueueNowPlaying'
import './KBQueue.scss'

class KBQueue extends Component {

  constructor(props) {
    super(props);
    this.handleDragEnd = this.handleDragEnd.bind(this)
    this.rootRef = React.createRef()
    this.handleScroll = this.handleScroll.bind(this)
  }

  componentDidMount() {
    if (this.rootRef.current && this.props.scrollPosition) {
      this.rootRef.current.scrollTop = this.props.scrollPosition
    }
  }

  handleScroll() {
    this.props.onScroll(this.rootRef.current.scrollTop)
  }

  handleDragEnd(result) {
    const {destination, source, draggableId } = result
    if (!destination) {
      return;
    }
    if (destination.droppableId === source.droppableId && destination.index === source.index) {
      return;
    }
    this.props.onReorder(source.index, destination.index)
  }

  render() {

    const nowPlaying = (this.props.tracks.length > 0) ? <KBQueueNowPlaying track={this.props.tracks[0]} key={this.props.tracks[0].song_id}/> : <div></div>

    const queueItems = this.props.tracks.slice(1).map((track, index) =>
      <KBQueueItem track={track} key={track.song_id} index={index+1} onDelete={this.props.onDelete}/>
    );

    return (
      <div onScroll={this.handleScroll} ref={this.rootRef} className='kb-queue-list'>
        {nowPlaying}
        <DragDropContext onDragEnd={this.handleDragEnd}>
          <Droppable droppableId='kb-queue-droppable'>
            {(provided) => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                {queueItems}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    )
  }
}

KBQueue.propTypes = {
  onReorder: PropTypes.func,
  onDelete: PropTypes.func,
  tracks: PropTypes.array,
  scrollPosition: PropTypes.number,
  onScroll: PropTypes.func
}

export default KBQueue