#pragma strict

var coinEffect : Transform;

function OnTriggerEnter (info : Collider)
{
	if (info.tag == "Player")
	{
	    GameMaster.currentScore += 1;
	    GameMaster.ammo += 3;
        GameMaster.coins += 1;
		var effect = Instantiate(coinEffect, transform.position, transform.rotation);
		Destroy(effect.gameObject, 3);
		Destroy(gameObject);
	}
}
