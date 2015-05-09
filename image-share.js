Images = new FS.Collection("images", {
  stores: [new FS.Store.FileSystem("images", {path: "~/uploads"})]
});

if (Meteor.isClient) {
  
Template.imagesSubmitted.helpers({
   images: Images.find() 
    
});
    
Template.imagesSubmitted.events({
   
'dblclick .uploadedImage': function(e){
 
    Images.remove({_id:this._id});
    
}
    
});
    
Template.main.events({

'click #submitFiles': function(event, template) {
    event.preventDefault();
    var files = document.getElementById("myFileInput").files; //get multiple files
    for (var i = 0, ln = files.length; i < ln; i++) {
      Images.insert(files[i], function (err, fileObj) { //each file that is successfully uploaded...
       
          
         Images.update({_id:fileObj._id},{$set:{
      
      uploadedBy: 'evan',
      inGroupWith:['john','dan','brian'],
      date: new Date()
      
      
      }})   //Add in the additional information you want
      });
    $('#myFileInput').val('');
    }
        
  }   
    
    
});
    
    
    
    
}
