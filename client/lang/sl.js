if(typeof(ss) == 'undefined' || typeof(ss.i18n) == 'undefined') {
  if(typeof(console) != 'undefined') console.error('Class ss.i18n not defined');
} else {
  ss.i18n.addDictionary('sl', {
  "GRIDFIELD_BULK_UPLOAD.PROGRESS_INFO":               "V teku je prenos %s datotek(e). %s zaključenih. %s napak(e).",
  "GRIDFIELD_BULK_MANAGER.BULKACTION_EMPTY_SELECT":    "Izbrati morate vsaj en zapis.",
  "GRIDFIELD_BULK_MANAGER.CONFIRM_DESTRUCTIVE_ACTION": "Želite dokončno izbrisati podatke?"
});
}