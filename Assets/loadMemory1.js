var myLevel : String;
var inTrigger : boolean = false;

function OnTriggerStay (myCollision : Collider) {
	if (myCollision.gameObject.name == "MemoryTrigger1"){
		Debug.Log ("imhere"); 
		GoToMemory ();
	}
}


function GoToMemory () {
	if (Input.GetKeyDown(KeyCode.Z)){
		Application.LoadLevel(myLevel); 
	}
}