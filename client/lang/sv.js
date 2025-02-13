if(typeof(ss) == 'undefined' || typeof(ss.i18n) == 'undefined') {
  if(typeof(console) != 'undefined') console.error('Class ss.i18n not defined');
} else {
  ss.i18n.addDictionary('sv', {
  "GRIDFIELD_BULK_UPLOAD.PROGRESS_INFO":               "Uploading %s file(s). %s done. %s error(s).",
  "GRIDFIELD_BULK_MANAGER.BULKACTION_EMPTY_SELECT":    "Du måst välja åtmistone en rad.",
  "GRIDFIELD_BULK_MANAGER.CONFIRM_DESTRUCTIVE_ACTION": "Denna data kommer att förloras permanent. Är du säker på att du vill fortsätta?"
});
}