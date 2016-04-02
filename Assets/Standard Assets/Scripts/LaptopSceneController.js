#pragma strict

var myLevel : String;

function Update () {
	if (Input.GetKeyDown(KeyCode.Escape)){
		Application.LoadLevel(myLevel); 
	}
}