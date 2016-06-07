#pragma strict

function OnCollisionEnter()
	{
		GameMaster.currentScore += 1;
	}