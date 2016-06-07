#pragma strict

var rollSpeed = 200.0;

 
function Update() {
 
  var rollAmount = 0.0;
 
  if (Input.GetKey(KeyCode.RightArrow)){
    rollAmount -= rollSpeed ;
  } else if (Input.GetKey(KeyCode.LeftArrow)){
    rollAmount += rollSpeed ;
  }

  if (Mathf.Abs(transform.rotation.z)<= .45)
  {
  transform.Rotate(0, 0, rollAmount*Time.deltaTime); 
  }
}