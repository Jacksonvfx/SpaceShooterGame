using UnityEngine;
using System.Collections;
using System;



public class PlayerLaserSharp : MonoBehaviour
{
    public GameObject PlayerLaserCollider;
    public Transform coinEffect;

    private GameObject laserCollider = null;

    LineRenderer line;

    void Start ()
    {
        line = gameObject.GetComponent<LineRenderer>();
        line.enabled = false;
    }
    void Update ()
    {
        if((Input.GetKeyDown("z") || Input.GetButtonDown("Y")) && GameMaster.power > 0)
        {
            StopCoroutine("FireLaser");
            StartCoroutine("FireLaser");
        } else {
            //Destroy(laserCollider);
        }
    }
    IEnumerator FireLaser()
    {
        line.enabled = true;

        while((Input.GetKey("z") || Input.GetButton("Y")) && GameMaster.power > 0)
        {
            GameMaster.power -= 1;
            Ray ray = new Ray(transform.position, transform.forward);
            RaycastHit hit;

            line.SetPosition(0, ray.origin);

            if(Physics.Raycast(ray, out hit, 100))
            {
                if (hit.collider.tag == "Enemy")
                {
                    hit.collider.gameObject.SendMessage("TakeDamage", 1);
                    line.SetPosition(1, hit.point);
		    IEnumerator coroutine;
		    Transform effect = Instantiate(coinEffect, hit.transform.position, hit.transform.rotation);
		    coroutine = KillEffectAfterTime(effect.gameObject);
		    StartCoroutine(coroutine);
			//}
                }
            }
            else
                line.SetPosition(1, ray.GetPoint(100));
            yield return null;
        }

        line.enabled = false;
    }

    IEnumerator KillEffectAfterTime(GameObject obj)
    {
	Debug.Log("About to wait for a second");
	yield return new WaitForSeconds(1);
	Destroy(obj);
	Debug.Log("Waiting done!");
    }
}
