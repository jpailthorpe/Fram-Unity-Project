
var myLevel : String;
var timeTransition : float;


function FixedUpdate () {
	if (Time.timeSinceLevelLoad > (timeTransition)){
		Debug.Log ("Goodbye"); 
		Application.LoadLevel(myLevel);
	}
}