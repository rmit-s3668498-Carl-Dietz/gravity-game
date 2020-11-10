using System.Collections;
using System.Collections.Generic;
using UnityEngine;

[RequireComponent(typeof(Rigidbody2D))]
public class PlayerMovement : MonoBehaviour
{
    public float rotation;

    public float speed;

    public Rigidbody2D rigidBody;
    
    Vector2 movement;

    void Update()
    {
        movement.x = Input.GetAxisRaw("Horizontal");
        movement.y = Input.GetAxisRaw("Vertical");
    }

    void FixedUpdate()
    {
        rigidBody.rotation -= (movement.x*(rotation * Time.fixedDeltaTime));

        rigidBody.transform.position += movement.y*(transform.right * speed * Time.deltaTime);
    }
}