#pragma strict

var bullet:GameObject ;
var parentlife : EnemyDeath;

parentlife = this.transform.parent.gameObject.GetComponent(EnemyDeath);

function Update () 
{
	if (parentlife.life <=0)
	{
	Instantiate(bullet, transform.position,transform.rotation);
	}
}
