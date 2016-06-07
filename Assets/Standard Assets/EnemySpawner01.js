#pragma strict

var objectToSpawn : GameObject;
var spawnDelay = 1.0;
var initialSpawnDelay = 4.0;
var pathSpeed : double = 5.0;
var path : String;

function Start ()
{
    yield WaitForSeconds(initialSpawnDelay);
    Invoke("Spawn", spawnDelay);
}

function Spawn()
{

    var obj = Instantiate(objectToSpawn, transform.position, transform.rotation);
    obj.SendMessage("setPath", path);
    obj.SendMessage("setPathSpeed", pathSpeed);
	Invoke("Spawn",spawnDelay);
}
