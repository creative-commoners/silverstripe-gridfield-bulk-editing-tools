if(typeof(ss) == 'undefined' || typeof(ss.i18n) == 'undefined') {
  if(typeof(console) != 'undefined') console.error('Class ss.i18n not defined');
} else {
  ss.i18n.addDictionary('nl', {
  "GRIDFIELD_BULK_UPLOAD.PROGRESS_INFO":               "%s bestand(en) geupload. %s verwerkt. %s fout(en).",
  "GRIDFIELD_BULK_MANAGER.BULKACTION_EMPTY_SELECT":    "Selecteer tenminste één rij",
  "GRIDFIELD_BULK_MANAGER.CONFIRM_DESTRUCTIVE_ACTION": "De data wordt permanent verwijderd. Weet je dit zeker?"
});
}