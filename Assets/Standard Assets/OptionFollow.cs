using UnityEngine;
using System.Collections;
using System.Collections.Generic;

public class OptionFollow : MonoBehaviour
{
    public Transform followTransform;
    public int frameDelay = 15;

    private List<Vector3> positionList = new List<Vector3>();

	// Use this for initialization
	void Start () {
	    for(int i = 0; i < frameDelay; i++)
        {
            positionList.Add(followTransform.localPosition);
        }
	}
	
	// Update is called once per frame
	void Update ()
    {
	    if(Input.GetAxis("Horizontal") != 0.0f || Input.GetAxis("Vertical") != 0.0f)
        {
            positionList.Add(followTransform.localPosition);
            if(positionList.Count > frameDelay)
            {
                positionList.RemoveAt(0);
                transform.localPosition = positionList[0];
            }
        }
	}
}
