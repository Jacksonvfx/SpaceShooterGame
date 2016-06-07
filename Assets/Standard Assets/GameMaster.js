#pragma strict

import UnityEngine.UI;
var PowerSlider: UnityEngine.UI.Slider;
var BossHealth : UnityEngine.UI.Slider;

static var currentScore : int = 0;
static var lives : int = 10;
static var ammo : float = 10.0;
static var power : int = 0;
static var bulletDamage : int = 1;
static var level1Complete : boolean = false;

static var characterChoice : GameObject;
static var totalBossDamage : float = 0;

static var currentBoss : GameObject;


function Start () {
    Debug.Log("start");
    currentScore = 0;
    lives = 3;
    power = 500;
    PowerSlider = GameObject.Find("PowerSlider").GetComponent(UnityEngine.UI.Slider);
    BossHealth = GameObject.Find("BossHealth").GetComponent(UnityEngine.UI.Slider);
    Instantiate(characterChoice, transform.position, transform.rotation);
    Time.timeScale = 1.0;

}


function OnGUI ()
{
    GUI.Box (new Rect (0,0,100,50), "Score " + currentScore);
    GUI.Box (new Rect (0,20,100,50), "Health x " + lives);
    GUI.Box (new Rect (0,40,100,50), "Ammo x " + ammo);
    //GUI.Box (new Rect (0,60,100,50), "Power " + power);

    //GUI.Box (Rect (Screen.width - 100,0,100,50), "Top-right");
    //GUI.Box (Rect (0,Screen.height - 50,100,50), "Bottom-left");
    //GUI.Box (Rect (Screen.width - 100,Screen.height - 50,100,50), "Bottom-right");
}

function Update ()
{
    if (lives <= 0)
    {
        Invoke("returnToPlayerSelectDied", 3);
    }

    if (Input.GetKey("q"))
    {
        Application.LoadLevel("PlayerSelect");
    }
    if (Input.GetKey ("escape"))
    {
        Application.Quit();
    }
    if (Input.GetKey ("p"))
    {
        Time.timeScale = 0.0;
    }
    if (Input.GetKey ("o"))
    {
        Time.timeScale = 1.0;
    }

    PowerSlider.value = power;
}

function returnToPlayerSelectDied() {
    Application.LoadLevel ("PlayerSelect");
}
