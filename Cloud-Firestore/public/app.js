//(function(){
  var config = 
  {
		apiKey: "AIzaSyAElA8_oUBMUA-TVNHvWXBJ5Hut_qGTJWk",
		authDomain: "cloudfirestoreassignment.firebaseapp.com",
		databaseURL: "https://cloudfirestoreassignment.firebaseio.com",
		projectId: "cloudfirestoreassignment",
		storageBucket: "cloudfirestoreassignment.appspot.com",
		messagingSenderId: "196075834727",
		appId: "1:196075834727:web:aac1594b84b2a31f7833c2",
		measurementId: "G-0NQ3PPZ59Z"
  };
  // Initialize Firebase
  firebase.initializeApp(config);
  var firestore = firebase.firestore();

  const docRef = firestore.doc("samples/Data");
  const outputHeader = document.querySelector("#stringOutput");
  const inputTextField = document.querySelector("#latestStringStatus");
  const saveButton = document.querySelector("#saveButton");
  const loadButton = document.querySelector("#loadButton");

  saveButton.addEventListener("click", function()
	{
		const textToSave = inputTextField.value;
		console.log("I am going to save " + textToSave + " to Firestore.");
		docRef.set
		({
			stringStatus: textToSave
		}).then(function()
		{
			console.log("Status Saved!");
		}).catch(function (error)
		{
			console.log("Got an error: ", error);
		});
	});

	loadButton.addEventListener("click", function()
	{
		docRef.get().then(function (doc)
		{
			if (doc && doc.exists)
			{
				const	myData = doc.data();
				outputHeader.innerText = "Your Question: " + myData.stringStatus;
			}
		}).catch(function (error)
		{
			console.log("Got an error: ", error);
		});
	});

	
        //The array of responses the 8-Ball will use to answer your question.
    var myAnswers =
    [
        "As I see it, yes.",
        "Ask again later.",
        "It's important to not tell you at this time.",
        "Cannot predict at this time.",
        "Please ask again.",
        "It's best if you don't count on it.",
        "It is certain.",
        "It is decidedly so.",
        "Most likely the case.",
        "No.",
        "To my knowledge, no.",
        "Outlook is not very good.",
        "Chances are likely.",
        "Please try asking again.",
        "Yes.",
        "It seems doubtful.",
        "Without a doubt.",
        "Signs point to yes.",
        "Yes -- Definitely!",
        "You may rely on it."
    ];

    //This selects an answer randomly from the array.
    var randomAnswer = "For your question... " + myAnswers[Math.floor(Math.random()*myAnswers.length)];
//})();

//
