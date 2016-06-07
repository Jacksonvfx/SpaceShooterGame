#pragma strict

var bulletSpeed : float = 15;


function Update () 
{
transform.position += transform.forward*bulletSpeed*Time.deltaTime;


}

function OnBecameInvisible () {
	Destroy(gameObject);
}

