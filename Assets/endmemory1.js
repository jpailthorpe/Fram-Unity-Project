#pragma strict

var myLevel : String;


function OnTriggerStay (myCollision : Collider) {
	if (myCollision.gameObject.name == "exitcube"){
		Debug.Log ("exitmemory"); 
		Application.LoadLevel(myLevel);
	}
}

