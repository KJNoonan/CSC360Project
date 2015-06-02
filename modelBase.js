/*
 * Model Base object for persistent memory in local storage
 *
 * Written by Craig Miller, March 2014
 *
 *
 * Example usage:
 *   carModel = new Model("car");   // create new data model called "car"
 *   car1 = carModel.create();  // create an instance of the car model
 *   car1.color = "blue";
 *   car1.save();       // save car1 object in local storage
 *   carModel.find({color: "blue"})  // retrieve array of saved objects with color blue
 *
 *   car1.delete();    // remove car1 object from local storage
 *
 *   carModel.delete_all();   // removes all objects from persistent memory
 *
 * Notes and caveats:
 * 1) Operations are not efficient, requiring linear operations
 * 2) The match for find only matches at the top level
 *
 */

Model = function(name)
{
  var retrieve, obj;
  this._model_name = name;
  retrieve = localStorage.getItem(name);
  if (retrieve === null) {
    // initialize local storage
    obj = [];
    localStorage.setItem(name, JSON.stringify(obj));
  }
}

Model.prototype.match = function(obj1, obj2)
{
  if (obj2 === null) {
    return false;
  }
  for (k in obj1) {
    if (obj1[k] !== obj2[k]) {
      return false;
    }
  }
  return true;
}

Model.prototype.find = function(obj)
{
  var retrieveList;
  retrieveList = JSON.parse(localStorage.getItem(this._model_name));
  var matchList = [];
  for (var i = 0; i < retrieveList.length; i++) {
    if (this.match(obj, retrieveList[i])) {
      matchList.push(this.create(retrieveList[i]));
    }
  }
  return matchList;
}

Model.prototype.create = function(contents)
{
  contents = contents || {};
  var newObject = Object.create(this);
  for (k in contents) {
    newObject[k] = contents[k];
  }
  return newObject;
}

Model.prototype.save = function()
{
  var retrieve, retrieveList;
  retrieve = localStorage.getItem(this._model_name);
  retrieveList = JSON.parse(retrieve);

  if ("id" in this) {
    retrieveList[this.id] = this;
  }
  else {
    this.id = retrieveList.length
    retrieveList.push(this);
  }
  var listString = JSON.stringify(retrieveList);
  localStorage.setItem(this._model_name, listString);
  return this;
}

Model.prototype.delete = function()
{
  var retrieve, retrieveList;

  if ("id" in this) {
    retrieve = localStorage.getItem(this._model_name);
    retrieveList = JSON.parse(retrieve);
    retrieveList[this.id] = null;
    var listString = JSON.stringify(retrieveList);
    localStorage.setItem(this._model_name, listString);
    return true;
  }

  return false;
}

Model.prototype.delete_all = function()
{
  localStorage.setItem(this._model_name, JSON.stringify([]));
  return true;
}