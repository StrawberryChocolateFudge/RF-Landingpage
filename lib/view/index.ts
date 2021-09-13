import { Events, Renderer, RenderType, State } from "../types";

const Render : Renderer = {}

document.body.addEventListener(Events.render, (e: any) => {
  const type: RenderType = e.detail.type;
  const props: State = e.detail.props;
  Render[type](props);
});