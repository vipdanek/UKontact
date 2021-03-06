import React from "react";

export class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    status: this.props.status
  };
  activateEditMode = () => {
    this.setState({
      editMode: true
    });
  };
  deActivateEditMode = () => {
    this.setState({
      editMode: false
    });
    this.props.updateStatus(this.state.status);
  };
  onStatusChange = e => {
    this.setState({
      status: e.currentTarget.value
    });
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.status !== this.props.status) {
      this.setState({
        status: this.props.status
      });
    }

    // console.log("componentDidUpdate")
  }

  render() {
    return (
      <>
        <div></div>
        {!this.state.editMode && (
          <div>
            <span onDoubleClick={this.activateEditMode}>
              {this.state.status || "----"}
            </span>
          </div>
        )}
        {this.state.editMode && (
          <div>
            <input
              onChange={this.onStatusChange}
              autoFocus={true}
              onBlur={this.deActivateEditMode}
              value={this.props.status}
            />
          </div>
        )}
      </>
    );
  }
}
