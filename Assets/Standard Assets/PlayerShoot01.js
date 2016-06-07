#pragma strict

var bullet:GameObject ;
var fire : KeyCode;

var fireRate = 0.2;
var readyToShoot = true;

function Update ()
{
	if ((Input.GetKey(fire) || Input.GetButton("X")) && readyToShoot)
	{
	    var newBullet = Instantiate(bullet, transform.position,transform.rotation);
            newBullet.SendMessage('SetDamage', GameMaster.bulletDamage);
	    readyToShoot = false;
	    Invoke("ResetReadyToShoot", fireRate);
	}

}
function ResetReadyToShoot()
{
readyToShoot = true;
}
