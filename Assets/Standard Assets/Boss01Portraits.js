#pragma strict

import UnityEngine.UI;

var Boss01IntroPortrait : UnityEngine.UI.RawImage;
var Boss01Phase2Portrait : UnityEngine.UI.RawImage;
var Boss01Phase3Portrait : UnityEngine.UI.RawImage;
var Boss01OuttroPortrait : UnityEngine.UI.RawImage;
var Boss01PlayerDeadPortrait : UnityEngine.UI.RawImage;

var Boss01IntroText: UnityEngine.UI.Text;
var Boss01Phase2Text: UnityEngine.UI.Text;
var Boss01Phase3Text: UnityEngine.UI.Text;
var Boss01OuttroText: UnityEngine.UI.Text;
var Boss01PlayerDeadText: UnityEngine.UI.Text;

var currentPortrait : String = null;

function Update () {
    if (currentPortrait != null) {
        Invoke (currentPortrait, .01);
    }
}

function setCurrentPortrait(newCurrentPortrait) {
    this.currentPortrait = newCurrentPortrait;
}

function Intro ()
{
    Boss01IntroPortrait.color.a = 255;
    Boss01IntroText.color.a = 255;
}

function Phase2 ()
{
    Boss01IntroPortrait.color.a = 0;
    Boss01IntroText.color.a = 0;
    Boss01Phase2Portrait.color.a = 255;
    Boss01Phase2Text.color.a = 255;
}

function Phase3 ()
{
    Boss01Phase2Portrait.color.a = 0;
    Boss01Phase2Text.color.a = 0;
    Boss01Phase3Portrait.color.a = 255;
    Boss01Phase3Text.color.a = 255;
}

function Outtro ()
{
    Boss01Phase3Portrait.color.a = 0;
    Boss01Phase3Text.color.a = 0;
    Boss01OuttroPortrait.color.a = 255;
    Boss01OuttroText.color.a = 255;
}

function PlayerDead()
{
    Boss01IntroPortrait.color.a = 0;
    Boss01IntroText.color.a = 0;
    Boss01Phase2Portrait.color.a = 0;
    Boss01Phase2Text.color.a = 0;
    Boss01Phase3Portrait.color.a = 0;
    Boss01Phase3Text.color.a = 0;
    Boss01OuttroPortrait.color.a = 0;
    Boss01OuttroText.color.a = 0;
    Boss01PlayerDeadPortrait.color.a = 255;
    Boss01PlayerDeadText.color.a = 255;
}
