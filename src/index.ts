/// <reference types="../../CTAutocomplete" />
/// <reference lib="es2015" />

(async () => {
  ChatLib.chat('Demo loaded. Waiting 5 seconds');
  await new Promise<void>(r => setTimeout(r, 5e3));
  ChatLib.chat('Has it been 5 seconds?');
})();



