import React, { Component } from "react";
import { connect } from "react-redux"
import { deleteNote } from "../actions"
import Note from "./Note"
import "../App.css";

class Notes extends Component {
	render () {
		return (
			<div className="App">
				<div>
					{
						this.props.notes.map ((note) =>
							<Note note={note} key={note.id} delete={this.props.deleteNote}/>
						)
					}
				</div>
			</div>
		);
	}
}

function mapStateToProps (state, props) {
	console.log ("Notes.js", state)
	return {
		notes: state
	}
}

function mapDispatchToProps (dispatch) {
	return {
		deleteNote: (id) => dispatch (deleteNote (id)),
	}
}

export default connect (
	mapStateToProps,
	mapDispatchToProps
) (Notes);
