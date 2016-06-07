#pragma strict

var speed = 2.0;
var sinAmplitude = 1.0;
var sinFrequency = 2.0;
var horizontalOffset = 0.0;
var time : float;


function Start()
{

}

function Update()
{

time += Time.deltaTime;

transform.position -= horizontalOffset*transform.right;

//transform.position += transform.forward*speed*Time.deltaTime;

horizontalOffset = Mathf.Sin(time*sinFrequency)*sinAmplitude;

transform.position += horizontalOffset*transform.right;

}
