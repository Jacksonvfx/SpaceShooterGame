#pragma strict

import UnityEngine.UI;


function OnGUI ()
{
    GUI.Box (new Rect (770,400,150,30), "Choose Your Ship");
    GUI.Box (new Rect (640,700,100,20), "Press 1");
    GUI.Box (new Rect (790,700,100,20), "Press 2");
    GUI.Box (new Rect (940,700,100,20), "Press 3");

    //GUI.Box (Rect (Screen.width - 100,0,100,50), "Top-right");
    //GUI.Box (Rect (0,Screen.height - 50,100,50), "Bottom-left");
    //GUI.Box (Rect (Screen.width - 100,Screen.height - 50,100,50), "Bottom-right");
}