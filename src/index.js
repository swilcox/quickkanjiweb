import { createApp, reactive } from "https://unpkg.com/petite-vue?module";

const store = reactive({
  kanji: "",
  results: "",
  svgFileName: "",
  rawSVG: "",
  msg: "No results to show"
});

const SearchBox = function () {
  return {
    $template: "#search",
    async search() {
      if (store.kanji.length > 0) {
        store.msg = "loading...";
        let resp = await fetch(
          `https://kanjiapi.dev/v1/kanji/${store.kanji}`
        );
        let kanjiDef = await resp.json();
        store.results = kanjiDef;
        if (kanjiDef.meanings.length > 0) {
          store.msg = `Results for: ${store.kanji}`;
          store.kanji = "";
        }
        store.svgFileName = "static/spectrum/0" + kanjiDef.unicode.toLowerCase() + ".svg";
        let svgResp = await fetch(
          store.svgFileName
        );
        let svgRaw = await svgResp.text();
        if (svgRaw.indexOf("<svg xmlns") > 0) {
          svgRaw = svgRaw.substring(svgRaw.indexOf("<svg xmlns"));
        }
        store.rawSVG = svgRaw;
      } else {
        store.msg = "Please type something";
      }
      console.log(store.results);
    }
  };
};

const Results = function () {
  return {
    $template: "#results",
    copy() {
      navigator.clipboard.writeText(store.rawSVG);
    }
  };
};

createApp({
  SearchBox,
  Results,
  store
}).mount();
