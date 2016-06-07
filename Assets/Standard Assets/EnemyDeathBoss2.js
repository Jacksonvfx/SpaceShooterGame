#pragma strict

import UnityEngine.UI;

var bosslife = 0.0;
var totalBossDamage = 0.0;

var WARNING : GameObject;

function Start()
{
    var clone = Instantiate(WARNING);
    Destroy (clone, 3);


}

function OnCollisionEnter(bullet : Collision) {
    if(bullet.gameObject.tag == "PowerBullet")
    {
        TakeDamage(100);
    }
}


function TakeDamage(damage: float) {
    bosslife -= damage;
    GameMaster.totalBossDamage += damage;
    Debug.Log("got Hit for " + damage + " damage");

    Update();
}

function Update() {
    if(bosslife <= 0)
    {
            Destroy(transform.parent.gameObject);
            GameMaster.currentScore += 500;
            PlayerSelect.level2Complete = true;
            Application.LoadLevel ("PlayerSelect");
    }
}

function OnBecameInvisible()
{
	Destroy(transform.parent.gameObject);
}
