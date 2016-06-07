#pragma strict
import UnityEngine.UI;

var playerCharacter01:GameObject;
var playerCharacter02:GameObject;
var playerCharacter03:GameObject;

var levelChoice : String = "Level01";

static var level1Complete : boolean = false;
var level2Toggle : UnityEngine.UI.Toggle;

static var level2Complete : boolean = false;
var level3Toggle : UnityEngine.UI.Toggle;

static var level3Complete : boolean = false;
var level4Toggle : UnityEngine.UI.Toggle;

static var level4Complete : boolean = false;
var level5Toggle : UnityEngine.UI.Toggle;

static var level5Complete : boolean = false;
var level6Toggle : UnityEngine.UI.Toggle;

static var level6Complete : boolean = false;
var level7Toggle : UnityEngine.UI.Toggle;

static var level7Complete : boolean = false;
var level8Toggle : UnityEngine.UI.Toggle;

function Start () {
    GameMaster.characterChoice = playerCharacter01;

    if(level1Complete == true)
    {
        level2Toggle.interactable = true;
    }
}


function MissionStart()
{
    Application.LoadLevel(levelChoice);
}
function characterChoice1()
{
    GameMaster.characterChoice = playerCharacter01;
}
function characterChoice2()
{
    GameMaster.characterChoice = playerCharacter02;
}
function characterChoice3()
{
    GameMaster.characterChoice = playerCharacter03;
}
function levelChoice1()
{
    levelChoice = "Level01";
}
function levelChoice2()
{
    levelChoice = "Level02";
}
function levelChoice3()
{
    levelChoice = "Level03";
}