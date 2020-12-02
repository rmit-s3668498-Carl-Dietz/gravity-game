using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class RocketTrail : MonoBehaviour
{

    public GameObject trail;

    public Rigidbody2D rigidBody;

    private float keyHeld;

    // Update is called once per frame
    void Update()
    {
        keyHeld = Input.GetAxis("Vertical");

        if(keyHeld > 0 && (Time.frameCount%7 == 0))
        {
            float xPos = rigidBody.position.x+Mathf.Cos(Mathf.Deg2Rad* (rigidBody.rotation-90))/5;
            float yPos = rigidBody.position.y+Mathf.Sin(Mathf.Deg2Rad* (rigidBody.rotation-90))/5;
            
            Instantiate(trail, new Vector2(xPos, yPos), Quaternion.identity);
        }
    }
}
