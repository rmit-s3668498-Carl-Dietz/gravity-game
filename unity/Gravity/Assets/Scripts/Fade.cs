using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Fade : MonoBehaviour
{

    private float alpha;

    public SpriteRenderer sprite;

    // Start is called before the first frame update
    void Start()
    {
        alpha = 1;
    }

    // Update is called once per frame
    void Update()
    {
        alpha -= 0.007F;
        sprite.color = new Color (1, 1, 1, alpha);
    }
}
