const reactionCollection = firebase.firestore().collection('reaction')
const reactionRef = firebase.firestore().collection('reaction').doc('reactionID')

let reaction = reactionCollection.onSnapshot(querySnapshot => {
  querySnapshot.docChanges().forEach(change => {
    if (change.type === 'modified') {
      console.log(change.doc.data().name)
      if(change.doc.data().name != 'nothing'){
        playAudio(change.doc.data().name)
      }
    }
  });
});

const playAudio = (audioType) => {
  document.getElementById('first').style.display ="none";

  if(audioType == 'cheering'){
    const audioDom = document.getElementById('audio')
    audioDom.play();
  }else if(audioType == 'www'){
    const audioDom = document.getElementById('audio2')
    audioDom.play();
  }else if(audioType == 'question'){
    const audioDom = document.getElementById('audio3')
    audioDom.play();
  }else{
    const audioDom = document.getElementById('audio4')
    audioDom.play();
  }

  reactionRef.update({name: 'nothing'});
}