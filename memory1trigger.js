#pragma strict

var myLevel : String;

function OnTriggerStay (myCollision : Collider) {
	if (myCollision.gameObject.name == "windowtrigger") {
		Debug.Log("windowGood");
		ZoomTrigger ();
		}
	}

function ZoomTrigger (){
	if (Input.GetKeyDown(KeyCode.H)) {
		Application.LoadLevel(myLevel);
	}
}

	
	
	

	