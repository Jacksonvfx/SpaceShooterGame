#pragma strict

var PowerField: GameObject;
class Boundary
{
    var xMin : float;
    var xMax : float;
    var zMin : float;
    var zMax : float;
    }

static var speed : int = 10;
var tilt : float;
var boundary : Boundary;

function FixedUpdate () {
    var moveHorizontal : float= Input.GetAxis ("Horizontal");
    var moveVertical : float= Input.GetAxis ("Vertical");

    var movement : Vector3= new Vector3 (moveHorizontal, 0.0f, moveVertical);
    GetComponent.<Rigidbody>().velocity = movement * speed;

    GetComponent.<Rigidbody>().position = new Vector3 
    (
        Mathf.Clamp (GetComponent.<Rigidbody>().position.x, boundary.xMin, boundary.xMax), 
        0.0f, 
        Mathf.Clamp (GetComponent.<Rigidbody>().position.z, boundary.zMin, boundary.zMax)
    );

    GetComponent.<Rigidbody>().rotation = Quaternion.Euler (0.0f, 0.0f, GetComponent.<Rigidbody>().velocity.x * -tilt);
}


function OnTriggerEnter(other: Collider)
    {
        if (other.tag == "EnemyBullet")
           { GameMaster.lives -= 1;
    if (GameMaster.lives < 1)
        {
        Destroy(transform.parent.gameObject);
        }
    }
}

   // function Awake () {
       // DontDestroyOnLoad (transform.root.gameObject);
   // }

    function Update ()
    {
        if (Input.GetKey("q"))
        {
            Destroy(transform.parent.gameObject);
        }

    }

    function OnCollisionEnter(collision : Collision)
        {

            GameMaster.lives -= 1;
            if (GameMaster.lives <1)
            {
                Destroy(transform.parent.gameObject);
            }
        }