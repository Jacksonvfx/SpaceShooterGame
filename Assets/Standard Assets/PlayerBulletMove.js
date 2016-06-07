#pragma strict

var bulletSpeed : float = 25;
var damage : int;

var coinEffect : Transform;

function Update ()
{
transform.position += transform.forward*bulletSpeed*Time.deltaTime;


}

function SetDamage(newDamage: int) {
    this.damage = newDamage;
}

function OnBecameInvisible () {
	Destroy(gameObject);
}

function OnCollisionEnter(collision : Collision) {
    Instantiate(coinEffect, transform.position, transform.rotation);
    if (collision.gameObject.tag == 'Enemy') {
        collision.gameObject.SendMessage('TakeDamage', damage);
        Destroy(gameObject);
    }
}
