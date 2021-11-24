import React, { Component } from "react";
import { Redirect } from "react-router-dom"
import { connect } from "react-redux"
import { addNote, updateNote } from "../actions"
import "../App.css";

class NoteForm extends Component {
  constructor (props) {
    super(props);
    this.state = {
      note: {
        content : "",
        timestamp: Date.now(), 
        id: props.match.params.id,
      },
      redirectToDefault: false
    }
  }
  
  handleContentChange = (event) => {
    this.setState({ 
      note : { ...this.state.note, 
                  content: event.target.value}
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.note.id === undefined) 
      this.props.addNote(this.state.note);
    else
      this.props.updateNote(this.state.note);

    this.setState({redirectToDefault: true})
  }

  componentDidMount = () => {
    if (this.props.note)
      this.setState({ note: this.props.note })
  }

  render() {
    if (this.state.redirectToDefault) {
      return <Redirect to="/" />;
    }

    return (
          <div className="NoteForm">
          <form onSubmit={this.handleSubmit}>
            <div><label>Task</label></div>
            <div>
              <textarea 
              name="content" 
              value={this.state.note.content}
              onChange={this.handleContentChange}></textarea> 
            </div>
            <div>
             <input type="submit" value="Save Note" />
            </div>
            </form>
          </div>
    );
  }
}
function mapStateToProps (state, props) {
  const id = props.match.params.id || ""
  return {
    notes: state,
    note: state.find( n => n.id === id)
  }
}

function mapDispatchToProps (dispatch) {
  return {
    addNote: (note) => dispatch(addNote(note)),
    updateNote: (note) => dispatch(updateNote(note))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NoteForm);

