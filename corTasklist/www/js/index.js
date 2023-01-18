/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener('deviceready', onDeviceReady, false);

$('#buttonAppend').click(addTask);
$('#buttonChangeName').click(changeNameTask);


function onDeviceReady() {
    // Cordova is now initialized. Have fun!
    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
}

var callerGlobal;


function addTask(){
    let userTask;
    userTask = prompt("New task");
    $("ul").append("<li><a href='#pageEdita'>" + userTask + " <button type='button' class='buttonDeleteTask'>DELETE</button></a></li>");
    $("ul a").click(saveEvent);
    $("ul").listview("refresh");
    $('.buttonDeleteTask').click(elimina); 
}   

function elimina(e){
    console.log("DELETE");
    var caller = e.target || e.srcElement;
    $(caller).parent().parent().remove();
    return false;
}

function changeNameTask(){
    let newTaskName = $('#inputNewName').val();
    $('#inputNewName').val("");
    $(callerGlobal).html(newTaskName + "<button type='button' class='buttonDeleteTask'>DELETE</button>");
    $('.buttonDeleteTask').click(elimina); 
    document.location = '#homePage';
}

function saveEvent(e){
    callerGlobal = e.target || e.srcElement;
    //let taskLabel = $(callerGlobal).parent().text();
    //taskLabel = taskLabel.replace("DELETE", "");
    //$('#inputNewName').attr("value", taskLabel);
}   
