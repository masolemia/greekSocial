import React from "react";
import {sendMessageActionCreator, updateMessageActionCreator} from "../../redux/state";
import DialogueItem from "./DialogueItem/DialogueItem";
import classes from "./Dialogues.module.css";
import Message from "./Message/Message";

const Dialogues = (props) => {
  let newMessage = React.createRef();
  let sendMessage = () => {
    props.dispatch(sendMessageActionCreator());
  };

  let onChangeMessage = () => {
    let text = newMessage.current.value;
    props.dispatch(updateMessageActionCreator(text));
  };

  return (
    <div className={classes.dialoguesPage}>
      <section className={classes.dialogues}>
        {props.dialoguesState.dialoguesData.map((chat) => (
          <DialogueItem name={chat.name} id={chat.id} key={chat.id} />
        ))}
      </section>
      <section className={classes.messages}>
        {props.dialoguesState.messagesData.map((message) => (
          <Message message={message.message} id={message.id} sender={message.sender} key={message.id} />
        ))}
        <textarea
          ref={newMessage}
          value={props.dialoguesState.newMessageText}
          onChange={onChangeMessage}
          placeholder="Enter your message"
        ></textarea>
        <button onClick={sendMessage}>Send message</button>
      </section>
    </div>
  );
};

export default Dialogues;
