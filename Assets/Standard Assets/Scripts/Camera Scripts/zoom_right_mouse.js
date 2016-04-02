#pragma strict
var zoom : int = 20; //determines amount of zoom capable. Larger number means further zoomed in
var normal : int = 60; //determines the default view of the camera when not zoomed in
var smooth : float = 5; //smooth determines speed of transition between zoomed in and default state
private var zoomedIn = false; //boolean that determines whether we are in zoomed in state or not
 
function Update () {
	if(Input.GetKeyDown(KeyCode.Z)){        //This function toggles zoom capabilities by pressing the mouse 2 button. If it's zoomed in, it will zoom out
 		zoomedIn = !zoomedIn;
	}
 
	if(zoomedIn == true){    //If "zoomedIn" is true, then it will not zoom in, but if it's false (not zoomed in) then it will zoom in.
		GetComponent.<Camera>().fieldOfView = Mathf.Lerp(GetComponent.<Camera>().fieldOfView,zoom,Time.deltaTime*smooth);
	}
 
	else {
 		GetComponent.<Camera>().fieldOfView = Mathf.Lerp(GetComponent.<Camera>().fieldOfView,normal,Time.deltaTime*smooth);
	}
 
}
