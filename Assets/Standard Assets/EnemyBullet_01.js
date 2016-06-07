#pragma strict

var bulletSpeed : float = 4;


function Update () 
{
transform.position += transform.forward*bulletSpeed*Time.deltaTime;


}

function OnBecameInvisible () {
	Destroy(gameObject);
}

function OnTriggerEnter(other: Collider)
{
        if (other.tag == "Player")
		Destroy(gameObject);
	}
/*function OnTriggerStay(other: Collider) 
    {
        if (other.tag == "PlayerBubble")
            GameMaster.power +=1;
    }
*/