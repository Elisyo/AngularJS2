import {Component} from '@angular/core';

@Component({
    selector: 'my-app',
    template:
        '<div class="flex-container">' +
        // item 1
        '<div class="flex-item">' +
            '<textarea id="chat-message" class="chat-message"></textarea>' +
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
                    '<td><button (click)="selectRoom(1)">1</button></td>' +
                    '<td><button (click)="selectRoom(2)">2</button></td>' +
                    '<td><button (click)="selectRoom(3)">3</button></td>' +
                    '<td><button (click)="selectRoom(4)">4</button></td>' +
                    '<td><button (click)="selectRoom(5)">5</button></td>' +
                    '<td><button (click)="selectRoom(6)">6</button></td>' +
                    '<td><button (click)="selectRoom(7)">7</button></td>' +
                    '<td><button (click)="selectRoom(8)">8</button></td>' +
                    '<td><button (click)="selectRoom(9)">9</button></td>' +
                    '<td><button (click)="selectRoom(10)">10</button></td>' +
                '</tr>' +
            '</table></div>' +
            '<p>Your room is : {{room}}</p>' +
            '<p>Take a name for the chat : ' +
                '<input #box value="Florian" placeholder="Set your name" (keyup)="name=box.value"><' +
            '/p>' +
            '<p>Your name is : {{name}}</p>' +
            '<button class="co" (click)="connection()">Connection</button>' +
            '<button class="co" (click)="deconnection()">Deconnection</button>' +
            '<p>State of the connection : {{state}}</p>' +
        '</div>' +


        // fin du container
        '</div>'
})
export class AppComponent {
    room:string="3";
    name:string="Florian";
    state:string="Opened";

    selectRoom(x){
        this.room = x;
    }

    connection(){
        this.state="Opened";
    }

    deconnection(){
        this.state="Closed";
        this.room="";
    }

    send(){
        console.log("send()");
        var message = document.getElementById("chat-message");
        console.log(message);
        console.log(message.innerHTML);
        console.log(message.innerText);
        console.log(message.value);
        if(this.room!="" && this.name!="" && this.state=="Opened" && message.value!=""){
            document.getElementById("chat-receipt").innerHTML += "<li>" + this.name + " : " + message.value +"</li>";
            message.value="";
        }else if(this.room==""){
            console.log("In which room should we display the message ?");
        }else if(this.name==""){
            console.log("A boy has no name !");
        }else if(this.state=="Closed"){
            console.log("The connection is closed !");
        }else if(message.value==""){
            console.log("There is any message !");
        }
    }
}


















