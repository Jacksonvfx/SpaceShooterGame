

var life = 0.0;
var enemyShipExplosion01 : Transform;

var colors = new Color[2];


function OnCollisionEnter(bullet : Collision) {
    if(bullet.gameObject.tag == "PowerBullet")
    {
        TakeDamage(10);
    }
}


function TakeDamage(damage: float) {
    life -= damage;
    Debug.Log("got Hit for " + damage + " damage");
    GetComponent.<Renderer>().material.color = colors[0];
    yield WaitForSeconds(.05);
    GetComponent.<Renderer>().material.color = colors[1];
    Update();
}

function Update() {
    if(life <= 0)
    {
        var effect = Instantiate(enemyShipExplosion01, transform.position, transform.rotation);
        Destroy(transform.parent.gameObject);
        GameMaster.currentScore += 10;
    }
}

function OnBecameInvisible()
{
	Destroy(transform.parent.gameObject);
}
