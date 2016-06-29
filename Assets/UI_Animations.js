#pragma strict

function Start () {

}
    function Update()
    {
        if(Input.GetKeyDown("r") || Input.GetButton("Left Bumper") || Input.GetButton("Right Bumper"))
        {
            // Plays the reload animation - stops all other animations
            GetComponent.<Animation>().Play("GrayImageTransitionCover", PlayMode.StopAll);
        }
    }