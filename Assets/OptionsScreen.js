#pragma strict

var eventSystem : UnityEngine.EventSystems.EventSystem;
var nextSelectionOptions : GameObject;
var nextSelectionUpgrades : GameObject;
var nextSelectionPlayerSelect : GameObject;

var OptionsScreen : GameObject;
var UpgradesScreen : GameObject;

var OptionsIsVisible = false;
var UpgradesIsVisible = false;
var UIReady = true;
function Update()
{
    if((Input.GetKey("r") || Input.GetButton("Left Bumper"))&& UIReady && OptionsIsVisible == false && UpgradesIsVisible == false)
    {
        Invoke("OptionsScreenHere",.30);

    }
    if((Input.GetKey("t") || Input.GetButton("Right Bumper"))&& UIReady && OptionsIsVisible == false && UpgradesIsVisible == false)
    {
        Invoke("UpgradesScreenHere",.30);

    }
    if((Input.GetKey("r") || Input.GetButton("Left Bumper"))&& UIReady && OptionsIsVisible == true)
    {
        Invoke("OptionsToUpgrades",.30);
    }
    if((Input.GetKey("t") || Input.GetButton("Right Bumper"))&& UIReady && UpgradesIsVisible == true)
    {
        Invoke("UpgradesToOptions",.30);
    }
    if((Input.GetKey("r") || Input.GetButton("Left Bumper"))&& UIReady && UpgradesIsVisible == true)
    {
        Invoke("UpgradesScreenAway",.30);
    }
    if((Input.GetKey("t") || Input.GetButton("Right Bumper"))&& UIReady && OptionsIsVisible == true)
    {
        Invoke("OptionsScreenAway",.30);
    }




}
function ResetUIReady()
{
    UIReady = true;
}

function OptionsScreenHere()
{
    OptionsScreen.transform.position = new Vector3(0,13,0);
    eventSystem.SetSelectedGameObject(nextSelectionOptions);
    UIReady = false;
    OptionsIsVisible = true;
    UpgradesIsVisible = false;
    Invoke("ResetUIReady",.45);
}

function OptionsScreenAway()
{
    OptionsScreen.transform.position = new Vector3(-2,13,0);
    eventSystem.SetSelectedGameObject(nextSelectionPlayerSelect);
    UIReady = false;
    OptionsIsVisible = false;
    Invoke("ResetUIReady",.45);
}

function UpgradesScreenHere()
{
    UpgradesScreen.transform.position = new Vector3(0,13,0);
    eventSystem.SetSelectedGameObject(nextSelectionUpgrades);
    UIReady = false;
    UpgradesIsVisible = true;
    OptionsIsVisible = false;
    Invoke("ResetUIReady",.45);
}

function UpgradesScreenAway()
{
    UpgradesScreen.transform.position = new Vector3(-2,13,0);
    eventSystem.SetSelectedGameObject(nextSelectionPlayerSelect);
    UIReady = false;
    UpgradesIsVisible = false;
    Invoke("ResetUIReady",.45);
}

function OptionsToUpgrades()
{
    OptionsScreen.transform.position = new Vector3(-2,13,0);
    UpgradesScreen.transform.position = new Vector3(0,13,0);
    eventSystem.SetSelectedGameObject(nextSelectionUpgrades);
    UIReady = false;
    UpgradesIsVisible = true;
    OptionsIsVisible = false;
    Invoke("ResetUIReady",.45);
}

function UpgradesToOptions()
{
    UpgradesScreen.transform.position = new Vector3(-2,13,0);
    OptionsScreen.transform.position = new Vector3(0,13,0);
    eventSystem.SetSelectedGameObject(nextSelectionOptions);
    UIReady = false;
    OptionsIsVisible = true;
    UpgradesIsVisible = false;
    Invoke("ResetUIReady",.45);
}