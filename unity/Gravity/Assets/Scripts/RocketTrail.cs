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
        if(keyHeld && (Time.frameCount%7 == 0))
        {
            Instantiate(trail, new Vector2(rigidBody.position.x, rigidBody.position.y), Quaternion.identity);
        }
        
        if(Input.GetKeyDown(KeyCode.UpArrow))
        {
            keyHeld = !keyHeld;
        }
    }
}
