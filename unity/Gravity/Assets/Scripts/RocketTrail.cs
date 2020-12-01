using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class RocketTrail : MonoBehaviour
{

    public GameObject trail;

    public Rigidbody2D rigidBody;

    private bool keyHeld;

    // Update is called once per frame
    void Update()
    {
        float xPos = rigidBody.position.x+Mathf.Cos(Mathf.Deg2Rad* (rigidBody.rotation-90))/5;
        float yPos = rigidBody.position.y+Mathf.Sin(Mathf.Deg2Rad* (rigidBody.rotation-90))/5;

        print(rigidBody.rotation);

        if(keyHeld && (Time.frameCount%7 == 0))
        {
            Instantiate(trail, new Vector2(xPos, yPos), Quaternion.identity);
        }
        
        if(Input.GetKeyDown(KeyCode.UpArrow))
        {
            keyHeld = !keyHeld;
        }
    }
}
