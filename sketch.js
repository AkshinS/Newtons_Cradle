
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const Render = Matter.Render;

var world;
var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5, bobObject6, bobObject7;
var roofObject;
var rope1, rope2, rope3, rope4, rope5, rope6, rope7;

function setup() {
	createCanvas(canvas.width = window.innerWidth, canvas.height = window.innerHeight);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	roofObject = new Roof(width / 2, 40, 600, 35);

	bobDiameter = 70;

	startBobPositionX = width / 2;
	bobObject1 = new Bob(startBobPositionX - bobDiameter * 3, 450, bobDiameter);
	bobObject2 = new Bob(startBobPositionX - bobDiameter * 2, 450, bobDiameter);
	bobObject3 = new Bob(startBobPositionX - bobDiameter, 450, bobDiameter);
	bobObject4 = new Bob(startBobPositionX, 450, bobDiameter);
	bobObject5 = new Bob(startBobPositionX + bobDiameter, 450, bobDiameter);
	bobObject6 = new Bob(startBobPositionX + bobDiameter * 2, 450, bobDiameter);
	bobObject7 = new Bob(startBobPositionX + bobDiameter * 3, 450, bobDiameter);


	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
			width: 1200,
			height: 700,
			wireframes: false
		}
	});

	rope1 = new Rope(bobObject1.body, roofObject.body, -bobDiameter * 3, 0);
	rope2 = new Rope(bobObject2.body, roofObject.body, -bobDiameter * 2, 0);
	rope3 = new Rope(bobObject3.body, roofObject.body, -bobDiameter * 1, 0);
	rope4 = new Rope(bobObject4.body, roofObject.body, 0, 0);
	rope5 = new Rope(bobObject5.body, roofObject.body, bobDiameter * 1, 0);
	rope6 = new Rope(bobObject6.body, roofObject.body, bobDiameter * 2, 0);
	rope7 = new Rope(bobObject7.body, roofObject.body, bobDiameter * 3, 0);


	Engine.run(engine);

}

function draw() {
	rectMode(CENTER);
	background("lightGrey");

	rope1.display();
	rope2.display();
	rope3.display();
	rope4.display();
	rope5.display();
	rope6.display();
	rope7.display();
	bobObject1.display();
	bobObject2.display();
	bobObject3.display();
	bobObject4.display();
	bobObject5.display();
	bobObject6.display();
	bobObject7.display();
	roofObject.display();

	fill("black");
	textSize(30);
	text("Press Up Arrow key to move the first Bob", 525, 49);
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(bobObject1.body, bobObject1.body.position, { x: -50, y: -45 });
	}
}

function drawLine(constraint) {
	bobBodyPosition = constraint.bodyA.position
	roofBodyPosition = constraint.bodyB.position
	roofBodyOffset = constraint.pointB;
	roofBodyX = roofBodyPosition.x + roofBodyOffset.x
	roofBodyY = roofBodyPosition.y + roofBodyOffset.y
	line(bobBodyPosition.x, bobBodyPosition.y, roofBodyX, roofBodyY);
}