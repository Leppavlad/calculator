import { LangConsumer } from "../../context/language";

export function LocaleText({ tid }) {
  return (
    <LangConsumer>{(data) => data.activeDataset[tid] || tid}</LangConsumer>
  );
}
