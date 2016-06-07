#pragma strict

var bullet:GameObject ;
var boss : GameObject;
var fireRate = 2.0;
var readyToShoot = true;

function Update ()
{
    var bosslife = (GameMaster.currentBoss.GetComponent("EnemyDeathBoss1") as EnemyDeathBoss1).bosslife;
	if (readyToShoot && bosslife <= 300)
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
