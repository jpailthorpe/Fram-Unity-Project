
var myLevel : String;
var inTrigger : boolean = false;

 /*
function OnTriggerEnter (myCollision : Collider) { 
 	if (myCollision.gameObject.name == "Cube") {
 		inTrigger = true;
 		Debug.Log (inTrigger);
  		
 	}
 }
 function OnTriggerExit (myCollision : Collider) {
 	if (myCollision.gameObject.name == "Cube") {
 		InTrigger = false;
 		Debug.Log (inTrigger);
 	}
 }
*/

function OnTriggerStay (myCollision : Collider) {
	if (myCollision.gameObject.name == "Cube"){
		Debug.Log ("hello"); 
		GoToLaptopScene ();
	}
}

function GoToLaptopScene () {
	if (Input.GetKeyDown(KeyCode.E)){
		Application.LoadLevel(myLevel); 
	}
}
