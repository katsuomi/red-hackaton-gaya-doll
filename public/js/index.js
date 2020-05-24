const reactionRef = firebase.firestore().collection('reaction').doc('reactionID')

const playReaction1 = () => {
  const imageElement = document.getElementById("gif");
  imageElement.src = "./images/cheering.gif";
  reactionRef.update({name: 'cheering'});
  setTimeout(setImageToWhite,2000)
}

const playReaction2 = () => {
  const imageElement = document.getElementById("gif");
  imageElement.src = "./images/www.gif";
  reactionRef.update({name: 'www'});
  setTimeout(setImageToWhite,2000)
}

const playReaction3 = () => {
  const imageElement = document.getElementById("gif");
  imageElement.src = "./images/clap.gif";
  reactionRef.update({name: 'clap'});
  setTimeout(setImageToWhite,2000)
}

const playReaction4 = () => {
  const imageElement = document.getElementById("gif");
  imageElement.src = "./images/question.gif";
  reactionRef.update({name: 'question'});
  setTimeout(setImageToWhite,2000)
}

const setImageToWhite = () => {
  const imageElement = document.getElementById("gif");
  imageElement.src = "./images/white.png";
}
