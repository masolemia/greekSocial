const ADD_POST = "ADD_POST";
const UPDATE_POST = "UPDATE_POST";
const SEND_MESSAGE = "SEND_MESSAGE";
const UPDATE_MESSAGE = "UPDATE_MESSAGE";

let store = {
  _state: {
    profilePage: {
      postsData: [
        {id: 1, message: "Счастье в свободе, а свобода в смелости.", likes: 5, author: "Перикл"},
        {id: 2, message: "Каждая слеза учит смертных правде. ", likes: 8, author: "Платон"},
        {
          id: 3,
          message: "Интеллект состоит не только в знаниях, но и в способности применять знания на практике.",
          likes: 10,
          author: "Аристотель",
        },
      ],
      newPostText: "It-kam",
    },

    dialoguesPage: {
      dialoguesData: [
        {id: 1, name: "Sasha"},
        {id: 2, name: "Liza"},
        {id: 3, name: "Anton"},
        {id: 4, name: "Katya"},
        {id: 5, name: "Timur"},
      ],

      messagesData: [
        {id: 1, message: "Hi", sender: "someone"},
        {id: 2, message: "How are you?", sender: "me"},
        {id: 3, message: "Cool", sender: "someone"},
        {id: 4, message: "You?", sender: "me"},
        {id: 5, message: "Bye!", sender: "someone"},
      ],

      newMessageText: "write something",
    },
    sidebar: {
      users: [
        {name: "Sveta", id: 1},
        {name: "Kirill", id: 2},
        {name: "Andrei", id: 3},
      ],
    },
  },

  getState() {
    return this._state;
  },

  //callSubscriber
  renderEntireTree() {
    console.log("state changed");
  },

  subscribe(observer) {
    this.renderEntireTree = observer;
  },

  dispatch(action) {
    //use switch
    if (action.type === ADD_POST) {
      let newPost = {
        id: this._state.profilePage.postsData.length,
        message: this._state.profilePage.newPostText,
        likes: 0,
      };
      this._state.profilePage.postsData.push(newPost);
      this.renderEntireTree(this._state);
      this._state.profilePage.newPostText = " ";
      this.renderEntireTree(this._state);
    } else if (action.type === UPDATE_POST) {
      this._state.profilePage.newPostText = action.newText;
      this.renderEntireTree(this._state);
    } else if (action.type === SEND_MESSAGE) {
      let newMessage = {
        id: this._state.dialoguesPage.messagesData.length,
        message: this._state.dialoguesPage.newMessageText,
        sender: "someone",
      };
      this._state.dialoguesPage.messagesData.push(newMessage);
      this.renderEntireTree(this._state);
      this._state.dialoguesPage.newMessageText = "";
      this.renderEntireTree(this._state);
    } else if (action.type === UPDATE_MESSAGE) {
      this._state.dialoguesPage.newMessageText = action.newText;
      this.renderEntireTree(this._state);
    }
  },
};

export const addPostActionCreator = () => {
  return {type: ADD_POST};
};
export const updatePostActionCreator = (text) => {
  return {type: UPDATE_POST, newText: text};
};

export const sendMessageActionCreator = () => {
  return {type: SEND_MESSAGE};
};

export const updateMessageActionCreator = (text) => {
  return {type: UPDATE_MESSAGE, newText: text};
};

export default store;
