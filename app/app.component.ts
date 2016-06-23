import {Component} from '@angular/core';
//import {$WebSocket} from 'angular2-websocket/angular2-websocket';

@Component({
    selector: 'my-app',
    template:
        '<div class="flex-container">' +
        // item 1
        '<div class="flex-item">' +
        '<textarea class="chat-message" #textarea (keyup)="message=textarea.value">{{message}}</textarea>' +
        '<br>' +
        '<button class="send" (click)=send()>Send</button>' +
        '</div>' +
        // item 2
        '<div class="flex-item">' +
        '<ul id="chat-receipt"></ul>' +
        '</div>' +
        // item 3
        '<div class="flex-item">' +
        '<p>Choose a chat room</p>' +
        '<div class="rooms"><table>' +
        '<tr>' +
        '<td><button #b1 value="1" (click)="room=b1.value">1</button></td>' +
        '<td><button #b2 value="2" (click)="room=b2.value">2</button></td>' +
        '<td><button #b3 value="3" (click)="room=b3.value">3</button></td>' +
        '<td><button #b4 value="4" (click)="room=b4.value">4</button></td>' +
        '<td><button #b5 value="5" (click)="room=b5.value">5</button></td>' +
        '<td><button #b6 value="6" (click)="room=b6.value">6</button></td>' +
        '<td><button #b7 value="7" (click)="room=b7.value">7</button></td>' +
        '<td><button #b8 value="8" (click)="room=b8.value">8</button></td>' +
        '<td><button #b9 value="9" (click)="room=b9.value">9</button></td>' +
        '<td><button #b10 value="10" (click)="room=b10.value">10</button></td>' +
        '</tr>' +
        '</table></div>' +
        '<p>Your room is : {{room}}</p>' +
        '<p>Take a name for the chat : ' +
        '<input #box value="Florian" placeholder="Set your name" (keyup)="name=box.value">' +
        '</p>' +
        '<p>Your name is : {{name}}</p>' +
        '<button class="co" (click)="connection()">Connection</button>' +
        '<button class="co" (click)="deconnection()">Deconnection</button>' +
        '<p>State of the connection : {{state}}</p>' +
        '<button (click)="showVariable()">showVariable</button>' +
        '</div>' +


        // fin du container
        '</div>'
})
export class AppComponent {
    room:string="3";
    name:string="Florian";
    state:string="Opened";
    message:string="test";
    //connection:any;

    showVariable(){
        console.log(this.room);
        console.log(this.name);
        console.log(this.state);
        console.log(this.message);
    }
    connection(){
        this.state="Opened";
        //this.connection = new $WebSocket("ws://localhost:8085");
    }
    deconnection(){
        //this.connection.close(true);
        this.room="";
        this.state="Closed";
    }

    send(){
        //console.log("send()");
        if(this.room!="" && this.name!="" && this.state=="Opened" && this.message!=""){
            document.getElementById("chat-receipt").innerHTML += "<li>" + this.name + " : " + this.message +"</li>";
            var finalMessage = this.room + " : " + this.name + " : " + this.message;
            //this.connection.send(finalMessage);
        }else if(this.room==""){
            console.log("In which room should we display the message ?");
        }else if(this.name==""){
            console.log("A boy has no name !");
        }else if(this.state=="Closed"){
            console.log("The connection is closed !");
        }else if(this.message==""){
            console.log("There is any message !");
        }
    }
}


















