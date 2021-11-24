import React, { Component } from "react";
import { Link } from "react-router-dom"
import "../App.css";

class Note extends Component {
  constructor (props) {
    super(props);
    this.state = {showDetail : false }
  }

  showDetail = () => {
    console.log("Clicking detail : ",this.state.showDetail);
    this.setState({
      showDetail: !this.state.showDetail
    })
  }

  render() {
    const note = this.props.note;
    return (
            <div className="Note"  >{note.content}
              <div className="NoteControls">
                <a  onClick={() => this.showDetail()}>Detail</a> | 
                <Link to={`/notes/edit/${note.id}`}>Update</Link> |  
                <a  onClick={() => this.props.delete(note.id)}>Delete</a>
              </div>
              {
                this.state.showDetail &&
                <div>
                  <div><b>Id:</b> {note.id}</div>
                  <div><b>Time:</b> {note.timestamp}</div>
                </div>
              }
            </div>
    );
  }
}


export default Note;
