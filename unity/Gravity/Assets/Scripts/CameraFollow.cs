using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class CameraFollow : MonoBehaviour
{
     public Transform cameraPosition;

    public Rigidbody2D target;

    // Update is called once per frame
    void Update()
    {
        cameraPosition.position = new Vector3(target.position.x, target.position.y, cameraPosition.position.z);
    }
}
