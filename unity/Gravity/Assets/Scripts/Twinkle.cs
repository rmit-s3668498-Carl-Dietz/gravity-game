using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Twinkle : MonoBehaviour
{
    public SpriteRenderer sprite;

    Vector2 spriteSize;
    Vector2 scaleChange;

    float scaling;

    void Start()
    {
        spriteSize = sprite.transform.localScale;
    }

    // Update is called once per frame
    void Update()
    {
        if(spriteSize.x <= 0f && spriteSize.y <= 0f)
        {
            scaling = Random.Range(0.5f, 1.4f);
            scaleChange = new Vector2(scaling, scaling);    
        }
        else
        {
            scaling = Random.Range(0.002f, 0.005f);
            scaleChange = new Vector2(spriteSize.x - scaling, spriteSize.y - scaling);
        }

        spriteSize = scaleChange;
        sprite.transform.localScale = scaleChange;
    }
}
