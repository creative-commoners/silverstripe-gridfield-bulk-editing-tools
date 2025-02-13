if(typeof(ss) == 'undefined' || typeof(ss.i18n) == 'undefined') {
  if(typeof(console) != 'undefined') console.error('Class ss.i18n not defined');
} else {
  ss.i18n.addDictionary('eo', {
  "GRIDFIELD_BULK_UPLOAD.PROGRESS_INFO":               "Alŝutas %s dosiero(j)n. %s farita(j). %s eraro(j).",
  "GRIDFIELD_BULK_MANAGER.BULKACTION_EMPTY_SELECT":    "Vi devas elekti almenaŭ unu rilordon.",
  "GRIDFIELD_BULK_MANAGER.CONFIRM_DESTRUCTIVE_ACTION": "La datumoj perdiĝos porĉiame. Ĉu daŭrigu?"
});
}