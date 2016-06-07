#pragma strict

var object : Transform;

function Update ()
{
    transform.position = object.transform.position;
}

function OnTriggerStay(other: Collider) 
{
    if (other.tag == "EnemyBullet" && GameMaster.power < 1000)
    GameMaster.power +=1;
}
