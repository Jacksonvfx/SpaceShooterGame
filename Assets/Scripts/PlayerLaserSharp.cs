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
            Destroy(laserCollider);
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
                    if (hit.rigidbody && hit.rigidbody.tag == "Enemy")
                    {
                        if (laserCollider == null)
                        {
                            laserCollider = Instantiate(PlayerLaserCollider) as GameObject;
                            laserCollider.transform.parent = this.transform;
                            laserCollider.transform.localPosition = Vector2.zero;
                            laserCollider.transform.position = hit.point;
                            Instantiate(coinEffect, hit.transform.position, hit.transform.rotation);
                        }
                    }
                }
                if (hit.collider == null) {
                    Destroy(laserCollider);
                }
            }
            else
                line.SetPosition(1, ray.GetPoint(100));
            yield return null;
        }

        line.enabled = false;
    }
}
