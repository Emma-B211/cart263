** Artist Statement**
Our original idea was much bigger than what we ended up submitting, but from the start, we wanted to create something that still felt complete. We imagined a full game where a character gets sucked into a mysterious book and explores its contents but we knew that we wouldn’t have enough time to finish that entire concept. So, we decided to work in chapters. This not only helped us scale the project realistically but also allowed us to explore gameplay elements around time, urgency, and tension. Chapter 1: Into the Book became a contained experience, small in scope but rich in mood and interactivity.
From the beginning, we wanted the game to feel eerie and immersive, not outright horror, but unsettling, like the player was pulled into a surreal illustrated world where something is always just slightly off. We imagined a quiet, sketched environment with subtle tension building over time. The visual style supports this entirely: everything is hand-drawn in Procreate with a custom brush set I created to keep the linework and textures consistent. Shadows, ink blotches, and a grayscale palette bring the "storybook" concept to life in a haunting way. Our aim was for the player to feel like they were literally inside a book, flipping through its pages, room by room.
Collaboration was both a challenge and a strength. I (Bianca) handled all of the visual design work, drawing the rooms, hallways, objects, UI, and overall look of the world. I created fully detailed drafts for the first rooms to establish tone, then simplified layouts so we could begin building the base game. I also prepared a sheet of assets (doors, chests, keys, etc.) for reuse, in case custom illustrations weren’t ready in time.
In addition to being the artist, I was also one of the programmers. I coded the core architecture of the game, including how rooms are constructed, how the character moves, animates, and how its physics behave. I also implemented the logic for transitioning between rooms. On top of that, I built the inventory and interaction systems, allowing players to pick up items like keys and keycards, as well as the message pop-up functionality. These systems laid the groundwork for Emma to build additional gameplay logic, such as unlocking doors or triggering key events. I also developed the intro transition effect, originally aiming to animate a smooth page flip, but for now, I opted to code a simpler version to ensure functionality within our time constraints. This helped establish the foundation for many of our gameplay mechanics. 
Emma focused on dynamic event systems and polishing gameplay. She added the ink glob chase sequence, implemented a countdown timer after collecting key items, and handled the game-over logic. She also added polish like light flickers and environment reactions (e.g. changing a locked chest sprite to an open one after finding the keycard). While coding the time event when the player has to leave, arrive in the last room, what is supposed to happen was that the door would open when you interact with the keycard reader and it would trigger the Chapter2Scene, however, there is a bug where it happens to quickly and when the door opens when the game registers that the door is now open. Her contributions deepened the sense of threat and urgency in the later sections of the chapter.
Together, we tackled many design challenges, especially around game flow, room transitions, and event timing. One of our shared goals was to create emotional immersion without relying on dialogue or cutscenes. We wanted players to discover the story through space and interactivity. Everything from the lighting to the object placements is meant to feel intentional, as if the book itself is slowly revealing its secrets.
Learning Phaser and programming complex behaviours was more difficult than imagining them, so we scaled our plans as needed. Still, we’re proud of how much we accomplished. We managed to combine art and code in a way that delivers a compelling, atmospheric experience, and we built something that feels like the beginning of a much larger world.
Not only expand in other chapters but also expand the first chapter, to maybe some of the effects that we didn’t tackle: like erasing, or redrawing. Maybe have more rooms, or if not, utilize these for future chapters.
This project was a true collaboration, not just between two teammates, but between visuals and mechanics, code and emotion. Our shared goal was to make the player feel like they’d been pulled into something they weren’t supposed to find. We believe we’ve done that, and we’re excited to continue expanding this strange world beyond the course.

Original Project Proposal: https://docs.google.com/document/d/1jDuMDpfn2KQDRkw-FdO51ermoT61v7scQ2UEYhJ4ra0/edit?usp=sharing 
Assets/Storyboard/Visual Board: https://docs.google.com/presentation/d/1RQBXqf0NYnMgpDtFUofjG2X9y1GFcb7aQLmtFOPH7ww/edit?usp=sharing 



Read Me

#  Chapter 1: Into the Book  
A Phaser game by Bianca Gauthier & Emma Beldick

---

##  Artist Statement

This game is the first chapter in a larger concept where the protagonist is pulled into a strange and mysterious book. While the full game idea is more expansive, we intentionally scoped it down to one chapter to create a complete and polished slice of the world. The idea of chapters not only reflects the book's theme but also gives us room to build tension and test narrative pacing.

The visual direction and world design were led by Bianca, who hand-drew every room, hallway, object, and interface element in Procreate. To speed up development, Bianca also created a custom brush set to maintain consistent line weight and textures across assets. Room layouts, wall structures, and overall visual immersion were carefully planned to establish the eerie, sketchbook-like atmosphere inside the book.

Bianca also handled much of the core game logic: implementing room transitions, character movement, collision with walls, and item pickups. Emma contributed major gameplay systems such as the timer, game-over conditions, the ink monster chase sequence, and interactive events like doors, chests, and keycard activation.

Together, we shared ideas and problems, often pairing up on debugging or extending mechanics as needed. Although we had to limit the scope, we’re proud of the immersive experience we created and are excited to continue developing it after this course.

---

##  Technical Overview

- **Framework:** [Phaser 3](https://phaser.io/) (JavaScript game framework)
- **Languages:** JavaScript, HTML, CSS
- **Tools:** Procreate (visual art), VS Code, GitHub
- **Team Roles:**
  - **Bianca Gauthier:** Visual artist, environment designer, wall/door/room logic, character & item system, Message pop_up, interactive feedback, debugging, intro scene.
  - **Emma Beldick:** Ink Glob behaviour, event systems (light flicker, timer, game over), interactive feedback, door/chest animation logic, debugging, polish, 

###  Features
- 13 custom-designed rooms with unique layouts
- Seamless room transitions via doorways
- A main character with directional walking animations
- Inventory logic (keys, keycards, codes)
- Interactive locked chests/doors that react to inventory
- Light flicker events and tension cues
- Ink monster chase sequence in Room 4
- Countdown timer, game-over scene, chapter ending screen
- Textbox system with pop-up speech feedback

---

##  How to Play

- **Arrow Keys:** Move the character
- **Spacebar:** Interact with items, doors, and chests
- **Goal:** Explore the maze, collect key items, and survive the ink monster

 Picking up the keycard triggers a timed sequence to escape before it’s too late.

---

##  Folder Structure



##  Attribution

- **Art, World Design, Mechanics:** Bianca Gauthier  
- **Game Logic, Events,  Systems:** Emma Beldick  
- **Sound:** “Eerie Ambience”created by Emma Beldick using copyright free music on pixabay and audacity to edit.


---
