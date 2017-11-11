/**
 * main.js is the entry point to your program.
 * You find the program logic, data structures and calls in this file
 */

"use strict";
/**
 * Constand ve global degiskenler buraya gelir.
 *
 */
const personImage = $('#personImage');
const personName = $('.personName');
const personDetails = $('.person-details .placeHolder');
const children = $('.children .placeHolder');
const friends = $('.friends .placeHolder');

$('#init').on('click', init);

function init() {
  reset();
  try{
    const input = $('#jsonInput').val();
    person = JSON.parse(input);
  } catch(e){ }

  personImage.attr('src', getValuesByKey('picture'));
  personName.html(`${getValuesByKey('firstName')} ${getValuesByKey('lastName')}`)
  fillPersonDetails();
  fillChildrenDetails();
  fillFriendDetails();
}

function reset(){
  personImage.attr('src', '');
  personName.html('');
  personDetails.html('');
  friends.html('');
  children.html('');
}

function fillPersonDetails() {
  const email = $('<div>').html(getValuesByKey('email'));
  const phone = $('<div>').html(getValuesByKey('phone'));
  personDetails.append(email).append(phone);
}

function fillChildrenDetails () {
   const collegues = getValuesByKey('friends');
   friends.html(createTable(collegues))
}

function fillFriendDetails(){
  const kids = getValuesByKey('children');
  children.html(createTable(kids))
}

function createTable(items){

  let usableFields = Object.keys(items[0]).filter(a => a !== 'picture');

  const headers = setTableHeaders (usableFields);
  const rows = setTableDatas(items, usableFields);

  return `
     <table class="table table-striped col-sm-12">
        <thead>
           <tr>
              ${headers}
           </tr>
        </thead>
        <tbody>
              ${rows}
        </tbody>
     </table>
  `;
}

function setTableHeaders (usableFields) {
  let headers = '';
  usableFields.forEach(function (key) {
    headers += `<th>${key}</th>`;
  });
  return headers;
}

function setTableDatas (items, usableFields){
  let rows = '';
  items.forEach(function (item){
    let data = '';

    usableFields.forEach(function(field){
      try{

        if (field === 'address') {
          const link = "https://www.google.ch/maps/place/"+Object.values(item[field]).join(" ");
          item[field] = `<a href="${link}" target="blank_">visit me!</a>`;
        }

        if(moment(item[field], true).isValid()) {
          item[field] = moment(item[field]).format('DD.MM.YYYY');
        }
      } catch(e){
        console.log('moment is not available');
      }

      data += `<td>${item[field]}</td>`;
    })

    rows += `<tr>
      ${data}
    </tr>`;
  });
  return rows;
}

function getValuesByKey(key) {
  return person[key];
}
