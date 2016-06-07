 #pragma strict

// FadeInOut

var fadeWhite : Texture2D;
var fadeBlack : Texture2D;
var fadeSpeed = 0.2;
var drawDepth = -1000;

private var alpha = 0.0;
private var fadeDir = -1;
private var fadeToWhite = false;

function OnGUI(){
    if(GameMaster.lives <= 0)
    {
        alpha -= fadeDir * fadeSpeed * Time.deltaTime;
        alpha = Mathf.Clamp01(alpha);

        GUI.color.a = alpha;

        GUI.depth = drawDepth;

        GUI.DrawTexture(Rect(0, 0, Screen.width, Screen.height), fadeBlack);
    }
    if (fadeToWhite) {
        alpha -= fadeDir * fadeSpeed * Time.deltaTime;
        alpha = Mathf.Clamp01(alpha);

        GUI.color.a = alpha;

        GUI.depth = drawDepth;

        GUI.DrawTexture(Rect(0, 0, Screen.width, Screen.height), fadeWhite);
    }
}

function setFadeToWhite() {
    fadeToWhite = true;
}
