import { connect } from "react-redux";
import {
  addMessageDialogActionCreator,
  updateNewMessageActionCreator
} from "../redux";
import { Dialogs } from "../components/Dialogs/Dialogs";
import { withAuthRedirect } from "../components/HOC/withAuthRedirect";
import { compose } from "redux";

const mapStateToProps = state => ({
  dialogsPage: state.dialogsPage,
  sideBar: state.sideBar
});

const mapDispatchToProps = dispatch => ({
  sendMessage: newMessageBody => {
    dispatch(addMessageDialogActionCreator(newMessageBody));
  }
});
export const DialogsContainer = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs);
 