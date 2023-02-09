(c) Copyright 2023 Andrew J. Peterson. All Rights Reserved.

Throughout my life, my resume has evolved. Orignially a manually-typed page, on to a computerized MSWord document,  to an XML document with varied XSLT transforms, to the most recent version (ironic drum roll): a PDF dump of my LinkedIn page. 

LinkedIn is great and all, but their tuning for resume output is anemic. Ideally a resume tool should help create a one-page summary, customized for specific opportunities. (I'm _not_ solving this!) By flooding people with "everything" I was giving people that "I'd done lots of stuff", but it likely wasn't the right answer for most jobs. It was not the quality I usually aim for, and I was letting my occassional scorn for the recruiting process get in my own way. This repo represents an attempt to rectify that.

Technically, I wanted to keep the project as low-tech as possible. I would create a clean HTML document, style it with CSS, and be done. One of my original ideas with an organic-shaped timeline,
where my experiences were connected via a meandering path,  
representing my professional journey. The more I developed the idea, the more I realized that the visual design would be a challenging-- too challenging for me to execute gracefully. The meandering shape remains, but I reduced the scope of the idea, and this is a significantly simplified version.

In my final polish, I was trying out numerous color schemes, and so I decided to make a little interactive tool to let me do this. So there _is_ a little itsy-bitsy bit of Javascript.

## Usage

Contact me, and I'll send you a PDF!

To see it locally,

1. check out the code
2. run some sort of local server
3. look at `index.html`
4. to make a PDF, just make sure page margins are set to 0, and it should just work.


## Dont Read Me

Stuff that is not essential, but I stick here for reference.

### External references

I generated the curve at https://app.haikei.app/

I'm using the fonts: Lora + Nunito. Lora is the standard for my web sites, but it is quite heavy in the italic version, so I pulled in Nunito as a secondary font. Suggestion comes from https://www.figma.com/google-fonts/lora-font-pairings/#:~:text=Lora%20is%20a%20well%20balanced,%2C%20Ubuntu%2C%20Alegreya%20and%20Nunito.

### Color Schemes

I added the color schemes to be directly configurable. Interesting ones:
- [HP Calculator](http://127.0.0.1:3000/#river=#dfc28d;riverside=#d1b071;land=#b8964b;header=#a3110b;tagline=#65461d;contacts=#540203;sections=#a98410;text=#4d2d10;skills=#382417)
- [Tan](http://127.0.0.1:3000/#river=#d9be6d;riverside=#e1cc8e;land=#d9d0c5;header=#724137;tagline=#87614a;contacts=#8a634c;sections=#8c644d;text=#724138;skills=#724138)
- [Purple](http://127.0.0.1:3000/#river=#5e408b;riverside=#563e76;land=#5e418b;header=#9399a2;tagline=#037a7b;contacts=#9399a2;sections=#04797b;text=#d6b497;skills=#d3b295)
- [http://127.0.0.1:3000/#river=#4f0e03;riverside=#531002;land=#581102;header=#e07ca0;tagline=#a36d3e;contacts=#f285ad;sections=#a66f3f;text=#a69c95;skills=#a69c95]
- [http://127.0.0.1:3000/#river=#6d2417;riverside=#641b0c;land=#530f02;header=#e07ca0;tagline=#a36d3e;contacts=#f285ad;sections=#a66f3f;text=#a69c95;skills=#a69c95]
- [Orange with pink accents](http://127.0.0.1:3000/#river=#f28706;riverside=#e2812c;land=#c1712c;header=#733b2f;tagline=#bf455c;contacts=#6d3e36;sections=#b34157;text=#270401;skills=#724138)
- [Burnin' Neon](file:index.html#river=#1e193e;riverside=#000000;land=#480a0a;header=#0a36ee;tagline=#71e714;contacts=#fda830;sections=#71e715;text=#ffcd01;skills=#f33807)
- [Squishy Jellyfish](file:///Users/ndp/workspace/resume/index.html#river=#000000;riverside=#000000;land=#000000;header=#c324d5;tagline=#1922da;contacts=#fe87ff;sections=#c302d4;text=#fe87ff;skills=#5e10ff)
