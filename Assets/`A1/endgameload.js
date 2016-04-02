
var myLevel : String;


function OnTriggerStay (myCollision : Collider) {
	if (myCollision.gameObject.name == "endtrigger"){
		Debug.Log ("this is the end"); 
		ManualEnd ();
	}
}


function ManualEnd () {
	if (Input.GetKeyDown(KeyCode.E)){
	Debug.Log ("youpressedit");
		Application.LoadLevel(myLevel); 
	}
}