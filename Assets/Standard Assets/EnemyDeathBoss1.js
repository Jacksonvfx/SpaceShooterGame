#pragma strict

import UnityEngine.UI;

var bosslife = 0.0;
var totalBossDamage = 0.0;

var WARNING : GameObject;

var enemyShipExplosion01 : Transform;

var enemyBullets : GameObject[];

function Start()
{
    var clone = Instantiate(WARNING);
    Destroy (clone, 3);
    GameMaster.currentBoss = transform.gameObject;
    var portraitFrame = (GameObject.Find("PortraitFrame").GetComponent("Boss01Portraits") as Boss01Portraits);
    portraitFrame.setCurrentPortrait("Intro");
}

function OnCollisionEnter(bullet : Collision) {
    if(bullet.gameObject.tag == "PowerBullet")
    {
        TakeDamage(100);
    }
}


function TakeDamage(damage: float) {
    bosslife -= damage;
    GameMaster.totalBossDamage += damage;
    Debug.Log("got Hit for " + damage + " damage");

    Update();
}

function Update() {
    var portraitFrame = (GameObject.Find("PortraitFrame").GetComponent("Boss01Portraits") as Boss01Portraits);
    if (bosslife > 0 && GameMaster.lives < 1) {
        portraitFrame.setCurrentPortrait("PlayerDead");
    } else if (bosslife <= 700 && bosslife > 300) {
        portraitFrame.setCurrentPortrait("Phase2");
    } else if (bosslife <= 300 && bosslife > 0) {
        portraitFrame.setCurrentPortrait("Phase3");
    } else if (bosslife <= 0) {
        var effect = Instantiate(enemyShipExplosion01, transform.position, transform.rotation);
        Time.timeScale = 0.5;
        LevelFinisher.instance.finishLevel(transform.parent.gameObject);

        enemyBullets =  GameObject.FindGameObjectsWithTag ("EnemyBullet");

        for(var i = 0 ; i < enemyBullets.length ; i ++)
            Destroy(enemyBullets[i]);
        /* things that happen on boss death */
        var fadeScreen = GameObject.Find("FadeScreen");
        var fadeInOut = (fadeScreen.GetComponent("FadeInOut") as FadeInOut);
        fadeInOut.setFadeToWhite();
        /* set boss health bar to 0 */
        var bosshealth = GameObject.Find("BossHealth").GetComponent(UnityEngine.UI.Slider);
        bosshealth.value = 0;
        /* invoke outtro */
        portraitFrame.setCurrentPortrait("Outtro");
    }
}

function OnBecameInvisible()
{
    Destroy(transform.parent.gameObject);
    GameMaster.currentBoss = null;
}
