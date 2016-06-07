#pragma strict

var moveUp : KeyCode;
var moveDown : KeyCode;
var moveLeft : KeyCode;
var moveRight : KeyCode;

var speed : float = 10;


var minX = -6;
var maxX = 6;
var minZ = -8;
var maxZ = 8; 

function Update () 
{
	if (Input.GetKey(moveUp) || Input.GetKey(moveDown) || Input.GetKey(moveRight)  || Input.GetKey(moveLeft)) 
	{
		if (Input.GetKey(moveUp)  && (transform.localPosition.z < maxZ))
		{
			GetComponent.<Rigidbody>().velocity.z = speed;
		}
		if (Input.GetKey(moveDown)  && (transform.localPosition.z > minZ))
		{
			GetComponent.<Rigidbody>().velocity.z = speed * -1;
		}
		if (Input.GetKey(moveRight)  && (transform.localPosition.x < maxX))
		{
			GetComponent.<Rigidbody>().velocity.x = speed * 1;
		}
		if (Input.GetKey(moveLeft)  && (transform.localPosition.x > minX))
		{
			GetComponent.<Rigidbody>().velocity.x = speed * -1;
		}
		
		
		
		if (GetComponent.<Rigidbody>().velocity.z > 0 && transform.localPosition.z >= maxZ)
		{
			GetComponent.<Rigidbody>().velocity.z = 0;
		}
		if (GetComponent.<Rigidbody>().velocity.z < 0 && transform.localPosition.z <= minZ)
		{
			GetComponent.<Rigidbody>().velocity.z = 0;
		}
		if (GetComponent.<Rigidbody>().velocity.x > 0 && transform.localPosition.x >= maxX)
		{
			GetComponent.<Rigidbody>().velocity.x = 0;
		}
		if (GetComponent.<Rigidbody>().velocity.x < 0 && transform.localPosition.x <= minX)
		{
			GetComponent.<Rigidbody>().velocity.x = 0;
		}
	}
	else
	{
		GetComponent.<Rigidbody>().velocity.z = 0;
  		GetComponent.<Rigidbody>().velocity.x = 0;
	}
}

function OnCollisionEnter(BoxCollider)
{
		//Destroy(gameObject);
		GameMaster.lives -= 1;
		if (GameMaster.lives < 1)
		{
			Destroy(gameObject);
		}
}
