using UnityEngine;
using System.Collections;

public class Level01_Paths : MonoBehaviour {
    string path;
    double pathSpeed = 5.0;

    void setPath(string path) {
        this.path = path;
    }

    void setPathSpeed(double pathSpeed) {
        this.pathSpeed = pathSpeed;
    }

	// Use this for initialization
	void Start () {
        iTween.MoveTo(gameObject, iTween.Hash("path", iTweenPath.GetPath(this.path), "time", this.pathSpeed, "easetype", iTween.EaseType.linear));
	}

	// Update is called once per frame
	void Update () {

    }
}
