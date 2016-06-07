#pragma strict

public class LevelFinisher extends MonoBehaviour {
    public static var instance : LevelFinisher;

    function Awake () {
        instance = this;
    }

    function finishLevel(boss : GameObject) {
        Debug.Log("finishing level");
        GameMaster.currentScore += 500;
        Destroy(boss);
        Invoke("returnToPlayerSelect", 3);
    }

    function returnToPlayerSelect() {
        PlayerSelect.level1Complete = true;
        Application.LoadLevel ("PlayerSelect");
    }
}
