using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Gravity : MonoBehaviour
{
    public Transform[] planets;

    public Rigidbody2D rigidBody;

    public float gravitationalForce;
    private Vector3 direction;
    void Start()
    {   
        direction = Vector3.zero;
    }

    // Update is called once per frame
    void FixedUpdate ()
    {
        for (int i = 0; i < planets.Length; i++) 
        {
            direction = (planets[i].position-transform.position).normalized;
            rigidBody.AddForce(direction*gravitationalForce);  
        }  
    }
}
