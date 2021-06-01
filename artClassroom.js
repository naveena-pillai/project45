class ArtClassroom{
    constructor(){
        this.tomWalkAnimation = loadAnimation("tom/boy1.png","tom/boy2.png", "tom/boy3.png", "tom/boy4.png", "tom/boy5.png", "tom/boy6.png" );
        this.text = createElement("h3");

    }
    display(){
        tom.position(0,0);
        tom.changeAnimation("tom walk", tomWalkAnimation);

        girlStudent = createSprite(400,650,40,40);
        student.addImage("girl student",girlStudentImg);
        artTeacher = createSprite(600,650,40,40);
        teacher.addImage("mean teacher", meanTeacherImg);
        
        this.text.html("Tom what are you doing here?");
        this.text.position(350,500);
    }
    walkAway(){
        tom.changeAnimation("walk animation",tomWalkAnimation);
        gameState = "gymClass";
    }
}