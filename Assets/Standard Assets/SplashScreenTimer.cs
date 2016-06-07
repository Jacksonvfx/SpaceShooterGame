using UnityEngine;
using System.Collections;

public class SplashScreenTimer : MonoBehaviour {
    public float timer = 3;

	IEnumerator Start () {
        yield return new WaitForSeconds(timer);

        Application.LoadLevel("PlayerSelect");

	}
	

}
