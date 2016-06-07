#pragma strict

var speed = 0.01;
private var displayRatio = 0.0;

function Start ()
{
}

function getBossLife() : float {
    return (GameMaster.currentBoss.GetComponent("EnemyDeathBoss1") as EnemyDeathBoss1).bosslife;
}

function Update() {
    var bosshealth = GameObject.Find("BossHealth").GetComponent(UnityEngine.UI.Slider);
    if (displayRatio < 1) {
        displayRatio = displayRatio + speed;
    }
    bosshealth.value = getBossLife() * displayRatio;
}

function Spawn()
{
}
