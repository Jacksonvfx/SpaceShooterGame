#pragma strict

var bullet:GameObject ;

var fireRate = 2.0;
var readyToShoot = true;

function Update () 
{
	if (readyToShoot)
	{
	Instantiate(bullet, transform.position,transform.rotation);
	readyToShoot = false;
	Invoke("ResetReadyToShoot", fireRate);
	}
}
function ResetReadyToShoot()
{
readyToShoot = true;
}