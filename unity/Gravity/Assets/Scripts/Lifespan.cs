using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Lifespan : MonoBehaviour
{
    public int lifeTime;

    public GameObject target;

    // Update is called once per frame
    void Update()
    {
        if(lifeTime < 1)
        {
            GameObject.Destroy(target);
        }
        lifeTime--;
    }
}
