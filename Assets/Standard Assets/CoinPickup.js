#pragma strict

var coinEffect : Transform;
var coinValue = 100;

function OnTriggerEnter (info : Collider)
{
	if (info.tag == "Player")
	{
	    GameMaster.currentScore += coinValue;
	    GameMaster.ammo += 30;
            GameMaster.bulletDamage = 10;
	    PlayerController02.speed += 10;
		var effect = Instantiate(coinEffect, transform.position, transform.rotation);
		Destroy(effect.gameObject, 3);
		Destroy(gameObject);
	}
}
