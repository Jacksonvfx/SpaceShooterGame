#pragma strict

var bullet:GameObject ;
var fire : KeyCode;

var fireRate = 0.2;
var readyToShoot = true;

function Update () 
{
	if ((Input.GetKey(fire) || Input.GetButton("B")) && readyToShoot && GameMaster.power > 999)
	{
	    Instantiate(bullet, transform.position,transform.rotation);
	    GameMaster.power -= 1000;
	readyToShoot = false;
	Invoke("ResetReadyToShoot", fireRate);
	}

}
function ResetReadyToShoot()
{
readyToShoot = true;
}