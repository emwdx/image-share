var Images = new FS.Collection("images", {
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

'change #myFileInput': function(event, template) {
    event.preventDefault();
    FS.Utility.eachFile(event, function(file) {
      Images.insert(file, function (err, fileObj) {
        //Inserted new doc with ID fileObj._id, and kicked off the data upload using HTTP
      });
         
    });
        
  }   
    
    
});
    
    
    
    
}
